import React from 'react';
import AdminNav from '../../../components/AdminNav';

const AdminLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <AdminNav />
            <main className="flex-grow p-4">
                {children}
            </main>
        </div>
    );
};

export default AdminLayout;