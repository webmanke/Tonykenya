import React from 'react';
import NotificationBanner from '../notifications/banner';
import '../styles/globals.css';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <NotificationBanner />
            <main className="flex-grow">
                {children}
            </main>
            <footer className="bg-gray-800 text-white text-center p-4">
                © {new Date().getFullYear()} Airdrop Hub. All rights reserved.
            </footer>
        </div>
    );
};

export default Layout;