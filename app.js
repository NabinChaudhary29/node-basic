// const express = require('express')
import express from "express";
import path from "path";

const app = express();
const __dirname = path.resolve();
const PORT = 3000;
import {home,login,register} from './src/home.js';

app.use("/static",express.static(path.join(__dirname,"public")));



// app.get('/user',  (request, response) => {
//   console.log("user path");
//   console.log(request);
//   response.send("User Path");
// })

// app.get('/number',  (request, response) => {
//     try {

//         const number1 = request.query.number1
//     const number2 = request.query.number2
//     let sum = parseFloat(number1) + parseFloat(number2);
//     response.send(`${sum}`);
//     test;
//     }
//     catch (err){
//         console.log(err);
//         response.send(err.message);
//     }
    
//   });
        app.get('/home',  (request, response) => {
        let htmlString = home();
        response.send(htmlString);
        // response.sendFile (__dirname +"/src/file.json")
    })
    app.get('/login',  (request, response) => {
        let htmlString = login();
        response.send(htmlString);
        // response.sendFile (__dirname +"/src/file.json")
    })

    app.get('/register',  (request, response) => {
        let htmlString = register();
        response.send(htmlString);
        // response.sendFile (__dirname +"/src/file.json")
    })
app.listen(PORT, (error)=>{
    error 
    ? console.log("Error in serving") 
    : console.log("http://localhost:" + PORT + " started");
})