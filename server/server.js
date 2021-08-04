const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParse = require('body-parser');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express()

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true, 
    useFindAndModify: true
})
.then(() => console.log("DB CONNECTED"))
.catch(err => console.log(`DB CONNECTION ERR ${err}`));

app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

app.get('/api', (req, res) => {
    res.json({
        data: "you reached the api!"
    })
});

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));