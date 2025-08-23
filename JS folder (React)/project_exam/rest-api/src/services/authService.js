require("dotenv").config();
const User = require("../models/User");
const DeliveryInfo = require("../models/DeliveryInfo");
const bcrypt = require("bcrypt");
const jwt = require("../lib/jwt");

exports.createUser = async (body) => {
  try {
    const [username, email] = await Promise.all([
      User.findOne({ username: body.username }),
      User.findOne({ email: body.email }),
    ]);

    if (!!username) {
      throw new Error("Username already exists!");
    }

    if (!!email) {
      throw new Error("Email already exists!");
    }

    const createdUser = await User.create(body);
    const userToReturn = await User.findById(createdUser._id).select(
      "_id username imageProfile location role createdAt lastLogin wishlist"
    );

    const token = await generateToken(userToReturn);

    return [token, userToReturn];
  } catch (error) {
    throw error;
  }
};

exports.getUser = async (body) => {
  try {
    const user = await User.findOne({ email: body.email });

    if (!user) {
      throw new Error("Email or Password invalid.");
    }

    const validatePassword = await bcrypt.compare(body.password, user.password);

    if (!validatePassword) {
      throw new Error("Email or Password invalid.");
    }

    const updatedUser = await User.findByIdAndUpdate(
      user._id,
      { lastLogin: Date.now() },
      { returnDocument: "after" }
    )
      .select("-password -deliveryInfo -orders")
      .populate({
        path: "wishlist",
        select: "name price imageUrl",
      });

    const token = await generateToken(updatedUser);

    return [token, updatedUser];
  } catch (error) {
    throw error;
  }
};

exports.editProfile = async (userId, body) => {
  let newBody = {};

  try {
    const [username, user] = await Promise.all([
      User.findOne({ username: body.username }),
      User.findById(userId),
    ]);

    if (!!username && username._id.valueOf() !== userId) {
      throw new Error("Username already exists!");
    }

    if (body.password !== undefined) {
      const validatePassword = await bcrypt.compare(
        body.password,
        user.password
      );

      if (!validatePassword) {
        throw new Error("Wrong password! Please try again.");
      }

      const hashNewPassword = await bcrypt.hash(body.newPassword, 12);
      newBody.password = hashNewPassword;
    } else {
      newBody = body;
    }

    const result = await User.findByIdAndUpdate(userId, newBody, {
      returnDocument: "after",
    })
      .select("-password -deliveryInfo -orders")
      .populate({
        path: "wishlist",
        select: "name price imageUrl",
      });

    const token = await generateToken(result);

    return [token, result];
  } catch (error) {
    throw error;
  }
};

exports.getCurrentUser = (userId) =>
  User.findById(userId).select("-password -deliveryInfo -orders").populate({
    path: "wishlist",
    select: "name price imageUrl",
  });

exports.createDeliveryInfo = async (body, userId) => {
  const newDeliveryInfo = [];

  try {
    const result = await DeliveryInfo.findOne({ owner: userId });

    if (!result) {
      const createDeliveryInfo = await DeliveryInfo.create({
        ...body,
        owner: userId,
      });
      await User.findByIdAndUpdate(userId, {
        $push: { deliveryInfo: createDeliveryInfo._id },
      });

      newDeliveryInfo.push(createDeliveryInfo);
    } else {
      const updateDeliveryInfo = await DeliveryInfo.findOneAndUpdate(
        result._id,
        body,
        { returnDocument: "after" }
      );

      newDeliveryInfo.push(updateDeliveryInfo);
    }
  } catch (error) {
    throw error;
  }

  return newDeliveryInfo;
};

exports.getDeliveryInfo = (userId) => DeliveryInfo.findOne({ owner: userId });

async function generateToken(user) {
  const payload = {
    _id: user._id,
    imageProfile: user.imageProfile,
    username: user.username,
    location: user.location,
    role: user.role,
  };

  return jwt.sign(payload, process.env.SECRET, { expiresIn: "1h" });
}
