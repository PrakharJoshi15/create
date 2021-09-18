// index.js is root fire for application

//import express library  
//require keyword for access to expresss lib 
//share krta hai diff files kai beech mai require say

const express=require('express');
//request listen kne ki lye use hotaa hai app obj
//route kra req from node to express rout handlers ko
const app   = express()

//create kree rout handler using app.get 
//app.get bta raa hai express ko new http requests aari hai
app.get('/'/*route portion for the handler*/, (req, res/*respnd for the req*/) => {
  res.send('Hi:there')
});

const PORT = process.env.PORT || 5000;
app.listen(5000);