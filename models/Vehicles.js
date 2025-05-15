const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    plateNumber: {
        type: String,
        required: true,
        unique: true
    },
    vehicleType: {
        type: String,
        required: true
    },
    vehicleModel: {
        type: String,
        required: true
    },
    vehicleYear: {
        type: Number,
        required: true
    },
    vehicleColor: {
        type: String,
        required: true
    },
    vehicleFuelType: {
        type: String,
        required: true
    },
    vehicleTransmission: {
        type: String,
        required: true
    },
    vehicleEngineCapacity: {
        type: Number,
        required: true
    },
    images: {
        type: [String],
        required: true
    },
    repairHistory: {
        type: [String],
        required: false
    },
    preferredDriver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;