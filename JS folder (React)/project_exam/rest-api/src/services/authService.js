require("dotenv").config();
const User = require("../models/User");
const DeliveryInfo = require("../models/DeliveryInfo");
const bcrypt = require("bcrypt");
const jwt = require("../lib/jwt");

exports.createUser = async (body) => {
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

  const token = generateToken(createdUser);

  return token;
};

exports.getUser = async (body) => {
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
  );

  const token = generateToken(updatedUser);

  return token;
};

exports.sendUser = async (token) => {
  const user = await jwt.verify(token, process.env.SECRET);
  return user;
};

exports.editProfile = async (userId, body) => {
  let newBody = {};

  const [username, user] = await Promise.all([
    User.findOne({ username: body.username }),
    User.findById(userId),
  ]);

  if (!!username && username._id.valueOf() !== userId) {
    throw new Error("Username already exists!");
  }

  if (body.password !== undefined) {
    const validatePassword = await bcrypt.compare(body.password, user.password);

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
  });

  const token = generateToken(result);

  return token;
};

exports.getCurrentUser = (userId) =>
  User.findById(userId)
    .populate({ path: "furniture", select: "name price imageUrl" })
    .populate({ path: "wishlist", select: "name price imageUrl" });

exports.createDeliveryInfo = async (body, userId) => {
  const result = await DeliveryInfo.findOne({ owner: userId });
  const newDeliveryInfo = [];

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
