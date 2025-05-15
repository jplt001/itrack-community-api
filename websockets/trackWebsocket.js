const Device = require('../models/Device');
const logger = require('../utils/logger');
const Track = require('../models/Tracks');
module.exports = (io) => {
    io = io.of('/track');
    io.on('connection', (socket) => {
        logger.info('A device connected');

        socket.on('track', async (data) => {
            const { deviceId, latitude, longitude } = data;
            const device = await Device.findById(deviceId);
            if (device) {
                device.lastLocation = { latitude, longitude };
                await device.save();

                let tracksData = {
                    deviceId,
                    latitude,
                    longitude,
                    deviceName: device.deviceName,
                    vehicle: device.vehicle,
                    driver: device.driver,
                    status: device.status,
                }
                const track = await Track.create(tracksData);
                io.emit('fleet-view', track);
            }
        });

        socket.on('disconnect', () => {
            logger.info('A device disconnected');
        });
    });

    return io;
}