const router = require('express').Router()
const DB = require('../db/DB.js')

router.get('/notes', async (req, res) => {
  try {
    const existingNote = await DB.readNotes()
    console.log(existingNote);
    res.json(existingNote)
  } catch (err) {
    console.log(err);
  }
})

router.post('/notes', async (req, res) => {
  try {
    const newNote = req.body;

    const existingNote = await DB.writeNote()
    console.log(existingNote);
    res.json(existingNote)
  } catch (err) {
    console.log(err);
  }
})

module.exports = router; 