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

        res.status(201).json(blogs);

    } catch(error) {
        res.status(400).json({ message : error.message});
    }

}


module.exports ={
    createBlogs,
   


  }