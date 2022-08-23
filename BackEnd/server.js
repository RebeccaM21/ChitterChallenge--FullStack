import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import { entries } from './src/routes/entries.js';

dotenv.config({
    path: `.env.${process.env.NODE_ENV}`
});

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT;
const HOST = process.env.HOST;

const main = async () => {
    await mongoose.connect(process.env.DB_URI)
        .then(res => console.log('connected'))
        .catch(error => console.log(error));
}

// app.get(`/`, (req, res) => {
//     res.send(`Hello World`);
// }); 

app.use(`/entries`, entries)

main().catch(error => console.log(error));

const server = app.listen(PORT, HOST, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`app listening at http://${SERVERHOST}:${SERVERPORT}`);
});

