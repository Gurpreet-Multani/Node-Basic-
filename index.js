const http = require("http"); //this is to get access to url
const fs = require("fs"); //this is to get access to file systems/aka the files we want

const port = 8080; //declared a port number
const hostname = "localhost"; //just a good naming convention but not needed

//Function/Variable to find FILE
const HandleFiles = (filepath, statusCode, res) => {
  //Find File
  fs.readFile(filepath, (err, data) => {
    //code here
    if (!err) {
      //code here
      res.writeHead(statusCode, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
};

//Server
const server = http.createServer((req, res) => {
  const url = req.url; // Get the requested path

  if (url === "/") {
    //index.html
    HandleFiles("index.html", 200, res);
  } else if (url === "/about") {
    // about.html
    HandleFiles("about.html", 200, res);
  } else if (url === "/contact-me") {
    // contact-me.html
    HandleFiles("contact-me.html", 200, res);
  } else {
    // 404.html
    HandleFiles("404.html", 202, res);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
