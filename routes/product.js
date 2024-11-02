const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Sample route to get products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route to add a new product
router.post('/', async (req, res) => {
    // console.log(req.body, "********req");
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
        description: req.body.description,
        // Add more fields as needed
    });

    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (err) {
        console.log(err, "***********err");
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
