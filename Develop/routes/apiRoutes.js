const router = require('express').Router()
const DB = require ('../db/DB.js')

router.get('/notes', async (req, res)=>{
    try {
        let existingNote = await DB.readNotes()
        console.log(existingNote);
        res.json(existingNote)
      } catch (err){
        console.log(err);
      }
    })

    module.exports = router; 