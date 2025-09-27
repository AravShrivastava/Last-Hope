// health-backend/server.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
// const axios = require('axios'); // <-- Not needed for the simulated demo, but leave it commented
const rateLimit = require = ('express-rate-limit'); 

// Load environment variables (the API key)
dotenv.config();

const app = express();
const PORT = 5000;
const COWIN_API_KEY = process.env.COWIN_API_KEY; // The secret key is loaded here

// Middleware Setup
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 50, 
    message: 'Too many requests from this IP, please try again after 15 minutes.'
});
app.use(limiter);
app.use(cors()); 
app.use(express.json());


// 🟢 SECURE API ENDPOINT ROUTE 🟢
app.post('/api/get-vaccine-schedule', async (req, res) => {
    const { identifier } = req.body; 

    if (!identifier) {
        return res.status(400).json({ status: 'error', message: 'Identifier is missing.' });
    }

    console.log(`[BACKEND] Received request for ID: ${identifier}`);

    // --- ⚠️ SIMULATION OF SECURE API CALL ⚠️ ---
    
    try {
        // Simulate checking the key (for demonstration purposes)
        if (!COWIN_API_KEY) {
            // If the .env file isn't loaded, this error is thrown
            throw new Error("API Key not loaded. Check .env file setup.");
        }

        // Simulate a database/API lookup delay (500ms)
        await new Promise(resolve => setTimeout(resolve, 500)); 

        // Simulated successful data retrieval
        const scheduleData = {
            message: `Vaccination details for ID ${identifier} fetched successfully from secure Co-WIN registry.`,
            schedule: `Status: Primary doses completed. Next recommended booster: Oct 2026.`,
            status: 'success'
        };
        
        // Send data back to the React front-end
        res.json(scheduleData);

    } catch (error) {
        console.error("Backend Error:", error.message);
        res.status(500).json({ status: 'error', message: 'Secure backend error.' });
    }
});


// Start Server
app.listen(PORT, () => {
    console.log(`\n======================================================`);
    console.log(`  ✅ SERVER READY: http://localhost:${PORT}`);
    console.log(`  🔑 API Key Status: ${COWIN_API_KEY ? 'SECURELY LOADED' : 'ERROR: NOT LOADED'}`);
    console.log(`  ➡️ Front-end connects to: http://localhost:${PORT}/api/get-vaccine-schedule`);
    console.log(`======================================================\n`);
});
