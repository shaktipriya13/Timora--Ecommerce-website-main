// import express from "express";
// import {

//     createProductController, getProductController, updateProductController, getSingleProductController, productPhotoController, deleteProductController, productFiltersController, productCountController, productListController, searchProductController, realtedProductController, productCategoryController

// } from "../controllers/product.controller.js";
// import { isAdmin, requireSignIn } from "../middlewares/auth.middleware.js";
// import formidable from "express-formidable";

// const router = express.Router();

// //routes
// router.post(
//     "/create-product",
//     requireSignIn,
//     isAdmin,
//     formidable(),//we have passed formidable middleware here to handle the file uploads
//     createProductController
// );
// //routes
// router.put(
//     "/update-product/:pid",
//     // pid means we want to update the product with the corresponding product id
//     // we will get the product id from the params
//     requireSignIn,
//     isAdmin,
//     formidable(),
//     updateProductController
// );

// //get products
// router.get("/get-product", getProductController);

// //single product
// router.get("/get-product/:slug", getSingleProductController);

// //get photo
// router.get("/product-photo/:pid", productPhotoController);

// //delete rproduct
// router.delete("/delete-product/:pid", deleteProductController);
// // pid humne name kia ha for product id, but actually id hi hota ha database me

// //filter product
// router.post("/product-filters", productFiltersController);

// //product count
// router.get("/product-count", productCountController);

// //product per page
// router.get("/product-list/:page", productListController);

// //search product
// router.get("/search/:keyword", searchProductController);
// // we are searching product by keyword, so we will get the keyword from the paramss

// //similar product
// router.get("/related-product/:pid/:cid", realtedProductController);

// //category wise product
// router.get("/product-category/:slug", productCategoryController);

// //payments routes
// //token
// // router.get("/braintree/token", braintreeTokenController);

// // //payments
// // router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

// export default router;

import express from "express";
import {

    createProductController,
    deleteProductController,
    getProductController,
    getSingleProductController,
    productCategoryController,
    productCountController,
    productFiltersController,
    productListController,
    productPhotoController,
    razorpayPaymentController,
    realtedProductController,
    searchProductController,
    updateProductController,
} from "../controllers/product.controller.js";
import { isAdmin, requireSignIn } from "../middlewares/auth.middleware.js";
import formidable from "express-formidable";

const router = express.Router();

//routes
router.post(
    "/create-product",
    requireSignIn,
    isAdmin,
    formidable(),
    createProductController
);
//routes
router.put(
    "/update-product/:pid",
    requireSignIn,
    isAdmin,
    formidable(),
    updateProductController
);

//get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete rproduct
router.delete("/delete-product/:pid", deleteProductController);

//filter product
router.post("/product-filters", productFiltersController);

//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

//search product
router.get("/search/:keyword", searchProductController);

//similar product
router.get("/related-product/:pid/:cid", realtedProductController);

//category wise product
router.get("/product-category/:slug", productCategoryController);

// //payments routes
// //token
// router.get("/braintree/token", braintreeTokenController);

// //payments
// router.post("/braintree/payment", requireSignIn, brainTreePaymentController);


//* === Razorpay Routes ===

// 1. Create Razorpay Order (Client uses this to initiate payment)
router.post("/razorpay/order", requireSignIn, razorpayPaymentController);

// // 2. Verify Razorpay Payment after success (called after payment is done)
// router.post("/razorpay/verify", requireSignIn, verifyRazorpayPayment);
export default router;