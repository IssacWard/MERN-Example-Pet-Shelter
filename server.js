const express = require("express");
const cors = require("cors");
const { Mongoose } = require("mongoose");
const port = 8000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(port, () => console.log(`Listening on port ${port}`));


require('./server/config/mongoose.config');
require('./server/routes/pets.routes.js')(app);