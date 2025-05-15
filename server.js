const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();
const logger = require('./utils/logger');


app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI ?? "mongodb://localhost:27017")
    .then(() => logger.info('Connected to MongoDB'))
    .catch(err => logger.error('Could not connect to MongoDB', err));


const routesObject = require('./routes/index');

for (const route in routesObject) {
    app.use(`/api/${route}`, routesObject[route]);
}

const { setupSocket } = require('./bootstrap/socket');
const server = require('http').createServer(app);

setupSocket(server);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
});
