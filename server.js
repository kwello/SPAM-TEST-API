const express = require('express');
const cors = require('cors');

const app = express();

const corsOptions = {
    origin: 'http://localhost:8081' ,
};


//middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// routers
const router = require('./routes/userRoter');
app.use('/api/users', router);   



//api
app.get('/',(req,res)=>{
    res.json({message : "hello world"})
});


//port
const PORT = process.env.PORT || 8080;

//server
app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`);
});