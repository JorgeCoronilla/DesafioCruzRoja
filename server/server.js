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
const path = require('path')


//Endpoint para visualizar imágenes
app.get('/pics/:file', (req, res) => {
    res.sendFile(`${__dirname}/static/${req.params.file}`);
});

//Routers
app.use("/", router);

// Opening Server
app.listen(PORT || 3002, () => {
    console.log(`Server started at http://127.0.0.1:${PORT}`);
});