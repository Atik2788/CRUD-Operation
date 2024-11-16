# CRUD Operation: "Client"

### cd client
### npm init vite
### cd client
### npm install
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
### npm install insta 11 express mongoos mongodb cors nodemon
***
### in index.js >> 
const express = require ('express'); <br/>
const mongoose = require ('mongoose');<br/>
const cors = require ('cors');<br/>
const PORT = process.env.PORT || 3002;<br/>
<br/>
const app = express()<br/>
app.use(cors())<br/>
app.use(express.json())<br/>
<br/>
<br/>
app.listen(PORT, () =>{<br/>
    console.log("Server is running on ");<br/>
})<br/>

