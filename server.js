const { createServer } = require("http");
const { parse } = require("url");

const server = createServer((req, res) => {
  const pathName = parse(req.url, true).pathname;
  console.log(pathName);
  if (pathName === "/") {
    res.end("Hello world!");
  } else if (pathName === "/test") {
    res.end("Hello test!");
  }else{
    res.end("Not found");
  }
});

server.listen(8000, () => {
  console.log("Server running on port 8000");
});
