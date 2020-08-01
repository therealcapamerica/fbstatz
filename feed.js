const csvFilePath = './seeds/conference.csv'
const csv=require('csvtojson');



let csvData = csv()
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
    });

module.exports = csvData.jsonObj;

