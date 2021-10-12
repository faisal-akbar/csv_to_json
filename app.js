const csvtojson = require('csvtojson')
const fs = require('fs')

const csvfilepath = "Sample - Superstore.csv"

csvtojson()
.fromFile(csvfilepath)
.then((json) => {
    console.log(json)

    fs.writeFileSync("output.json",JSON.stringify(json),"utf-8",(err) => {
        if(err) console.log(err)
    })
})

// const fetch = require("node-fetch");
// fetch("./output.json")
// .then(res => res.json())
// .then(data => console.log(data))