const http  = require("http");
const fs = require("fs");
const path  = require("path");
const url         = require("url");
const querystring = require("querystring");
const figlet = require('figlet')

const server = http.createServer((req, res) => {
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);
    console.log(page);
    const aResponse = function(requestedPage,res,code = 200, contentType ='text/html',returnInfo ){
        console.log(page,params);
        const filePath = path.join(__dirname, requestedPage);
        fs.readFile(filePath, function(err, returnInfo) {
            if(err){
                console.error("error",err);
                return;
            }
            res.writeHead(code, {'Content-Type': contentType});
            res.write(returnInfo);
            res.end();
        })
    }
    responseMap = new Map([
            ['/',               ['index.html',      res, 200,'text/html'  ,data      ]],
            ['/css/style.css',  ['/css/style.css',  res, 200, 'text/css'  ,data      ]],
            ['/js/main.js',     ['/js/main.js',     res, 200, 'text/javascript' ,data]],
            ['/flip',           ['/flip',           res, 200, 'application/json'],JSON.stringify(objToJson)],
    ]);
    if (responseMap.has(page)){
        // //         console.log('params',params,"page",page,"responseMap.get(page)",'responseMap.get(page)');
        aResponse(...responseMap.get(page));
    }
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/flip') {
        maff = Math.round(Math.random())===1? 'heads': "Tails";
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          side: maff,
        }
        res.end(JSON.stringify(objToJson));
      
  }//else if
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});
server.listen(8000);
// const http        = require('http');
// const fs          = require("fs");
// const path =require('path')
// const url         = require("url");
// const querystring = require("querystring");
// const figlet      = require("figlet");

// const server = http.createServer((req, res) => {
//     const page = url.parse(req.url).pathname;
//     const params = querystring.parse(url.parse(req.url).query);
// //     //console.log(page,params);
//     const aResponse = function(requestedPage,res,code = 200, contentType ='text/html'){
//         console.log(page,params);
//         const filePath = path.join(__dirname, requestedPage);
//         fs.readFile(filePath, function(err, data) {
//             if(err){
//                 console.error("error",err);
//                 return;
//             }
//             res.writeHead(code, {'Content-Type': contentType});
//             res.write(data);
//             res.end();
//         })
//     }
//     responseMap = new Map([
//         ['/',               ['index.html',      res, 200,'text/html'        ]],
//         ['/css/style.css',  ['/css/style.css',  res, 200, 'text/css'        ]],
//         ['/js/main.js',     ['/js/main.js',     res, 200, 'text/javascript' ]],
//         ['/flip',           ['/flip',           res, 200, 'application/json']],     
//     ]);
// //     //if ('flip' in params)
// //     //console.log('params',params,"page",page,"responseMap.get(page)",'responseMap.get(page)');
//     if (responseMap.has(page)){
// //         console.log('params',params,"page",page,"responseMap.get(page)",'responseMap.get(page)');
//         aResponse(...responseMap.get(page));
//     }
// });

// server.listen(8000, () => {
//     console.log("Server is listening on port 8000");
// });








// });//last parenthesis
// server.listen(8000, () => {console.log("Server is listening on port 8000"); });




    

   
//     else if (page === '/flip') {
//         const coinFlipResult = Math.random() < 0.5 ? 'Heads' : 'Tails';
//         const jsonResponse = JSON.stringify({ side: coinFlipResult });

//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.write(jsonResponse);
//         res.end();
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.write('404 Not Found');
//         res.end();
//     }
