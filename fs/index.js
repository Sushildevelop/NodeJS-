const { log } = require('console');
const fs = require('fs');

// console.log('READ START');

// Asynchronous way to read file

// fs.readFile('input.txt', function(err, data) {
//     if (err) {
//         console.log('Error: ', err);
//         return err;
//     }
//     console.log('Data: ', data.toString());
//     console.log('READ END');
//     return data;
// })

// console.log('Other STUFF');

// Synchronous way to read file
// var data = fs.readFileSync('input.txt');
// console.log('DATA ', data.toString());
// console.log('READ START');
// console.log('OTHER STUFF');


// Read > open + read

// const buf = new Buffer(1024);

// fs.open('input.txt', 'r+', function(err, fd) {
//     if (err) {
//         console.log("Error in opening file: ", err);

//     }
//     console.log("File open successfully");

//     fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
//         if (err) {
//             console.log('Error in reading file!');
//         }
//         console.log('Data: ', bytes);
//         console.log('Data: ', buf.slice(0, bytes).toString());
//         fs.close(fd, function(err) {
//             if (err) {
//                 console.log("Eroor in closing file");
//             } else {
//                 console.log("Success in closing file");
//             }
//         })
//     })
// })

// writing to file

// fs.writeFile('input.txt', 'PW SKILLS', function(err) {
//     if (err) {
//         console.log("EROOR IN WRITING FILE");
//     } else {
//         console.log('Success in writing file');
//     }
// })


// Append to file

// fs.appendFile('input.txt', '--rakesh chaubey', 'utf8', function(err) {
//     if (err) {
//         console.log("Error in appending file");
//     } else {
//         console.log("Success in appending file");
//     }
// })


// Deleting files
fs.unlink('input.txt', function(err) {
    if (err) {
        console.log('Error in deleting files');
    } else {
        console.log("Success in delelting files");
    }
})