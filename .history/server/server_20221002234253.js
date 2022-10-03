

const express = require("express");
const cors = require("cors");
const app = express ();


const db = require('./models');
db.sequelize.sync();

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(express.json());

//routes
app.get("*", (req,res)=> {
   res.json(); 
});

//port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Running on ${PORT}`);
});