const express = require('express'); // import er bodole require use hoy



const app = express(); // Creates an Express application. The express() function is a top-level function exported by the express module.

// const rootCall = (req, res) => {
//     res.send('Thank You bery much')
// }

app.get('/', (req, res) => { res.send('Thank You for calling me') }); // application k call kora hoy http er get request er maddhome.

app.listen(3001, () => console.log('Listining to port 3001')); // application kon port dea run hobe seta bole dea.

