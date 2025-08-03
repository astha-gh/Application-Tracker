import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">Welcome to the Intern Registration Portal</h1>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-md ">Submit your details to apply for internship/volunteering opportunities.</p>
            <div className="flex gap-4">
                <button onClick={() => navigate('/register')} 
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                        Apply Now</button>
                <button onClick={() => navigate('/admin')} style={{ marginLeft: '10px' }}
                    className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
                    Admin View
                </button>
            </div>
        </div>
    );
}

export default Home;