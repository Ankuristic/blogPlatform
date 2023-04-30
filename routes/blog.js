const express = require('express');

const blog = require("../controller/blogController")
const router = express.Router();

console.log('router loaded');

// adding a route for  creating the blog 
router.post("/create", blog.createBlogs);

// get all the blogs 
router.get("/getBlog",blog.getBlog);

// get blog by the id 
router.get("/getBlogid/:id",blog.getBlogById);


//update all the blogs
router.post("update/:id",blog.updateBlogs);

// delete all the blogs

router.post("delete/:id",blog.deleteBlogs)


module.exports = router;