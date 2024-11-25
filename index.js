const express = require('express');
const app = express();
const configureDB = require('./config/database');
const router = require('./config/routes');
const port = 3050;

configureDB(); // configure db
app.use(express.json());

// Use the router for handling routes
app.use(router);

app.listen(port, () => { console.log(`server is running in port ${port}`); });
