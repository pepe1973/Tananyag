import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

const PORT = process.env.PORT || 3500;
const app = express();

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/api`);
});
