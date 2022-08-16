import express from 'express';
import dotenv from 'dotenv'; 
import mongoose from 'mongoose'; 

dotenv.config(); 

const app = express(); 

const PORT = 4000;  
const HOST = 'localhost'; 

const main = async () => { 
    await mongoose.connect('mongodb://localhost:27017/DFChitter');
    console.log(`Connected...`); 
}

app.get(`/`, (req, res) => {
    res.send(`Hello World`);
}); 

main().catch(error => console.log(error)); 

const server = app.listen(PORT, HOST, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`app listening at http://${SERVERHOST}:${SERVERPORT}`);
});

