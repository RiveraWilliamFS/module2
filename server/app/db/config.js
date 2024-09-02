const mongoose = require("mongoose"); 

console.log('MongoDB URI:', process.env.MONGODB_URI);


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            
        });
        console.log(`Connected to MongoDB successfully ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;