const express = require("express");
const getAllPosts = require("../controllers/postControllers");
const router = express.Router();

router.route("/").get(getAllPosts);

module.exports = router;
