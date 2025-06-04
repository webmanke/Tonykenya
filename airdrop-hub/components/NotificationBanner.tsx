import React from 'react';

const NotificationBanner = () => {
    const [notifications, setNotifications] = React.useState([]);

    React.useEffect(() => {
        const fetchNotifications = async () => {
            const response = await fetch('/data/notifications.json');
            const data = await response.json();
            setNotifications(data.notifications);
        };

        fetchNotifications();
    }, []);

    if (notifications.length === 0) {
        return null;
    }

    return (
        <div className="bg-blue-500 text-white p-4">
            <h2 className="font-bold">Notifications</h2>
            <ul>
                {notifications.map((notification, index) => (
                    <li key={index} className="mt-2">
                        {notification.message}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NotificationBanner;