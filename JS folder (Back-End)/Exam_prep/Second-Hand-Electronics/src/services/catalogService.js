const Electronics = require('../models/Electronics');


exports.getAllData = () => Electronics.find();

exports.getOne = (productId) => Electronics.findById(productId);

exports.buyProduct = async (userId, productId) => {

    try {

        await this.getOne(productId);
        return Electronics.findByIdAndUpdate(productId, { $push: { buyingList: userId } });

    } catch (error) {
        throw new Error('Product do not exists.');
    }
};

exports.editGetOne = async (productId, userId) => {

    try {

        const product = await this.getOne(productId).lean();

        if (product.owner.valueOf() !== userId) {
            throw new Error('Product not found.');
        }

        return product;

    } catch (error) {

        throw error;
    }
};

exports.editProduct = (productId, body) => Electronics.findByIdAndUpdate(productId, body, { runValidators: true });

exports.deleteProduct = async (productId, userId) => {
    try {

        const product = await this.getOne(productId).lean();

        if (product.owner.valueOf() !== userId) {
            throw new Error('Product not found.');
        }

        await Electronics.findByIdAndDelete(productId);

    } catch (error) {

        throw error;
    }
}
