const express = require ('express')
const cors = require ('cors')
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const PORT = process.env.PORT || 7000;

// middleware
app.use(express.json())
// app.use(cors())

app.use(cors({
  origin: [
    'https://tranquil-phoenix-8c2d0a.netlify.app', 
    'http://localhost:5174'
  ],
  credentials: true
}));



if (!process.env.DB_USER || !process.env.DB_PASSWORD) {
  throw new Error('Database credentials are missing in environment variables');
}

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.8ev4byy.mongodb.net/?retryWrites=true&w=majority`;


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const userCollection = client.db("CRUD_DB").collection("users");

    // get user
    app.get('/app/users', async(req, res) =>{
        const result = await userCollection.find().toArray();
        res.send(result)       
    })

    // get user by id, get one user
    app.get('/app/users/:id', async(req, res)=>{
        const id = req.params.id;
        const query = {_id: new ObjectId(id)};
        const result = await userCollection.findOne(query);
        res.send(result);
    })

    // post user 
    app.post('/app/users', async(req, res) =>{
        const user = req.body;
        const result = await userCollection.insertOne(user)
        res.send(result)
    })

    // delete data by id
    app.delete('/app/users/:id', async(req, res) =>{
        const id = req.params.id;
        const query = {_id: new ObjectId(id)};
        const result = await userCollection.deleteOne(query);
        res.send(result);
    })

    // update a user
    app.put('/app/users/:id', async(req, res) =>{
        const id = req.params.id;
        const filter = {_id: new ObjectId(id)}
        
        const updatedBody = req.body;
        const updatedUser = {
            $set: updatedBody
        }

        const result = await userCollection.updateOne(filter, updatedUser)
        res.send(result)
    })



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);




app.get('/', (req, res)=>{
    res.send('server is running')
})

app.listen(PORT, ()=>{
  console.log(`The surver is on port: ${PORT}`);
})