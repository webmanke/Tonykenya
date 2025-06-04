import React from 'react';

interface AirdropDetailProps {
    airdrop: {
        id: string;
        title: string;
        description: string;
        startDate: string;
        endDate: string;
        eligibility: string;
        link: string;
    };
}

const AirdropDetail: React.FC<AirdropDetailProps> = ({ airdrop }) => {
    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">{airdrop.title}</h1>
            <p className="mb-2"><strong>Description:</strong> {airdrop.description}</p>
            <p className="mb-2"><strong>Start Date:</strong> {airdrop.startDate}</p>
            <p className="mb-2"><strong>End Date:</strong> {airdrop.endDate}</p>
            <p className="mb-2"><strong>Eligibility:</strong> {airdrop.eligibility}</p>
            <a href={airdrop.link} className="text-blue-500 hover:underline">Participate Now</a>
        </div>
    );
};

export default AirdropDetail;