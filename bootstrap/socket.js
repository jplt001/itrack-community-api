const { Server } = require('socket.io');
const logger = require('../utils/logger');

let io;

const setupSocket = (httpServer) => {
    io = new Server(httpServer, {
        cors: {
            origin: process.env.CORS_ORIGIN,
            methods: ['GET', 'POST'],
            credentials: true,
            allowedHeaders: ["Content-Type", "Authorization"],
        }
    });

    const websockets = require('../websockets');
    websockets.map(websocket => websocket(io));

    return io;
}

module.exports = { setupSocket };
