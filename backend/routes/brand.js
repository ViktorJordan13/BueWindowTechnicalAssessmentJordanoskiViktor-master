const express = require('express');

const brandController = require('../controllers/brand');

const router = express.Router();

router.get('/', brandController.getAllBrands);

router.post('/', brandController.postBrand);

router.put('/', brandController.putBrand);

router.delete('/:id', brandController.deleteBrand);

module.exports = router;