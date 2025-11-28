// app.js
const express = require('express');
const app = express();

const routes = require('./routes/routes');
const handler = require('./handlers/mongo-db');

app.set('view engine', 'ejs');

// Middleware som kjører for hver request (ikke DB)
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

// --- Koble til MongoDB ÉN GANG før serveren starter ---
async function startServer() {
    await handler.connectToMongoDB(); // du har allerede riktig handler

    app.use(routes); // routes etter DB-connection

    app.listen(3000, () => {
        console.log('Server is running on http://localhost:3000');
    });
}

startServer();
