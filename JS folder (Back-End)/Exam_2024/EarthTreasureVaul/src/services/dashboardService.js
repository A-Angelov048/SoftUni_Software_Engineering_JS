const Stones = require('../models/Stones');

exports.getLatest = () => Stones.find().sort({ createdAt: -1 }).limit(3);

exports.getAllData = () => Stones.find();

exports.getOne = (stoneId) => Stones.findById(stoneId);

exports.likeStone = async (userId, stoneId) => {

    try {

        const stone = await this.getOne(stoneId).lean();

        if(stone.owner.valueOf() === userId){
            throw new Error('Stone do not exists.');
        }

        return Stones.findByIdAndUpdate(stoneId, { $push: { likedList: userId } });

    } catch (error) {
        throw error;
    }
};

exports.editGetOne = async (stoneId, userId) => {

    try {

        const stone = await this.getOne(stoneId).lean();

        if (stone.owner.valueOf() !== userId) {
            throw new Error('Stone not found.');
        }

        return stone;

    } catch (error) {

        throw error;
    }
};

exports.editStone = (stoneId, body) => Stones.findByIdAndUpdate(stoneId, body, { runValidators: true });

exports.deleteStone = async (stoneId, userId) => {
    try {

        const stone = await this.getOne(stoneId).lean();

        if (stone.owner.valueOf() !== userId) {
            throw new Error('Stone not found.');
        }

        await Stones.findByIdAndDelete(stoneId);

    } catch (error) {

        throw error;
    }
}
