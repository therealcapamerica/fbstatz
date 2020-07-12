const csvFilePath = './seeds/team.csv'
const csv = require('csvtojson');
const { request } = require('express');


csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        // Need to figure out how to return this JSON
        // without breaking PROMISES
        // Need to either write this out or add to database
        console.log(jsonObj);
        /**
         * [
         * 	{a:"1", b:"2", c:"3"},
         * 	{a:"4", b:"5". c:"6"}
         * ]
         */
    }, errorHandle);

// async /await
const jsonObj= await csv().fromFile(csvFilePath);

//Promise Chain
request.get(csvUrl)
 .then((csvdata)=>{
     return csv().fromString(csvdata)
 })
.then((jsonObj)=>{
    
})

