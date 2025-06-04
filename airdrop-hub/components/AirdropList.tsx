import React from 'react';
import Link from 'next/link';

const AirdropList = ({ airdrops }) => {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Current Airdrops</h2>
            <ul className="space-y-4">
                {airdrops.map((airdrop) => (
                    <li key={airdrop.id} className="border p-4 rounded shadow">
                        <h3 className="text-xl font-semibold">{airdrop.title}</h3>
                        <p>{airdrop.description}</p>
                        <Link href={`/airdrop/${airdrop.id}`} className="text-blue-500 hover:underline">
                            View Details
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AirdropList;