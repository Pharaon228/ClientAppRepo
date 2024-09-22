import React, { useState } from 'react';
import orangeTailMobile from 'assets/img/orange-tail-mobile.png';
import orangeTail1080 from 'assets/img/orange-tail-1080.png';
import orangeTail4k from 'assets/img/orange-tail-4k.png';
import question from 'assets/img/question.png';
import nft from 'assets/img/nft.png';
import rightBlock from 'assets/img/right.png';
import nft1 from 'assets/img/nft1.png';
import nft2 from 'assets/img/nft2.png';
import nft3 from 'assets/img/nft3.png';
import nft4 from 'assets/img/nft4.png';
import arrow from 'assets/img/arrow.png';

const NFTSlider: React.FC = () => {

    const [activeNftId, setActiveNftId] = useState(2);
    const nfts = [
        { id: 1, imgSrc: nft2 },
        { id: 2, imgSrc: nft1 },
        { id: 3, imgSrc: nft4 },
        { id: 4, imgSrc: nft3 },
    ];

    const slider = (id: number) => {
        setActiveNftId(id);
    };

    const getClass = (id: number) => {
        const diff = id - activeNftId;
        if (diff === -1 || diff === 3) return 'nft-left';
        if (diff === 1 || diff === -3) return 'nft-right';
        if (diff === 0) return 'nft-active';
        return 'nft-back';
    };

    const handleNext = () => {
        const nextId = activeNftId === 4 ? 1 : activeNftId + 1;
        slider(nextId);
    };

    const handlePrev = () => {
        const prevId = activeNftId === 1 ? 4 : activeNftId - 1;
        slider(prevId);
    };

    const [activeInfoBlock, setActiveInfoBlock] = useState<null | number>(null);


    const handleQuestionClick = (id: number) => {
        setActiveInfoBlock(id);
    };


    const handleCloseInfoBlock = () => {
        setActiveInfoBlock(null);
    };

    return (
        <section id="nft" className="q-right">
            <img src={orangeTailMobile} alt="tail" className="tail mobile" />
            <img src={orangeTail1080} alt="tail" className="tail" />
            <img src={orangeTail4k} alt="tail" className="tail wide" />
            <div className={`infoblock ${activeInfoBlock === 1 ? 'active' : ''}`} data-infoblock="1">
                <p>
                    The basis of our game will be NFT battles, as a result of which users will earn $MLK. <br />
                    <br />
                    We are introducing a whitelist system so that only our most loyal players can buy the limited edition.<br />
                    <br />
                    We will have 5000 whitelist users and 10000 NFTs. The whitelist itself can be obtained by completing tasks in our game that are already available for completion. Each whitelist user will be able to mint 2 nfts
                </p>
                <div className="close" onClick={handleCloseInfoBlock}>&times;</div>

            </div>

            <img src={question} alt="question" className="question" data-question="1" onClick={() => handleQuestionClick(1)} />


            <div className="flex">
                <div data-aos="fade-right">
                    <img src={nft} alt="nft" className="nft-logo" />
                </div>

                <div className="nft-block" data-aos="fade-left">
                    <img src={rightBlock} alt="right-back" className="back-block" />
                    <div className="nfts">
                        {nfts.map((nft) => (
                            <div key={nft.id} className={`nft-item ${getClass(nft.id)}`} data-id={nft.id} onClick={() => slider(nft.id)}>
                                <img src={nft.imgSrc} alt={`nft ${nft.id}`} />
                            </div>
                        ))}
                    </div>

                    <div className="arrows">
                        <img src={arrow} alt="Previous" className="arrow-left" onClick={handlePrev} />
                        <img src={arrow} alt="Next" className="arrow-right" onClick={handleNext} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NFTSlider;
