const lowdb = require('lowdb');
const FileAsync = require('lowdb/adapters/FileAsync');

let db;

async function createConnection() {
    const adapter = new FileAsync('db.json');
    db = await lowdb(adapter);
    db.defaults({
        tasks: [],
    }).write();
}

function getConnection() {
    return db;
}

module.exports = {
    createConnection,
    getConnection
}