import bodyParser from 'body-parser'; 
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

// have to use npm start to access the environment files 

import { entries } from './src/routes/entries.js';
import { signup } from './src/routes/signup.js';


dotenv.config({
    path: `.env.${process.env.NODE_ENV}`
});

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(`/entries`, entries)
app.use(`/signup`, signup)
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT;
const HOST = process.env.HOST;

const main = async () => {
    console.log(`connecting to database at ${process.env.DB_URI}`);
    await mongoose.connect(process.env.DB_URI)
        // .then(res => console.log('connected'))
        // .catch(error => console.log(error));
}

main().catch(error => console.log(error));

const server = app.listen(PORT, HOST, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`app listening at http://${SERVERHOST}:${SERVERPORT}`);
});

export default server; 
