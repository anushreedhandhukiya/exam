const express = require("express");
const cookie = require("cookie-parser");
const cors=require("cors");
const connected = require("./backend/config/db");
const router = require("./backend/routes/user.routes");
const productRoute = require("./backend/routes/product.routes");
const app = express();
app.use(cors({origin:"*"}))
app.use(express.json());

app.use(cookie());

app.use("/user", router);
app.use("/product", productRoute)

app.listen(8090, () => {
  console.log("Listening on 8090");
  connected()
});
