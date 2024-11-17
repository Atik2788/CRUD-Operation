const express = require ('express')
const cors = require ('cors')
const mongoose = require ('mongoose')
require('dotenv').config();

const PORT = process.env.PORT || 7000;

const app = express();
app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log('MongoDB connected...'))
.catch((err) => console.log("MongoDB Error:", err))


app.listen(PORT, ()=>{
  console.log(`The surver is on port: ${PORT}`);
})