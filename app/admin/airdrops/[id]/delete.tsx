import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const DeleteAirdrop = () => {
    const router = useRouter();
    const { id } = router.query;
    const [airdrops, setAirdrops] = useState([]);

    useEffect(() => {
        const fetchAirdrops = async () => {
            const response = await fetch('/data/airdrops.json');
            const data = await response.json();
            setAirdrops(data);
        };

        fetchAirdrops();
    }, []);

    const handleDelete = () => {
        const updatedAirdrops = airdrops.filter(airdrop => airdrop.id !== id);
        // Here you would typically send the updated list to your backend or save it locally
        console.log('Airdrop deleted:', id);
        router.push('/admin/airdrops');
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Delete Airdrop</h1>
            <p>Are you sure you want to delete this airdrop?</p>
            <button 
                onClick={handleDelete} 
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            >
                Confirm Delete
            </button>
            <button 
                onClick={() => router.push('/admin/airdrops')} 
                className="mt-4 ml-2 bg-gray-300 text-black px-4 py-2 rounded"
            >
                Cancel
            </button>
        </div>
    );
};

export default DeleteAirdrop;