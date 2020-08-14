const fs = require('fs');
const util = require('util');
const readFAsync = util.promisify(fs.readFile);
const writeFAsync = util.promisify(fs.writeFile);
class DB{
    readFile() {
        return readFAsync("./db/db.json", "utf8")
    }

    readNotes() {
        return this.readFile().then(notes => {
            console.log(notes);
            return JSON.parse(notes);
        })
    }

        writeFile(){
            return this.writeFile().then(notes => {
                console.log(notes);
                return JSON.parse(notes);

            })
    }
}

module.exports = new DB()