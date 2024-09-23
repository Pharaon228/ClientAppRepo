import React, { useEffect, useState } from 'react';
import yellowTailMobile from 'assets/img/yellow-tail-mobile.png';
import yellowTail1080 from 'assets/img/yellow-tail-1080.png';
import yellowTail4k from 'assets/img/yellow-tail-4k.png';
import question from 'assets/img/redButton.gif';
import rightBlock from 'assets/img/right.png';
import sb1 from 'assets/img/sb1.png';
import sb2 from 'assets/img/sb2.png';
import sb3 from 'assets/img/sb3.png';
import game from 'assets/img/game.png';
import ct from 'assets/img/ct.png';
import arrow from 'assets/img/arrow.png';
import { Fancybox } from '@fancyapps/ui';


const GameSection: React.FC = () => {
    const [isInfoBlockActive, setIsInfoBlockActive] = useState(false);
    const [activeIndex, setActiveIndex] = useState(1);

    const slides = [
        { src: sb1, alt: "screen-1" },
        { src: sb2, alt: "screen-2" },
        { src: sb3, alt: "screen-3" }
    ];

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        Fancybox.bind("[data-fancybox]", {});
    }, []);

    const handleOpenInfoBlock = () => {
        setIsInfoBlockActive(true);
    };

    const handleCloseInfoBlock = () => {
        setIsInfoBlockActive(false);
    };

    return (
        <section id="game">
            <img src={yellowTailMobile} alt="tail" className="tail mobile" />
            <img src={yellowTail1080} alt="tail" className="tail" />
            <img src={yellowTail4k} alt="tail" className="tail wide" />
            <img
                src={question}
                alt="question"
                className="question"
                data-aos="zoom-in"
                data-question="2"
                onClick={handleOpenInfoBlock}
            />

            {/* Инфоблок */}
            <div className={`infoblock ${isInfoBlockActive ? 'active' : ''}`} data-infoblock="2" style={{ display: 'flex', alignItems: 'center' }}>
                <style>
                    {`
            .game-img-1 {
                width: auto;
                height: 20%;
                margin-right: 10px;
            }

            @media (max-width: 768px) {
                .game-img-1 {
                    position: absolute;
                    bottom: 5%;
                    right: 50%;
                    transform: translateX(50%);
                    margin-right: 0;
                }
            }
        `}
                </style>
                <img src={game} alt="game" className="game-img-1" />
                <p>
                    This is the main thing that awaits you in the new phase.<br />
                    <br />
                    This will be a battle of cats, in which the winner will receive milk.
                    Each cat has its own characteristics and level, on which the reward depends. <br />
                    <br />
                    Main mechanics:<br />
                    - battles of cats for farm of $MLK<br />
                    - cats can be bought and sold through the internal marketplace via $MLK or $SOL<br />
                    - cats can be rented to other players, for which you will receive $MLK or $SOL and % of milk from his victories<br />
                    - it will be possible to rent for a certain number of battles, or on a daily basis
                </p>
                <div className="close" onClick={handleCloseInfoBlock} style={{ position: 'absolute', top: '10%', right: '10%', cursor: 'pointer' }}>
                    &times;
                </div>
            </div>

            <div className="flex">
                <div className="screens-block">
                    <img src={rightBlock} alt="right-back" className="game-left back-block" />

                    <div className="screens">
                        <img src={sb1} alt="screen" data-aos="zoom-out" data-aos-delay="400" data-fancybox="gallery1" />
                        <img src={sb2} alt="screen" data-aos="zoom-out" data-aos-delay="200" data-fancybox="gallery1" />
                        <img src={sb3} alt="screen" data-aos="zoom-out" data-fancybox="gallery1" />
                    </div>

                    {/* Слайдер с изображениями */}
                    <div className="screens-slider swiper-container">
                        <div
                            className="swiper-wrapper"
                            style={{
                                transitionDuration: '0ms',
                                transform: `translate3d(-${activeIndex * 100}%, 0px, 0px)`,
                                transitionDelay: '0ms',
                            }}
                        >
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className={`swiper-slide ${index === activeIndex ? 'swiper-slide-active' : ''} ${index === (activeIndex + 1) % slides.length ? 'swiper-slide-next' : ''} ${index === (activeIndex - 1 + slides.length) % slides.length ? 'swiper-slide-prev' : ''}`}
                                >
                                    <img
                                        src={slide.src}
                                        alt={slide.alt}
                                        data-aos="zoom-out"
                                        data-aos-delay="400"
                                        data-fancybox="gallery2"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Навигация слайдера */}
                        <div className="arrows">
                            <img
                                src={arrow}
                                alt="arrow"
                                className="arrow-left screens-left"
                                onClick={handlePrev}
                            />
                            <img
                                src={arrow}
                                alt="arrow"
                                className="arrow-right screens-right"
                                onClick={handleNext}
                            />
                        </div>
                    </div>
                </div>

                {/* Логотипы */}
                <div className="cat-logo">
                    <img src={game} alt="game" className="game" data-aos="fade-right" />
                    <img src={ct} alt="cat" className="cat" data-aos="fade-up" />
                </div>
            </div>
        </section>
    );
};

export default GameSection;
