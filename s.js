const express = require('express')
const multer = require("multer")
const formidable=require("formidable")
const fs = require("fs")
const path = require('path')
const bodyparser= require("body-parser")
const { timingSafeEqual } = require('crypto')
const app = express()
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static(__dirname))
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})
app.post("/msg",(req,res)=>{
    console.log(req.body,req.body.err)
})
app.post("/data",async (req,res,next)=>{
    const form = new formidable.IncomingForm({multiples:true})
form.multiples=true
var uploadDir=path.join(__dirname,"file")
form.uploadDir=__dirname+"/file"
form.parse(req,async (err,fields,files)=>{
    // console.log(files.asd)
    if(err)console.log(err)
    console.log(files.asd.length)
    if(!files.asd.length){
        console.log(files.asd.filepath)
var file = files.asd
var name = encodeURIComponent(file.originalFilename.replace(/\s/g,"-"))
var dy= fs.readFileSync(file.filepath)
fs.writeFileSync(__dirname+"/file/"+name,dy,err=>{
    if(err){}
})
    }
    else{
        for(let i = 0; i<files.asd.length;i++){
            var ti=files.asd[i]
            var name1 = encodeURIComponent(ti.originalFilename.replace(/\s/g,"-"))
console.log(name1)
var data = fs.readFileSync(ti.filepath)
        fs.writeFileSync(__dirname+"/file/"+name1,data,(err)=>{
            if (err){
                console.log(err)
            }
        })
        }
//         files.asd.forEach(faile=>{
//             console.log(faile.filepath)
// var name1 = encodeURIComponent(faile.originalFilename.replace(/\s/g,"-"))
// console.log(name1)
//         fs.rename(faile.filepath,__dirname+"/file/"+name1,(err)=>{
//             if (err){
//                 console.log(err)
//             }
//         })
//        })
    }
})
    console.log("rqa")
})
app.listen(3000)