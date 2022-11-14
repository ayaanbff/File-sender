const fs = require("fs")
fs.readdir(__dirname+"/file",(err,files)=>{
    if(err){console.log(err)}
    files.forEach(item=>{
        fs.unlink(__dirname+"/file/"+item,err=>{
            if(err){console.log(err)}
        })
    })
})