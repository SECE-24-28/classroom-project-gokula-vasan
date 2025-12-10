//const http=require("http")
//http.createServer((req,res)=>{
    //res.end("node server is running")
//}).listen(4000);


//const express=require("express");
//const server=express()
//server.get('/',(req,res)=>{
    //res.end("express server is running")
//}
//).listen(3000);


//const http=require("http")
//http.createServer((req,res)=>{
    //res.end("node server is running")
//}).listen(4000);

const express=require("express")
const server=express();
server.get('/',(req,res)=>{
    res.end("express is running")
}).listen(3000);
