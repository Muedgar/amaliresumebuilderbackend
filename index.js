const express = require("express");

const mongoose = require("mongoose");
const cors = require("cors");

const dbSecrets = require("./config/secrets");

const router = require("./api/router/resume");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/amaliresumebuilder/backend/api", router);



const start  = async () => {
  mongoose.set('strictQuery', false);
  await mongoose.connect(dbSecrets.MONGO_URI)
  .then(d => {
    app.listen(dbSecrets.PORT, () => {
      console.log("server up and running ...");
    })
  })
  .catch(e => console.log(e.message));
}

start();

app.get('/', (req,res) => {
  res.status(200).json({status: "Server is ready..."});
})