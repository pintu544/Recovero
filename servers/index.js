const express = require('express')
const port = 8000
const app = express()
const bodyParser = require('body-parser')
var cors = require('cors');
const db = require('./config/mongoose')
const userRoutes = require('./routes/userRoutes')


// cors (secure cross-origin requests)
var corsOptions = {
    origin: '*',
}
app.use(cors(corsOptions));
// app.use(express.urlencoded({extended:true}))

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// app.get('/', (req,res) => {
//     res.send("My Nodejs server...");
// })

// user routes
app.use('/', userRoutes)

app.listen(port, function(err){
    if(err) {console.log("error"); return;}
    console.log(`running server on port: ${port}`);
});