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
    const olderNotes=  await DB.readNotes();
    const note = req.body;

    const newNote = await DB.writeNote([...olderNotes, note]);
    console.log(newNote);
    res.status(200).json(newNote)
  } catch (err) {
    console.log(err);
  }
})

// router.delete('/notes',async (req, res) => {
//   try {
//     const delNote = 
//     const existingNote = await DB.writeNote()
//     console.log(existingNote);
//     res.json(existingNote)
//   } catch (err) {
//     console.log(err);
//   }
// })

module.exports = router; 