const Furniture = require('../models/Furniture');
const User = require('../models/User');

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

exports.getOne = (furnitureId) => Furniture.findById(furnitureId).populate({ path: 'owner', select: 'username imageProfile' });

exports.buyFurniture = async (furnitureId, userId) => {

    try {

        const furniture = await this.getOne(furnitureId).lean();

        if (furniture.owner._id.valueOf() === userId) {
            throw new Error('Furniture do not exists.');
        }

        return Furniture.findByIdAndUpdate(furnitureId, { $push: { buyList: userId } });

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

        const user = await User.findById(userId);

        if (user.furniture.includes(furnitureId)) {
            const test = await User.findByIdAndUpdate(userId, { $pull: { furniture: furnitureId } });
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

    if (data.category) {
        body.category = new RegExp(data.category, 'i');
    }

    return Furniture.find(body);
}
