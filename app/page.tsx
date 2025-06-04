import React from 'react';
import AirdropList from '../components/AirdropList';
import NotificationBanner from '../components/NotificationBanner';

const HomePage = () => {
    return (
        <div className="container mx-auto p-4">
            <NotificationBanner />
            <h1 className="text-2xl font-bold mb-4">Current Airdrops</h1>
            <AirdropList />
        </div>
    );
};

export default HomePage;