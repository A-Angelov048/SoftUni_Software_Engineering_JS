const Furniture = require('../models/Furniture');
const User = require('../models/User');
const Reviews = require('../models/Reviews');

exports.getLatest = () => Furniture.find().sort({ createdAt: -1 }).limit(4);

exports.getAllData = () => Furniture.find();

exports.createFurniture = async (body, userId) => {

    try {

        const result = await Furniture.create(body);

        await User.findByIdAndUpdate(userId, { $push: { furniture: result._id } });

    } catch (error) {
        throw error;
    }

};

exports.getOne = (furnitureId) => Furniture.findById(furnitureId).populate({ path: 'owner', select: 'username imageProfile' }).populate('reviews');

exports.buyFurniture = async (furnitureId, userId) => {

    try {

        const furniture = await this.getOne(furnitureId).lean();

        if (furniture.owner._id.valueOf() === userId) {
            throw new Error('Furniture do not exists.');
        }

        const flag = furniture.listUserLikes.filter(x => x.valueOf() === userId);

        if (flag.pop().valueOf() === userId) {
            await Furniture.findByIdAndUpdate(furnitureId, { $pull: { listUserLikes: userId } });
        }

        const user = await User.findById(userId);

        if (user.wishlist.includes(furnitureId)) {
            await User.findByIdAndUpdate(userId, { $pull: { wishlist: furnitureId } });
        }

        await Furniture.findByIdAndUpdate(furnitureId, { $push: { buyList: userId } });

    } catch (error) {
        throw error;
    }
};

exports.wishlistFurniture = async (furnitureId, userId) => {

    try {

        const user = await User.findById(userId).lean();
        const flag = user.wishlist.filter(x => x.valueOf() === furnitureId);

        if (!!flag[0]) {
            await User.findByIdAndUpdate(userId, { $pull: { wishlist: furnitureId } });
            await Furniture.findByIdAndUpdate(furnitureId, { $pull: { listUserLikes: userId } });
            return false;
        } else {
            await User.findByIdAndUpdate(userId, { $push: { wishlist: furnitureId } });
            await Furniture.findByIdAndUpdate(furnitureId, { $push: { listUserLikes: userId } });
            return true;
        }

    } catch (error) {
        throw error;
    }
};

exports.editFurniture = (furnitureId, body) => Furniture.findByIdAndUpdate(furnitureId, body, { runValidators: true });

exports.deleteFurniture = async (furnitureId, userId) => {
    try {

        const furniture = await this.getOne(furnitureId).lean();

        if (furniture.owner._id.valueOf() !== userId) {
            throw new Error('Furniture not found.');
        }

        if (furniture.reviews.length > 0) {
            await Reviews.deleteMany({ _id: { $in: furniture.reviews } });
        }

        if (furniture.listUserLikes.length > 0) {

            furniture.listUserLikes.forEach(async currentUserId => {

                const user = await User.findById(currentUserId);

                if (user.wishlist.includes(furnitureId)) {
                    await User.findByIdAndUpdate(currentUserId, { $pull: { wishlist: furnitureId } });
                }
            });
        }

        const user = await User.findById(userId);

        if (user.furniture.includes(furnitureId)) {
            await User.findByIdAndUpdate(userId, { $pull: { furniture: furnitureId } });
        }

        await Furniture.findByIdAndDelete(furnitureId);

    } catch (error) {

        throw error;
    }
}

exports.searchFurniture = (data) => {
    const body = {}

    if (data.name) {
        body.name = new RegExp(data.name, 'i');
    }

    return Furniture.find(body);
}
