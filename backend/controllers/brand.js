const Brand = require('../models/brand');

exports.getAllBrands =  async (req, res, next) => {

    try{
        const [allBrands] = await Brand.fetchAll();
        res.status(200).json(allBrands);
        await Brand.fetchAll();

    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }

}

exports.postBrand =  async (req, res, next) => {

    try{
        const postResponse = await Brand.post(req.body.name, req.body.description);
        res.status(201).json(postResponse);
    
    }catch(err){
        if(!err.statusCode){
             err.statusCode = 500;
        }
        next(err);
        }
}

exports.putBrand =  async (req, res, next) => {

    try{
        const putResponse = await Brand.update(req.body.id, req.body.name, req.body.description);
        res.status(200).json(putResponse);
    
    }catch(err){
        if(!err.statusCode){
             err.statusCode = 500;
        }
        next(err);
        }
}

exports.deleteBrand =  async (req, res, next) => {

    try{
        const deleteResponse = await Brand.delete(req.params.id);
        res.status(200).json(deleteResponse);
    
    }catch(err){
        if(!err.statusCode){
             err.statusCode = 500;
        }
        next(err);
        }
}