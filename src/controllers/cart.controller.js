const cartService = require("../services/cart.service");

const getAllCart = async (req, res) => {
  console.log(123);
  try {
    const cart = await cartService.getAllCart();
    res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getCartById = async (req, res) => {
  try {
    const cartId = req.params.id;
    const cart = await cartService.getCartById(cartId);

    if (!cart || cart.length === 0) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const createCart = async (req, res) => {
  try {
    const newCartId = await cartService.createCart(req.body);
    res
      .status(201)
      .json({ id: newCartId, message: "Cart created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteCart = async (req, res) => {
  try {
    const cartId = req.params.id;
    const result = await cartService.deleteCart(cartId);

    if (result) {
      res.status(200).json({ message: "Cart deleted successfully" });
    } else {
      res.status(404).json({ message: "Cart not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const editCart = async (req, res) => {
  try {
    const cartId = req.params.id;
    const updatedData = req.body;
    const result = await cartService.editCart(cartId, updatedData);

    if (result) {
      res.status(200).json({ message: "Cart updated successfully" });
    } else {
      res.status(404).json({ message: "Cart not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { getAllCart, getCartById, createCart, deleteCart, editCart };
