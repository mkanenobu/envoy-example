const http = require("http");

const server = http.createServer((req, res) => {
  console.log(`[${req.method}] ${req.url}`);
  res.writeHead(200, { "Content-Type": "application/json" });
  const data = {
    ok: true,
    message: "Hello, World!",
  };
  res.end(JSON.stringify(data));
});

const port = 8080;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
