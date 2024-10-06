// const express = require('express')
import express from "express";
import path from "path";
import fs from "fs";
const app = express();
const __dirname = path.resolve();
const PORT = 3000;
import {home,login,register} from './src/home.js';
const Task_Data = "./data/tasks.json";

app.use("/static",express.static(path.join(__dirname,"public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
        console.log("LOGIN QUERY:", request.query);
        // response.sendFile (__dirname +"/src/file.json")
    })

    app.get('/register',  (request, response) => {
        let htmlString = register();
        response.send(htmlString);
        // response.sendFile (__dirname +"/src/file.json")
    })

    app.post("/register", (request, response) => {
        let { email, name, password } = request.body;
        console.log(email, name, password);
        // saving data to database
      });

    //   app.get("/user",(req,res)=>{
    //     res.send(500,"userlist");
    //   })

    //   app.get("/user",(req,res)=>{
    //     res.status(500).send("data");
    //   })

      app.get("/user",(req,res)=>{
        const { email,  password } = req.query;
        try{
            
            res.status(200).send("get user data"); 
        }
        catch (error) {
            res.status(500).send("Error in Server");
        }
     })
     app.post("/user",(req,res)=>{
        const { email,  password } = req.body;

        try{
            
            res.status(200).send(`${email}===== ${password}`); 
        }
        catch (error) {
            res.status(500).send("Error in Server");
        }
     })
     app.put ("/user",(req,res)=>{
        try{
            
            res.status(200).send(" put user data"); 
        }
        catch (error) {
            res.status(500).send("Error in Server");
        }
     })
     app.patch("/user",(req,res)=>{
        try{
            
            res.status(200).send("patch user data"); 
        }
        catch (error) {
            res.status(500).send("Error in Server");
        }
     })
     app.delete("/user",(req,res)=>{
        try{
            
            res.status(200).send(" delete user data"); 
        }
        catch (error) {
            res.status(500).send("Error in Server");
        }
     })


     //ntdl apis


     app.get("/ntdl/tasks",(req,res)=>{
        //fetch data from database
        fs.readFile(Task_Data,(error,data)=>{
            if(error){
                const errorObj = {
                    sta
                }
            }
        })
     })


app.listen(PORT, (error)=>{
    error 
    ? console.log("Error in serving") 
    : console.log("http://localhost:" + PORT + " started");
})