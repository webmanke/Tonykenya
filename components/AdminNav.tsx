import Link from 'next/link';

const AdminNav = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-4">
                <li>
                    <Link href="/admin/dashboard">
                        <span className="text-white hover:underline">Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link href="/admin/airdrops">
                        <span className="text-white hover:underline">Airdrops</span>
                    </Link>
                </li>
                <li>
                    <Link href="/admin/notifications">
                        <span className="text-white hover:underline">Notifications</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default AdminNav;