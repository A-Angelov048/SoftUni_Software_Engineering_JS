const Furniture = require("../models/Furniture");
const User = require("../models/User");
const Reviews = require("../models/Reviews");

exports.getLatest = () => Furniture.find().sort({ createdAt: -1 }).limit(4);

exports.getAllData = async (page = 1, limit = 8, filter) => {
  const skip = (page - 1) * limit;
  const regex = /^\d+$/;

  if (!regex.test(page) || !regex.test(limit)) {
    throw new Error("Page do not exists.");
  }

  try {
    const [furnitureCount, furniture] = await Promise.all([
      Furniture.find(filter).countDocuments(),
      Furniture.find(filter).skip(skip).limit(Number(limit)),
    ]);

    if (skip >= furnitureCount) {
      throw new Error("Page do not exists.");
    }

    return [furnitureCount, furniture];
  } catch (error) {
    throw error;
  }
};

exports.createFurniture = async (body, userId) => {
  try {
    const result = await Furniture.create(body);

    await User.findByIdAndUpdate(userId, { $push: { furniture: result._id } });
  } catch (error) {
    throw error;
  }
};

exports.getOne = (furnitureId) =>
  Furniture.findById(furnitureId)
    .populate({ path: "owner", select: "role" })
    .populate({
      path: "reviews",
      populate: { path: "ownerReview", select: "username imageProfile" },
    });

exports.wishlistFurniture = async (furnitureId, userId) => {
  try {
    const user = await User.findById(userId).lean();
    const flag = user.wishlist.filter((x) => x.valueOf() === furnitureId);

    if (!!flag[0]) {
      await Promise.all([
        User.findByIdAndUpdate(userId, { $pull: { wishlist: furnitureId } }),
        Furniture.findByIdAndUpdate(furnitureId, {
          $pull: { listUserLikes: userId },
        }),
      ]);
      return "remove";
    } else {
      await Promise.all([
        User.findByIdAndUpdate(userId, { $push: { wishlist: furnitureId } }),
        Furniture.findByIdAndUpdate(furnitureId, {
          $push: { listUserLikes: userId },
        }),
      ]);
      return "add";
    }
  } catch (error) {
    throw error;
  }
};

exports.editFurniture = (furnitureId, body) =>
  Furniture.findByIdAndUpdate(furnitureId, body, { runValidators: true });

exports.deleteFurniture = async (furnitureId, userId) => {
  try {
    const furniture = await this.getOne(furnitureId).lean();

    if (furniture.owner._id.valueOf() !== userId) {
      throw new Error("Furniture not found.");
    }

    if (furniture.reviews.length > 0) {
      await Reviews.deleteMany({ _id: { $in: furniture.reviews } });
    }

    if (furniture.listUserLikes.length > 0) {
      furniture.listUserLikes.forEach(async (currentUserId) => {
        const user = await User.findById(currentUserId);

        if (user.wishlist.includes(furnitureId)) {
          await User.findByIdAndUpdate(currentUserId, {
            $pull: { wishlist: furnitureId },
          });
        }
      });
    }

    await Promise.all([
      User.findByIdAndUpdate(userId, { $pull: { furniture: furnitureId } }),
      Furniture.findByIdAndDelete(furnitureId),
    ]);
  } catch (error) {
    throw error;
  }
};

exports.searchFurniture = (product) => {
  const body = {};

  if (product) {
    body.name = new RegExp(product, "i");
  }

  return Furniture.find(body).sort({ createdAt: -1 }).limit(5);
};

exports.getBasketItems = (data) =>
  Furniture.find(
    { _id: { $in: data } },
    "_id name imageUrl price listUserLikes"
  );
