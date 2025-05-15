const express = require('express');
const router = express.Router();
const deviceController = require('../controller/deviceController');
const { authMiddleware } = require('../middlewares/routeMiddleware');
const { body } = require('express-validator');
router.post('/create-device', [
    body('deviceId').notEmpty().withMessage('Device ID is required'),
    body('deviceName').notEmpty().withMessage('Device Name is required'),
    body('vehicle').notEmpty().withMessage('Vehicle is required'),
    body('driver').notEmpty().withMessage('Driver is required'),
    body('status').notEmpty().withMessage('Status is required'),
    body('model').notEmpty().withMessage('Model is required'),
],  deviceController.createDevice);
router.put('/:id',  deviceController.updateDevice);
router.delete('/delete-device',  deviceController.deleteDevice);
router.get('/:id',  deviceController.getDevice);
router.get('/',  deviceController.getDevices);
module.exports = router;