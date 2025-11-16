import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

const PORT = process.env.PORT || 3500;
const app = express();

import dbConnect from './utils/dbConnection.mjs';

dbConnect()
    .then(() => {
        console.log('Sikeres adatbázis csatlakozás!');
        app.listen(PORT, () => {
            console.log(`http://localhost:${PORT}/api`);
        });
    })
    .catch((error) => {
        console.error(`A hiba oka: ${error.message}`);
    });
