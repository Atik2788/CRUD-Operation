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

# CRUD Operation: "Server (M-59 ph hero)"

### cd server
### npm init -y
### npm install insta 11 express mongoos mongodb cors nodemon dotenv body-parser
***

### in index.js "Basic Setup" >> <br/>
const express = require ('express')<br/>
const cors = require ('cors')<br/>
require('dotenv').config();<br/>
const app = express();<br/>
const PORT = process.env.PORT || 7000;<br/>
<br/>
// middleware<br/>
app.use(cors())<br/>
app.use(express.json())<br/>
<br/>

app.get('/', (req, res)=>{<br/>
    res.send('server is running')<br/>
})<br/>
<br/>
app.listen(PORT, ()=>{<br/>
  console.log(`The surver is on port: ${PORT}`);<br/>
})<br/>



