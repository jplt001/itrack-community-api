const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const { authMiddleware } = require('../middlewares/routeMiddleware');
const { body } = require('express-validator');

router.post('/login', [
    body('email').notEmpty().withMessage('Email is required'),
    body('password').notEmpty().withMessage('Password is required'),
], authController.login);
router.post('/forgot-password', [
    body('email').notEmpty().withMessage('Email is required'),
], authController.forgotPassword);
// router.post('/reset-password', [
//     body('email').notEmpty().withMessage('Email is required'),
//     body('password').notEmpty().withMessage('Password is required'),
//     body('token').notEmpty().withMessage('Token is required'),
// ], authController.resetPassword);
router.get('/me', authMiddleware, authController.message);

module.exports = router;
