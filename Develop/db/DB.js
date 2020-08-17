const fs = require('fs');
const util = require('util');
//allow to chain promisses 
const readFAsync = util.promisify(fs.readFile);
const writeFAsync = util.promisify(fs.writeFile);
class DB {
    readFile() {
        return readFAsync("./db/db.json", "utf8")
    }
    // This is fs.writeFile(file,data[,options],callback)
    writeFile(rawNote) {

        return writeFAsync("./db/db.json", JSON.stringify(rawNote), "utf8")
    }

    readNotes() {
        return this.readFile().then(notes => {
            console.log(notes);
            return JSON.parse(notes);
        })
    }

    writeNote(newNote) {
        console.log("NEW NOTE=>", newNote);
        return this.writeFile(newNote).then(notes => {
            console.log(notes);
            // return JSON.parse(notes);
            return this.readNotes();

        })
    }
}

module.exports = new DB()