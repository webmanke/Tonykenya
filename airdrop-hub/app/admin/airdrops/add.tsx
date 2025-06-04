import { useState } from 'react';
import { useRouter } from 'next/navigation';

const AddAirdrop = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newAirdrop = { title, description, date };

        // Fetch the existing airdrops
        const response = await fetch('/data/airdrops.json');
        const airdrops = await response.json();

        // Add the new airdrop to the existing list
        airdrops.push(newAirdrop);

        // Save the updated airdrops back to the JSON file (this is a placeholder, as you can't write to files in a Next.js app)
        // In a real app, you would send this data to an API or a database
        console.log('New Airdrop:', newAirdrop);
        
        // Redirect to the airdrops list after adding
        router.push('/admin/airdrops');
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-4">Add Airdrop</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                >
                    Add Airdrop
                </button>
            </form>
        </div>
    );
};

export default AddAirdrop;