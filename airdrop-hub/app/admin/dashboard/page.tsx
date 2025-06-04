import React from 'react';
import AdminNav from '../../../components/AdminNav';

const Dashboard = () => {
    return (
        <div>
            <AdminNav />
            <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
            <p>Manage your airdrops and notifications from here.</p>
            {/* Additional functionality for managing airdrops and notifications will be added here */}
        </div>
    );
};

export default Dashboard;