const express = require("express");

const product = require("../models/productSchema");

const createProduct = async (req, res) => {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: "Empty Data" });
    }
    const {
      product_id,
      product_name,
      product_brand,
      product_price,
      product_quantity,
    } = req.body;
    if (
      !product_id ||
      !product_name ||
      !product_brand ||
      !product_price ||
      !product_quantity
    ) {
      return res
        .status(400)
        .json({ message: "Provide Details To add Product" });
    }
    const checkProductId = await product.findOne({ product_id: product_id });
    if (checkProductId) {
      return res.status(409).json({ message: "Product Already exists" });
    }
    const data = {
      product_id,
      product_name,
      product_brand,
      product_price,
      product_quantity,
    };
    const createProduct = await product.create(data);
    return res.status(201).json({
      message: "Product Added Sucessfully",
      data: createProduct,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: err });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const getProducts = await product.find();
    return res.status(200).json({message: "List of all Products", data:getProducts})
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: err });
  }
};

module.exports = { createProduct, getAllProducts };
