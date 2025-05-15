const deviceRoutes = require('./device');
const authRoutes = require('./auth');
const routesObject = {
    "device": deviceRoutes,
    "auth": authRoutes
};

module.exports = routesObject;
