const { readFileSync } = require("fs");
const { createServer } = require("http");
const { parse } = require("url");


const htmlTemplete = readFileSync(`${__dirname}/index.html`, "utf-8");

const server = createServer((req, res) => {
  const pathName = parse(req.url, true).pathname;
  console.log(pathName);
  if (pathName === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(htmlTemplete);
  } else if (pathName === "/test") {
    res.end("Hello test!");
  }else{
    res.end("Not found");
  }
});

server.listen(8000, () => {
  console.log("Server running on port 8000");
});
