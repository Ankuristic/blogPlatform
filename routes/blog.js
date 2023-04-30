const express = require('express');

const blog = require("../controller/blogController")
const router = express.Router();

console.log('router loaded');

// adding a route for  creating the blog 
router.post("/create", blog.createBlogs);

// get all the blogs 
router.post("get",blog.getBlogs);

//update all the blogs
router.post("update",blogs.updateblogs);

// delete all the blogs

router.post("delete",blogs.deleteblogs)


module.exports = router;