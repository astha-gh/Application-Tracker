import React, { useEffect, useState } from 'react';

const Admin = () => {
    const [applicants, setApplicants] = useState([]);

    useEffect(() => {
        const fetchApplicants = async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/applicants`);
                const data = await res.json();
                setApplicants(data);
            } catch (err) {
                console.log('Failed to fetch applicants');
            }
        };

        fetchApplicants();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 px-4 py-8 flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">All Applicants</h2>
            {applicants.length === 0 ? (
                <p className="text-gray-600">No applicants yet.</p>
            ) : (
                <div className="overflow-x-auto w-full max-w-5xl">
                    <table className="min-w-full bg-white border border-gray-200 rounded shadow">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="text-left py-3 px-4 border-b">Full Name</th>
                                <th className="text-left py-3 px-4 border-b">Email</th>
                                <th className="text-left py-3 px-4 border-b">Phone</th>
                                <th className="text-left py-3 px-4 border-b">Skills</th>
                                <th className="text-left py-3 px-4 border-b">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applicants.map((app) => (
                                <tr key={app._id} className="hover:bg-gray-100">
                                    <td className="py-2 px-4 border-b">{app.fullName}</td>
                                    <td className="py-2 px-4 border-b">{app.email}</td>
                                    <td className="py-2 px-4 border-b">{app.phone}</td>
                                    <td className="py-2 px-4 border-b">{app.skills}</td>
                                    <td className="py-2 px-4 border-b">{new Date(app.date).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Admin;
