import React from 'react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const AirdropsIndex = () => {
    const [airdrops, setAirdrops] = useState([]);

    useEffect(() => {
        const fetchAirdrops = async () => {
            const response = await fetch('/data/airdrops.json');
            const data = await response.json();
            setAirdrops(data);
        };

        fetchAirdrops();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Airdrop Management</h1>
            <Link href="/admin/airdrops/add" className="mb-4 inline-block bg-blue-500 text-white py-2 px-4 rounded">
                Add New Airdrop
            </Link>
            <ul>
                {airdrops.map((airdrop) => (
                    <li key={airdrop.id} className="mb-2">
                        <Link href={`/admin/airdrops/${airdrop.id}/edit`} className="text-blue-600">
                            {airdrop.name}
                        </Link>
                        <Link href={`/admin/airdrops/${airdrop.id}/delete`} className="text-red-600 ml-4">
                            Delete
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AirdropsIndex;