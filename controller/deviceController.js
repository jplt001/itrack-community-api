const Device = require('../models/Device');
function DeviceController() { }

DeviceController.prototype.createDevice = async (req, res) => {
    try {
        const { deviceId, deviceName, vehicle, driver, status, lastLocation, model } = req.body;

        const device = await Device.create({ deviceId, deviceName, vehicle, driver, status, lastLocation, model });
        res.status(201).json(device);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

DeviceController.prototype.updateDevice = async (req, res) => {
    try {

        const { id } = req.params;
        const { deviceId, vehicle, driver, status, lastLocation, model } = req.body;

        const device = await Device.findByIdAndUpdate(id, { vehicle, driver, status, lastLocation, model }, { new: true });
        res.status(200).json(device);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

DeviceController.prototype.deleteDevice = async (req, res) => {
    try {
        const { deviceId } = req.body;

        await Device.findByIdAndDelete(deviceId);
        res.status(200).json({ message: 'Device deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

DeviceController.prototype.getDevice = async (req, res) => {
    try {
        const { id } = req.params;

        const device = await Device.findById(id);
        res.status(200).json(device);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

DeviceController.prototype.getDevices = async (req, res) => {
    try {
        const devices = await Device.find();
        res.status(200).json(devices);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = new DeviceController();
