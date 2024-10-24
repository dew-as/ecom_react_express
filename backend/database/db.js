const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://devas:devas@cluster0.q0a7lbt.mongodb.net/my_db?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection

db.on('error', (err) => console.log('MongoDB Connection Error: ', err))

db.once('open', () => {
    console.log('Connected to MongoDB')
})

module.exports = db;