const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

// View engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Logger
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// Routes + DB
const routes = require('./routes/routes');
const { connectToMongoDB } = require('./handlers/mongo-db');

async function startServer() {
  await connectToMongoDB();

  app.use(routes);

  app.listen(3000, '0.0.0.0', () => {
    console.log('Server is running on port 3000');
  });
}

startServer();
