const mongoose = require('mongoose');

const configureDB = () => {
  mongoose.connect('mongodb://localhost:27017/usersDb')
    .then(() => {
      console.log('connected to usersDb');
    })
    .catch((err) => {
      console.log(`error connecting to DB: ${err}`);
    })
}

module.exports = configureDB;