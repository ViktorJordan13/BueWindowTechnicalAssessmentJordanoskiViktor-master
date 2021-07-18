const BrandRating = require('../models/brandRating');

exports.getAllBrandsRatings = async (req, res, next) => {

    try{
        const [allBrandsRatings] = await BrandRating.fetchAll();
        res.status(200).json(allBrandsRatings);
        await BrandRating.fetchAll();

    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.postBrandRatings =  async (req, res, next) => {

    try{
        const postResponse = await BrandRating.post(req.body.name, req.body.country, req.body.rating);
        res.status(201).json(postResponse);
    
    }catch(err){
        if(!err.statusCode){
             err.statusCode = 500;
        }
        next(err);
        }
}

exports.putBrandRatings =  async (req, res, next) => {

    try{
        const putResponse = await BrandRating.update(req.body.name, req.body.country, req.body.rating, req.body.name, req.body.country);
        res.status(200).json(putResponse);
    
    }catch(err){
        if(!err.statusCode){
             err.statusCode = 500;
        }
        next(err);
        }
}

exports.deleteBrandRatings =  async (req, res, next) => {

    try{
        const deleteResponse = await BrandRating.delete(req.body.name, req.body.country);
        res.status(200).json(deleteResponse);
    
    }catch(err){
        if(!err.statusCode){
             err.statusCode = 500;
        }
        next(err);
        }
}

exports.sortBrandsRatings = async (req, res, next) => {

    try{
        const [allBrandsRatings] = await BrandRating.sort(req.body.country);
        res.status(200).json(allBrandsRatings);
        await BrandRating.sort();

    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
}