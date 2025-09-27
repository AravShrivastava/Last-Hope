// src/VaccinationChecker.jsx

import React, { useState } from 'react';
import axios from 'axios'; 

// ⚠️ THIS MUST POINT TO YOUR LOCAL NODE.JS SERVER (Part 2)
const API_ENDPOINT = 'http://localhost:5000/api/get-vaccine-schedule'; 

const VaccinationChecker = () => {
    const [regId, setRegId] = useState(''); 
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const checkSchedule = async () => {
        if (!regId) {
            setResult({ status: 'error', message: 'Please enter an identifier (e.g., 9012345678).' });
            return;
        }

        setLoading(true);
        setResult(null);

        try {
            // ➡️ AXIOS SENDS THE REQUEST TO YOUR SECURE BACKEND SERVER
            const response = await axios.post(API_ENDPOINT, { identifier: regId });

            setResult(response.data); 

        } catch (error) {
            setResult({
                status: 'error',
                message: "Could not connect to the backend server. Make sure the Node.js server is running!",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 border border-blue-400 rounded-lg bg-blue-50/70 shadow-md">
            <h3 className="text-lg font-bold text-blue-800 mb-2">
                Co-WIN Schedule Lookup (Real-Time Demo)
            </h3>
            <div className="flex space-x-2">
                <input
                    type="text"
                    placeholder="Enter Identifier (e.g., Reg. ID / DOB)"
                    value={regId}
                    onChange={(e) => setRegId(e.target.value)}
                    className="flex-grow p-2 border rounded-md text-gray-800"
                    disabled={loading}
                />
                <button
                    onClick={checkSchedule}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
                    disabled={loading}
                >
                    {loading ? 'Fetching...' : 'Check Status'}
                </button>
            </div>

            {/* Display Results */}
            {result && (
                <div className={`mt-4 p-3 rounded-md ${
                    result.status === 'success' ? 'bg-green-100 border-green-500 text-green-800' : 'bg-red-100 border-red-500 text-red-800'
                } border-l-4`}>
                    <p className="font-semibold">{result.message || 'Status Updated'}</p>
                    {result.schedule && <p className="mt-1 text-sm">Schedule: {result.schedule}</p>}
                </div>
            )}
        </div>
    );
};

export default VaccinationChecker;
