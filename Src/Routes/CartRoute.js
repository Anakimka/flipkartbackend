const { Router } = require("express");
const { addToCart, remove, getcart } = require("../Controllers/CartController");
const { authMiddleware } = require("../MiddleWare/auth.middleware");
const CartRouter = Router();

CartRouter.post("/:id", authMiddleware, addToCart);
CartRouter.delete("/:id", authMiddleware, remove);
CartRouter.get("/", authMiddleware, getcart);

module.exports = CartRouter;
