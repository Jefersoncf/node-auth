const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

const app = express();

//db config
const db = require('./config/keys').MongoURI;

//connect to mongo 
mongoose.connect(db, 
    {useNewUrlParser: true})
.then(() => {
    console.log('MongonDB Connected!');
})
.catch(err => {
    console.log(err);
})

//ejs 
app.use(expressLayouts);
app.set('view engine', 'ejs');

//bodyParser
app.use(express.urlencoded({ extended: false}))

//Routes
app.use('/', require('./routes/index'));

app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server is Runing in ${PORT}`));