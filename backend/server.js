const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();


const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

const uri = process.env.URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("DB connected succesfully");
})


app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});