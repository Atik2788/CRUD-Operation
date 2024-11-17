# CRUD Operation: "Client"

### cd client
### npm init vite
### cd client
### npm install bootstrap axios react-router-dom
***
### in app.jsx >>
import { BrowserRouter, Routes, Router } from 'react-router-dom'<br/>
import 'bootstrap/dist/css/bootstrap.min.css'
***
***

# CRUD Operation: "Server"

### cd server
### npm init -y
### npm install insta 11 express mongoos mongodb cors nodemon dotenv body-parser
***

### in index.js "Basic Setup" >> <br/>
const express = require ('express') <br/>
const cors = require ('cors') <br/>
const mongoose = require ('mongoose') <br/>
const PORT = process.env.PORT || 7000; <br/>
 <br/>
const app = express(); <br/>
app.use(cors()) <br/>

 <br/>
app.get('/', (req, res) =>{ <br/>
  res.send({message: 'Surver is running...'}) <br/>
})

 <br/>
app.listen(PORT, (req, res)=>{ <br/>
  console.log(`The surver is on port: ${PORT}`); <br/>
}) <br/>


