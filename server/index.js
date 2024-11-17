const express = require ('express')
const cors = require ('cors')
const mongoose = require ('mongoose')
const PORT = process.env.PORT || 7000;

const app = express();
app.use(cors())


app.get('/', (req, res) =>{
  res.send({message: 'Surver is running...'})
})


app.listen(PORT, (req, res)=>{
  console.log(`The surver is on port: ${PORT}`);
})