const express= require('express');
const mongoose= require('mongoose');

const Blogs= require('../models/blog')


const  createBlogs =  async (req, res) => {
    console.log(req.body.title);
    const blogs = new Blogs({
        title:req.body.title,
        author:req.body.author,
        content:req.body.content,
    })
    try {
     const ankur=   await blogs.save();
     console.log("ankur",ankur);

        res.status(200).json(blogs);

    } catch(error) {
        res.status(400).json({ message : error.message});
    }

}



const getBlog = async (req, res) => {
    try {
      const blogs = await Blogs.find({ isActive: true }) 
      console.log("blog",blog);
      return res.status(200).json({
        blogsData:blogs,
        message: "blogs fetched Successfully"
      });
    } catch (err) {
      return res
        .status(500)
        .json({ error: err, message: "Internal Server Error" });
    }
  };
// get blogs by id
 const getBlogById = async (req, res) => {
    try {
      const BlogId = req.params.id;
      console.log("BlogId",BlogId);
      const blogs = await Blogs.findById(blogId);
      console.log("blog",blog);
      if (!blogs) {
        return res.status(400).json({ message: "blogs Not found" });
      }
      return res.status(200).json({
        product: product,
        message: "blogs fetched Successfully"
      });
    } catch (err) {
      return res
        .status(500)
        .json({ error: err, message: "Internal Server Error" });
    }
  };

  // update

const updateBlogs = async (req, res) => {
    try {
      const { id } = req.params;
      const BlogsUpdated = await Blogs.findByIdAndUpdate(id, {
        ...req.body,
        updated_by: req.body.userID
      });
      if (!BlogsUpdated) {
        return res
          .status(400)
          .json({ message: "Error updating Blogs/Invalid Id" });
      }
      return res.status(200).json({ message:"Blogs updated successfully" });
    } catch (err) {
      return res
        .status(500)
        .json({ error: err, message: "Internal Server Error" });
    }
  };

  // delete all blogs
  const deleteBlogs = async (req, res) => {
    try {
      const { id } = req.params;
      const blogsDeleted = await Blogs.findByIdAndDelete(id);
      if (!blogsDeleted) {
        return res
          .status(400)
          .json({ message: "Error deleting blogs/Invalid Id" });
      }
      return res.status(200).json({ message: "blogs deleted successfully" });
    } catch (err) {
      return res
        .status(500)
        .json({ error: err, message: "Internal Server Error" });
    }
  };
  
module.exports ={
    createBlogs,
    getBlog,
    getBlogById,
    updateBlogs,
    deleteBlogs


  }