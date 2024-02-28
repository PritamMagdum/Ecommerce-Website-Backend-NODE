const express = require("express");
const server = express();
const mongoose = require("mongoose");
const productRouters = require("./routes/Products");

// Middlewares
server.use(express.json()); // to parse req.body
server.use("/products", productRouters.router);

server.get("/", (req, res) => {
  res.json({ status: "success" });
});

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
  console.log("MongoDB Database Connected");
}

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});
