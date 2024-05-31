const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require('../middlewares/verifyToken');
const Cart = require('../models/Cart');

const router = require('express').Router();

const CryptoJS = require('crypto-js');

// Add Cart

// Myself start - add to cart
router.post("/", verifyToken, async (req, res) => {
  const userId = req.user.id;
  const getUserCartById = await Cart.findOne({ userId: userId });
  
  // If user doesn't have cart 
  if(getUserCartById === null){
    const newCart = new Cart(
      {
        userId: userId,
        cartItems: [req.body.cartItems]
      });
      try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
      } catch (error) {
        res.status(500).json("Failed to create new cart!")
      }
  }

  // If user has cart already
  if (getUserCartById !== null) {
    // If product exist on cart already
    console.log(req.body.cartItems);
    const isAddedItemExist = getUserCartById.cartItems.find(c => String(c.productId) === req.body.cartItems.productId )
    if (isAddedItemExist) {
      // Increase Quantity only
      const updatedCart = await Cart.findOneAndUpdate(
        {
          "userId": userId,
          "cartItems.productId": req.body.cartItems.productId
        },
        {
          "$set":
          {
            "cartItems": {
              ...req.body.cartItems,
              quantity: isAddedItemExist.quantity + req.body.cartItems.quantity
            }
          }
        }
      )
      res.status(200).json("Product quantity increased!")
    } else {
      const updatedCart = await Cart.findOneAndUpdate(
        {
          "userId": userId,
        },
        {
          "$push":
          {
            "cartItems": req.body.cartItems
          }
        }
      )
      res.status(200).json("New Product added to cart!")
    }
  }
  })


// Update Cart
router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete Cart
router.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json('Cart has been deleted!');
  } catch (error) {
    return res.status(500).json(error);
  }
});

// Get User Cart
router.get('/find/:userId', async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId }).populate('cartItems.productId')
    res.status(200).json(cart);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// Get all Carts || Only admin can view all carts
router.get('/findAll', verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
