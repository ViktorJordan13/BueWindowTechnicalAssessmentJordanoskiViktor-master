const express = require('express');

const brandRatingController = require('../controllers/brandRating');

const router = express.Router();


router.get('/', brandRatingController.getAllBrandsRatings);

router.post('/', brandRatingController.postBrandRatings);

router.put('/', brandRatingController.putBrandRatings);

router.delete('/:id', brandRatingController.deleteBrandRatings);

router.get('/sort', brandRatingController.sortBrandsRatings)



module.exports = router;