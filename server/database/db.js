import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {

    const MONGODB_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@mern-todo.vumg6rv.mongodb.net/?retryWrites=true&w=majority`;

    mongoose.connect(MONGODB_URL, { useNewUrlParser: true});

    mongoose.connection.on('connected', ()=> {
        console.log("Database Connected");
    })

    mongoose.connection.on('disconnected', ()=> {
        console.log("Database Disconnected");
    })

    mongoose.connection.on('error', ()=> {
        console.log("Error Occured while connecting", error.message);
    })
}

export default Connection;