const express = require('express');
const model = require('./../models/library');

const router = express.Router();

// CRUD Operations
//Get
router.get('/', async function(req, res){
    try {
        const data = await model.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//POST
router.post('/post', async (req, res) => {
    const data = new model({
        Book_name: req.body.Book_name,
        Category: req.body.Category,
        Author: req.body.Author,
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

// DELETE
router.delete('/delete/:id', async (req, res) => {
  try {
      const id = req.params.id;
      const data = await model.findByIdAndDelete(id)
      res.status(200).json(data);
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
})

module.exports=router;