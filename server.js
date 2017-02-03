const express = require('express');
const fs = require('fs');
const path = require('path');



const app = express();
//加载静态资源
app.use(express.static('public'));

app.get('/',(req,res) => {
    res.sendFile( __dirname + "/" + "index.html" );
});

app.get('/index.html',(req,res) => {
    res.sendFile( __dirname + "/" + "index.html" );
});


app.get('/mv',(req,res) => {
   let dirName = path.join(__dirname,'public/mv/');
    fs.readdir(dirName,(err, files)=>{
        if (err) {
        return console.error(err);
        }
    files.forEach( function (file){
        console.log( file );
    });

    let response = {
       video:files
    };
    res.end(JSON.stringify(response));
    });  

});



//监听80端口
const server = app.listen(80,() => {
  let host = server.address().address
  let port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port);
 
});
