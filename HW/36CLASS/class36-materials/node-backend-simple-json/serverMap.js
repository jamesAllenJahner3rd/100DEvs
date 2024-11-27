const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  const readAndEnd =(res, err, data)=>{ res.write(data); res.end()};
  const aReadFile =(requestedPage) =>{
    fs.readFile(requestedPage, function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      readAndEnd(res,err, data);
    })
  };
  let map ={
    '/'               : () =>aReadFile('index.html'),
    '/otherpage'      : () =>aReadFile('otherpage.html'),
    '/otherotherpage' : () =>aReadFile('otherotherpage.html'),
    '/css/style.css'  : () =>fs.readFile('css/style.css', function(err, data) {readAndEnd(res,err, data)}),
    '/js/main.js'     : () =>fs.readFile('js/main.js', function(err, data) {
                                res.writeHead(200, {'Content-Type': 'text/javascript'});
                                readAndEnd(res,err, data)
                                })
  }
  if (map[page])map[page]()
  else if (page == '/api') {
    if(!('student' in params)){
      return
    }
    if(params['student']== 'leon'){
      res.writeHead(200, {'Content-Type': 'application/json'});
      const objToJson = {
        name: "leon",
        currentOccupation: "Baller"
      }
      res.end(JSON.stringify(objToJson));
    }//student = leon
    else if(params['student'] != 'leon'){
      res.writeHead(200, {'Content-Type': 'application/json'});
      const objToJson = {
        name: "unknown",
        status: "unknown",
        currentOccupation: "unknown"
      }
      res.end(JSON.stringify(objToJson));
    }//student != leon
    
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.writeHead(404, {'Content-Type': 'text/plain'});
      readAndEnd(res,err, data);
    });
  }
});

server.listen(8000, () => { console.log('Server is listening on port 8000'); });