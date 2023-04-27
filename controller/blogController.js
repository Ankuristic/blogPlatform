const express= require('express');
const mongoose= require('mongoose');

const Blogs= require('../models/blog')


const  createBlogs =  async (req, res) => {
    console.log(req.body.title);
    const blogs = new Blogs({
        // name:req.body.name,
        // roll:req.body.roll,
        // registration:req.body.registration,
        // subjects:req.body.subjects,
        // created_on:req.body.created_on
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