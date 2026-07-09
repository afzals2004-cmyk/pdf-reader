const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('C:\\Users\\afzal\\Downloads\\Garbage Management System-converted1 - RAMESH KUMAR 41.pdf');

pdf(dataBuffer).then(function(data) {
    // Print the first 5000 characters to capture the Table of Contents
    console.log(data.text.substring(0, 10000));
}).catch(function(error){
    console.error("Error reading PDF:", error);
});
