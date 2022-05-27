const express = require("express");
const Game = require("../models/game");

const router = express.Router();

//Post Method
router.post("/games/create", async (req, res) => {
    const game = new Game({
      name: req.body.name,
      note: req.body.note
    });
  
    try {
      const dataToSave = await game.save();
      res.status(200).json(dataToSave);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

  router.get("/games/getAll", async (req, res) => {
    try {
      const data = await Game.find()
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  //Get by ID Method
  router.get("/games/getOne/:id", async (req, res) => {
    try {
        const data = await Game.findById(req.params.id)
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  //Update by ID Method
  router.patch("/games/update/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const updateData = req.body;
      const options = { new: true };
  
      const result = await Game.findByIdAndUpdate(id, updateData, options);
      res.send(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  //Delete by ID Method
  router.delete("/games/delete/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const data = await Game.findByIdAndDelete(id);
      res.send(`Document '${data.name}' has been deleted`);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

  module.exports = router