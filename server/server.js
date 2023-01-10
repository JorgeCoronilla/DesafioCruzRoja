//imports

const express = require('express');
const app = express();
require('dotenv').config();
const cors = require("cors");
const cookieParser = require('cookie-parser');
const router = require("./routes/routes");
const PORT =  process.env.PORT;


//middlewares
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());


//Routers
app.use("/", router);


// Opening Server
app.listen(3000|| 3002,);