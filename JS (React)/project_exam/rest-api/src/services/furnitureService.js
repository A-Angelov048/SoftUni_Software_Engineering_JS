const Furniture = require('../models/Furniture');

exports.getLatest = () => Furniture.find().sort({ createdAt: -1 }).limit(4);

exports.getAllData = () => Furniture.find();

exports.createFurniture = (body) => Furniture.create(body);


exports.getOne = (furnitureId) => Furniture.findById(furnitureId);

exports.buyFurniture = async (furnitureId, userId) => {

    try {

        const furniture = await this.getOne(furnitureId).lean();

        if (furniture.owner.valueOf() === userId) {
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

        if (furniture.owner.valueOf() !== userId) {
            throw new Error('Furniture not found.');
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
