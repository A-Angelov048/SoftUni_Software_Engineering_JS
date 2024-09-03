const Reviews = require('../models/Reviews');
const Furniture = require('../models/Furniture');



exports.createReview = async (body, furnitureId) => {

    try {

        const result = await Reviews.create(body);
        
        await Furniture.findByIdAndUpdate(furnitureId, { $push: { reviews: result._id } });

        return result;
        
    } catch (error) {
        throw error;
    }

};