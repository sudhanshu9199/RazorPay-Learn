const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log('DB is connected!');
            
        })
    } catch (err) {
        console.log('Error from DB to connect:', err);
    }
}

module.exports = connectDB;