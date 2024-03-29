const express = require("express")
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

var port = process.env.port;

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api/auth",userRoutes)

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL, {
  }).then(()=> {
    console.log("DB Connection Successfull");
  }).catch((err)=>{
    console.log(err.message);
  });


app.listen(process.env.PORT, ()=> {
  console.log(`Server Started on PORT ${process.env.PORT}`);
});
