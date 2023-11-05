const express = require('express'); // import er bodole require use hoy



const app = express(); // Creates an Express application. The express() function is a top-level function exported by the express module.

// const rootCall = (req, res) => {
//     res.send('Thank You bery much')
// }

const users = ['rakib', 'rashel', 'rana', 'rimon', 'masum', 'hakkani']

app.get('/', (req, res) => {
    const fruit = {
        product: 'Mango',
        price: 200
    }
    res.send(fruit)
    // res.send('Auto start the engine with nodemon')
}); // application k call kora hoy http er get request er maddhome.

app.get('/fruits/banana', (req, res) => {
    res.send({
        fruit: 'banana',
        quantity: 1000,
        price: 10000
    })
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id; // Browser theke enter howa id ta nea aschi

    // Browser Input: http://localhost:3001/users/5?sort=desc
    console.log(req.query.sort) // Output:  Browser e je query parameter likhbo oita terminal e dekhabe.
    const name = users[id]; // Browser e je id sea search dibo array er oi element dekhabe.
    res.send({id, name});
    console.log(req.params); // terminal e dekhabe kon id dea call kortase. Browser e id likhe search dele terminal e dekhabe kon id dea call kortase
})

app.listen(3001, () => console.log('Listining to port 3001')); // application kon port dea run hobe seta bole dea.

