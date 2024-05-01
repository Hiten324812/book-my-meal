const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;


const data = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple', 'Grapes','hiten','dev','jaimin','redmi'];


app.use(cors());

app.get('/search', (req, res) => {
    const query = req.query.q.toLowerCase();
    const suggestions = data.filter(item => item.toLowerCase().includes(query));
    res.json(suggestions);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});



// app.use((req,res,next) => {


//     // cors - cross origin resource sharing allow web page to access restricted resource from a server on different domain
 
//     // changing handling requests and responses
 
//     // change - No session & cookies usage
 
//     // authentication also change JWT TOKEN 
 
//      res.setHeader('Access-Control-Allow-Origin','*')
//      res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE')
//      res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization')
    
//      next();
 
//  })

// Endpoint for handling search queries

