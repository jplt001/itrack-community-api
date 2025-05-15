# Itrack Community API

A RESTful API for managing vehicle tracking, users, devices, and authentication for the Itrack Community platform. Built with Node.js, Express, MongoDB, and Socket.IO.

## Features
- User authentication (JWT-based)
- Device and vehicle management
- Real-time tracking via WebSockets
- Role-based access control
- RESTful API endpoints

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- MongoDB instance (local or remote)

### Installation
```bash
# Clone the repository
git clone <repo-url>
cd itrack-community-api

# Install dependencies
npm install
```

### Environment Variables
Create a `.env` file in the root directory with the following variables:
```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/itrack
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
CORS_ORIGIN=http://localhost:3000
```

### Running the Server
```bash
# For development with auto-reload
npm run dev

# For production
npm start
```

## API Endpoints

### Auth
- `POST /api/auth/login` — User login
- `POST /api/auth/forgot-password` — Request password reset OTP
- `GET /api/auth/me` — Get current user info (requires JWT)

### Devices
- `POST /api/device/create-device` — Create a new device
- `PUT /api/device/:id` — Update a device
- `DELETE /api/device/delete-device` — Delete a device
- `GET /api/device/:id` — Get a device by ID
- `GET /api/device/` — List all devices

### Users
- `POST /api/user/` — Create a new user
- `PUT /api/user/:id` — Update a user
- `DELETE /api/user/:id` — Delete a user
- `GET /api/user/:id` — Get a user by ID

### Real-Time Tracking
- WebSocket namespace: `/track`
- Emits `fleet-view` event with tracking data

## Project Structure
```
controller/      # Controllers for business logic
routes/          # API route definitions
models/          # Mongoose models
middlewares/     # Express middlewares
websockets/      # WebSocket handlers
utils/           # Utility functions (logger, etc.)
config/          # Configuration files
bootstrap/       # App/bootstrap logic (e.g., socket setup)
server.js        # Main entry point
```

## License
ISC

---
For more details, see the source code and comments in each module.
