import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AirdropDetail from '../../../components/AirdropDetail';

const AirdropPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [airdrop, setAirdrop] = useState(null);

    useEffect(() => {
        const fetchAirdrop = async () => {
            if (id) {
                const response = await fetch(`/data/airdrops.json`);
                const data = await response.json();
                const foundAirdrop = data.find((item) => item.id === id);
                setAirdrop(foundAirdrop);
            }
        };
        fetchAirdrop();
    }, [id]);

    if (!airdrop) {
        return <div>Loading...</div>;
    }

    return <AirdropDetail airdrop={airdrop} />;
};

export default AirdropPage;