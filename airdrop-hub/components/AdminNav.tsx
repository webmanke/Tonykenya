import Link from 'next/link';

const AdminNav = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-4">
                <li>
                    <Link href="/admin/dashboard" className="text-white hover:underline">
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link href="/admin/airdrops" className="text-white hover:underline">
                        Airdrops
                    </Link>
                </li>
                <li>
                    <Link href="/admin/notifications" className="text-white hover:underline">
                        Notifications
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default AdminNav;