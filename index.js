const express = require('express'); // import er bodole require use hoy

const cors = require('cors');

const bodyParser = require('body-parser')

const app = express(); // Creates an Express application. The express() function is a top-level function exported by the express module.

app.use(cors()); // express cors middleware use 

app.use(bodyParser.json()) // parse application/json

const users = ['rakib', 'rashel', 'rana', 'rimon', 'masum', 'hakkani']

// get
app.get('/', (req, res) => {
    const fruit = {
        product: 'Mango',
        price: 200
    }
    res.send(fruit)
    // res.send('Auto start the engine with nodemon')
}); // application k call kora hoy http er get request er maddhome.

app.get('/users/:id', (req, res) => {
    const id = req.params.id; // Browser theke enter howa id ta nea aschi
    const name = users[id]; // Browser e je id sea search dibo array er oi element dekhabe.
    res.send({id, name});
})

// post
app.post('/addUser', (req, res) => {
    console.log(req.body);
})

app.listen(3001, () => console.log('Listining to port 3001')); // application kon port dea run hobe seta bole dea.

