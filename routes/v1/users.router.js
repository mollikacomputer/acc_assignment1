const express = require('express');
const userController = require('../../controllers/users.controller');
const limiter = require('../../middleware/limiter');
const router = express.Router();

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.saveAUser);

router
  .route("/:id")
  .get(userController.getUserDetail)
  .patch(userController.updateUser)
  .put(userController.putUser)
  .delete(userController.deleteUser);

module.exports = router;

// const express = require("express");
// const usersControllers = require("../../controllers/tools.controller");
// const limiter = require("../../middleware/limiter");
// const viewCount = require("../../middleware/veiwCount");

// const router = express.Router();

// router
//   .route("/")
//   /**
//    * @api {get} /tools All tools
//    * @apiDescription Get all the tools
//    * @apiPermission admin
//    *
//    * @apiHeader {String} Authorization   User's access token
//    *
//    * @apiParam  {Number{1-}}         [page=1]     List page
//    * @apiParam  {Number{1-100}}      [limit=10]  Users per page
//    *
//    * @apiSuccess {Object[]} all the tools.
//    *
//    * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
//    * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
//    */
//   .get(usersControllers.getAllUsers)

//   /**
//    * @api {post} /tools save a tool
//    * @apiDescription Get all the tools
//    * @apiPermission admin
//    *
//    * @apiHeader {String} Authorization   User's access token
//    *
//    * @apiParam  {Number{1-}}         [page=1]     List page
//    * @apiParam  {Number{1-100}}      [limit=10]  Users per page
//    *
//    * @apiSuccess {Object[]} all the tools.
//    *
//    * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
//    * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
//    */
//   .post(usersControllers.saveAUser);

// router
//   .route("/:id")
//   .get(viewCount, limiter, usersControllers.getToolDetail)
//   .patch(usersControllers.updateUser)
//   .delete(usersControllers.deleteUser);

// module.exports = router;
