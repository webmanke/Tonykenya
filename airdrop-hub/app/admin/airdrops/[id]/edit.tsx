import { useState } from 'react';
import { useRouter } from 'next/router';
import airdropsData from '../../../../data/airdrops.json';

const EditAirdrop = () => {
    const router = useRouter();
    const { id } = router.query;
    const airdrop = airdropsData.find((item) => item.id === id);
    const [title, setTitle] = useState(airdrop ? airdrop.title : '');
    const [description, setDescription] = useState(airdrop ? airdrop.description : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to update the airdrop data
        // This would typically involve updating the JSON file or state management
        console.log('Airdrop updated:', { id, title, description });
        router.push('/admin/airdrops');
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Edit Airdrop</h1>
            <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-4">
                    <label className="block text-sm font-medium">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Update Airdrop
                </button>
            </form>
        </div>
    );
};

export default EditAirdrop;