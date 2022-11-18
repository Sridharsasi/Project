const express = require('express');
const app = express();

const userRoutes = require('./server/routes/user');

app.use(express.json());

app.use(function(req,res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("AAccess-Control-Allow-Headers", "Origin, X-Requested-with, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods","GET,POST,PUT,DELETE,OPTIONS");
    next();

});

app.use("/users", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`server started on port ${PORT}!`));

