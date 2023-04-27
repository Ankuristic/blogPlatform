const express = require('express');

const blogs = require("../controller/blogController");
const router = express.Router();

console.log('router loaded');

// adding a route for  creating the blog 
router.post("/create", blogs.createBlogs);


module.exports = router;