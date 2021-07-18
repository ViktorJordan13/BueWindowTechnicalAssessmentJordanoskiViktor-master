const express = require('express');

const brandRatingController = require('../controllers/brandRating');

const router = express.Router();
const router1 = express.Router();

router.get('/', brandRatingController.getAllBrandsRatings);

router.post('/', brandRatingController.postBrandRatings);

router.put('/', brandRatingController.putBrandRatings);

router.delete('/', brandRatingController.deleteBrandRatings);

router1.get('/', brandRatingController.sortBrandsRatings)



module.exports = router, router1;