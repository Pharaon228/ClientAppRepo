import { useEffect } from 'react';
import topline from 'assets/img/topline.png';
import nft from 'assets/img/nft.png';
import game from 'assets/img/game.png';
import logo from 'assets/img/logo.png';
import int1 from 'assets/img/int1.svg';
import int2 from 'assets/img/int2.svg';
import int3 from 'assets/img/int3.png';
import int4 from 'assets/img/int4.svg';
import leftBlock from 'assets/img/mlkKntnr.png';
import rightBlock from 'assets/img/right.png';
import orangeTailMobile from 'assets/img/orange-tail-mobile.png';
import orangeTail1080 from 'assets/img/orange-tail-1080.png';
import orangeTail4k from 'assets/img/orange-tail-4k.png';
import question from 'assets/img/question.png';
import nft1 from 'assets/img/nft1.png';
import nft2 from 'assets/img/nft2.png';
import nft3 from 'assets/img/nft3.png';
import nft4 from 'assets/img/nft4.png';
import arrow from 'assets/img/arrow.png';
import yellowTailMobile from 'assets/img/yellow-tail-mobile.png';
import yellowTail1080 from 'assets/img/yellow-tail-1080.png';
import yellowTail4k from 'assets/img/yellow-tail-4k.png';
import sb1 from 'assets/img/sb1.png';
import sb2 from 'assets/img/sb2.png';
import sb3 from 'assets/img/sb3.png';
import sb5 from 'assets/img/sb5.png'
import sb6 from 'assets/img/sb6.png';
import ct from 'assets/img/ct.png';
import grayTailMobile from 'assets/img/gray-tail-mobile.png';
import grayTail1080 from 'assets/img/gray-tail-1080.png';
import grayTail4k from 'assets/img/gray-tail-4k.png';
import airdrop from 'assets/img/airdrop.png';
import shop from 'assets/img/shop.png';
//import aboutUs from 'assets/images/buttons/AboutUs.png';

//import CountUp from 'react-countup';
//import { useInView } from 'react-intersection-observer';

import './styles.css';
import './aos.css';
import AOS from 'aos';

function AppScreen() {
    useEffect(() => {

        AOS.init({
            duration: 1000,
        });

    }, []);
    //const [showCatComponent, setShowCatComponent] = useState(false);
    useEffect(() => {

        const catComponentTimeout = setTimeout(() => {
            //setShowCatComponent(true);
        }, 2000);

        return () => {
            clearTimeout(catComponentTimeout);
        };
    }, []);
    //const [randomValue1, setRandomValue1] = useState(0);
    //const [randomValue2, setRandomValue2] = useState(0);
    //const [randomValue3, setRandomValue3] = useState(0);
    //const [randomValue4, setRandomValue4] = useState(0);

    //const { ref: leftContainerRef, inView: isLeftInView } = useInView({
    //    triggerOnce: false,
    //    threshold: 0.1,
    //});

    {/* useEffect(() => {
        if (isLeftInView) {
            // setRandomValue1(Math.floor(Math.random() * (150000 - 100000 + 1)) + 100000);
            // setRandomValue2(Math.floor(Math.random() * (150000 - 100000 + 1)) + 100000);
            // setRandomValue3(Math.floor(Math.random() * (150000 - 100000 + 1)) + 100000);
            // setRandomValue4(Math.floor(Math.random() * (150000 - 100000 + 1)) + 100000);
        }
    }, [isLeftInView]);*/}



    return (
        <>
            <section id="main">
                <img src={topline} alt="topline" className="topline" />

                <header>
                    <div data-aos="fade-right">
                        <a href="#nft"><img src={nft} alt="nft" className="hover" /></a>
                        <a href="#game"><img src={game} alt="game" className="hover" /></a>
                    </div>
                    <div data-aos="fade-left">
                        <a href="#shop"><img src={shop} alt="shop" className="hover" /></a>
                        <a href="#airdrop"><img src={airdrop} alt="airdrop" className="hover" /></a>

                    </div>
                </header>

                <img src={logo} alt="catap" className="logo" data-aos="zoom-out" />

                <div className="int" data-aos="fade-up">
                    <img src={int1} alt="int1" />
                    <img src={int2} alt="int2" />
                    <img src={int3} alt="int3" />
                    <img src={int4} alt="int4" />
                </div>

                <div className="container">
                    <div className="left" data-aos="zoom-in" data-aos-offset="0">
                        <img src={leftBlock} alt="left-block" />
                        <div className="left-container">
                            <p>Lorem, ipsum dolor.</p>
                            <p>Quae, ullam eligendi.</p>
                            <p>Minus, eius dolore!</p>
                            <p>Neque, voluptatem voluptate?</p>
                        </div>
                    </div>
                    <div className="right" data-aos="zoom-in" data-aos-offset="0">
                        <img src={rightBlock} alt="right-block" />
                        <div className="p-container">
                            <p>
                                Our cat family is getting bigger.<br />
                                We are pleased to present to you a completely new approach to the play-to-earn format, in which each of our cats will receive as much milk as they really deserve.<br />
                                Thank you for going through this adventure with us!<br />
                                The adventure turned out to be incredible, but this is only the beginning of our exciting journey.<br />
                                What's next?<br />
                                Our game has attracted hundreds of thousands of people with its respect for the player's time, and we want to introduce our second phase of the project, which will be a new game based on NFT battles. The game will run on the Solana network, which is currently the most popular network.
                            </p>
                        </div>
                    </div>
                </div>

                {/* NFT Section */}

            </section>
            <section id="nft" className="q-right">
                <img src={orangeTailMobile} alt="tail" className="tail mobile" />
                <img src={orangeTail1080} alt="tail" className="tail" />
                <img src={orangeTail4k} alt="tail" className="tail wide" />
                <img src={question} alt="question" className="question" data-aos="zoom-in" data-question="1" />
                <div className="infoblock" data-infoblock="1">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    <div className="close">Close</div>
                </div>
                <div className="flex">
                    <div data-aos="fade-right">
                        <img src={nft} alt="nft" className="nft-logo" />
                    </div>
                    <div className="nft-block" data-aos="fade-left">
                        <img src={rightBlock} alt="right-back" className="back-block" />
                        <div className="nfts">
                            <div className="nft-item nft-left" data-id="1"><img src={nft2} alt="nft" /></div>
                            <div className="nft-item nft-active" data-id="2"><img src={nft1} alt="nft" /></div>
                            <div className="nft-item nft-right" data-id="3"><img src={nft4} alt="nft" /></div>
                            <div className="nft-item nft-back" data-id="4"><img src={nft3} alt="nft" /></div>
                        </div>
                        <div className="arrows">
                            <img src={arrow} alt="arrow" className="arrow-left" />
                            <img src={arrow} alt="arrow" className="arrow-right" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Game Section */}
            <section id="game">
                <img src={yellowTailMobile} alt="tail" className="tail mobile" />
                <img src={yellowTail1080} alt="tail" className="tail" />
                <img src={yellowTail4k} alt="tail" className="tail wide" />
                <img src={question} alt="question" className="question" data-aos="zoom-in" data-question="2" />
                <div className="infoblock" data-infoblock="2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    <div className="close">Close</div>
                </div>
                <div className="flex">
                    <div className="screens-block">
                        <img src={rightBlock} alt="right-back" className="game-left back-block" />
                        <div className="screens">
                            <img src={sb1} alt="screen" data-aos="zoom-out" data-aos-delay="400" />
                            <img src={sb2} alt="screen" data-aos="zoom-out" data-aos-delay="200" />
                            <img src={sb3} alt="screen" data-aos="zoom-out" />
                        </div>
                    </div>
                    <div className="cat-logo">
                        <img src={game} alt="game" className="game" data-aos="fade-right" />
                        <img src={ct} alt="cat" className="cat" data-aos="fade-up" />
                    </div>
                </div>
            </section>

            {/* Shop Section */}
            <section id="shop">
                <img src={yellowTailMobile} alt="tail" className="tail mobile" />
                <img src={yellowTail1080} alt="tail" className="tail" />
                <img src={yellowTail4k} alt="tail" className="tail wide" />
                <img src={question} alt="question" className="question" data-aos="zoom-in" data-aos-offset="0" data-question="3" />
                <div className="infoblock" data-infoblock="3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <div className="close">Close</div>
                </div>
                <div className="flex">
                    <div data-aos="fade-right">
                        <img src={shop} alt="shop" className="shop" />
                    </div>
                    <div data-aos="zoom-out" data-aos-offset="0">
                        <div className="screens-2">
                            <img src={sb5} alt="screen" data-aos-delay="400" />
                            <img src={sb6} alt="screen" data-aos-delay="400" />
                        </div>
                        <div className="screens-2-slider swiper-container">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <img src={sb5} alt="screen" />
                                </div>
                                <div className="swiper-slide">
                                    <img src={sb6} alt="screen" />
                                </div>
                            </div>
                            <div className="swiper-pagination screens-2-pagination"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Airdrop Section */}
            <section id="airdrop">
                <img src={grayTailMobile} alt="tail" className="tail mobile" />
                <img src={grayTail1080} alt="tail" className="tail" />
                <img src={grayTail4k} alt="tail" className="tail wide" />
                <div className="flex">
                    <div data-aos="fade-right">
                        <img src={airdrop} alt="airdrop" className="airdrop" />
                    </div>
                    <div className="airdrop-text" data-aos="fade-left">
                        <img src={leftBlock} alt="back" className="back-block" />
                        <div className="text">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            <p>Dicta quos quibusdam totam eos delectus. Quaerat accusamus officiis odio ipsa?</p>
                            <p>Maxime laudantium ipsum eos adipisci, similique culpa animi doloremque dicta!</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AppScreen;
