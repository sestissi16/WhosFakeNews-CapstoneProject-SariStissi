// pg is node-postgres library and we're geting client object
const Client = require('pg').Client
// initializing client
const client = new Client({
    user: "postgres",
    password: "BinTesstin9es",
    host: "LAPTOP-Q43BRM9F",
    port: 5432,
    database: "postgres"
})

console.log("Hellow")

//connect to database, returns a promise
client.connect().then(() => console.log("Connected successfully")).catch(e => console.log).finally(() => client.end())

console.log("Test")