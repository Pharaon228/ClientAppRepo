import { useEffect, useState } from 'react';
import topline from 'assets/img/topline.png';
import nft from 'assets/img/nft.png';
import game from 'assets/img/game.png';
//import logo from 'assets/img/logo.png';
//import logoText from 'assets/images/logo.png';
//import int1 from 'assets/img/int1.svg';
//import int2 from 'assets/img/int2.svg';
//import int3 from 'assets/img/int3.png';
//import int4 from 'assets/img/int4.svg';
//import leftBlock from 'assets/img/mlkKntnr.png';
//import rightBlock from 'assets/img/right.png';
//import orangeTailMobile from 'assets/img/orange-tail-mobile.png';
//import orangeTail1080 from 'assets/img/orange-tail-1080.png';
//import orangeTail4k from 'assets/img/orange-tail-4k.png';
//import question from 'assets/img/question.png';
//import nft1 from 'assets/img/nft1.png';
//import nft2 from 'assets/img/nft2.png';
//import nft3 from 'assets/img/nft3.png';
//import nft4 from 'assets/img/nft4.png';
//import arrow from 'assets/img/arrow.png';
//import yellowTailMobile from 'assets/img/yellow-tail-mobile.png';
//import yellowTail1080 from 'assets/img/yellow-tail-1080.png';
//import yellowTail4k from 'assets/img/yellow-tail-4k.png';
//import sb1 from 'assets/img/sb1.png';
//import sb2 from 'assets/img/sb2.png';
//import sb3 from 'assets/img/sb3.png';
//import sb5 from 'assets/img/sb5.png'
//import sb6 from 'assets/img/sb6.png';
//import ct from 'assets/img/ct.png';
import grayTailMobile from 'assets/img/gray-tail-mobile.png';
import grayTail1080 from 'assets/img/gray-tail-1080.png';
import grayTail4k from 'assets/img/gray-tail-4k.png';
import airdrop from 'assets/img/airdrop.png';
import shop from 'assets/img/shop.png';
//import aboutUs from 'assets/images/buttons/AboutUs.png';
import CountUp from 'react-countup';
//import CountUp from 'react-countup';
//import { useInView } from 'react-intersection-observer';

import './styles.css';
import './aos.css';
import AOS from 'aos';
import CatContainer from './CatContainer';
import NFTSlider from './NFTSlider';
import GameSection from './game';
import ShopSection from './shop';
import aboutUs from 'assets/img/abus.png';
import Loader from './loader';
//import Loader from './loader';

function AppScreen() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const secondTimeout = setTimeout(() => {
            setLoading(false);
        }, 8500);

        return () => {
            clearTimeout(secondTimeout);
        };
    }, []);

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



    return (
        <div>
            {loading ?
                (
                    <Loader />
                ) : (
                    <>
                        <section id="main">

                            <img src={topline} alt="topline" className="topline" />

                            <header>
                                <div data-aos="fade-right">
                                    <a href="#nft"><img src={nft} alt="nft" className="hover" style={{
                                        scale: "0.68"
                                    }} /></a>
                                    <a href="#game">
                                        <img src={game} alt="game" className="hover" style={{
                                            transform: 'scale(0.85) translateX(-15px)',
                                        }} /></a>
                                </div>
                                <div data-aos="fade-left">
                                    <a href="#shop"><img src={shop} alt="shop" className="hover" style={{
                                        transform: 'scale(0.665) translateX(15px)',
                                    }} /></a>
                                    <a href="#airdrop"><img src={airdrop} alt="airdrop" className="hover" style={{
                                        scale: "0.85"
                                    }} /></a>
                                </div>
                            </header>

                            <CatContainer />

                            <div className="container">
                                <div className="left" data-aos="zoom-in" data-aos-offset="0">
                                    <div className="left-container stats-container" style={{ textAlign: 'center' }}>
                                        <p>
                                            TOTAL PLAYERS <br />+
                                            <span className="countup">
                                                <CountUp end={360000} duration={4} separator="'" />
                                            </span>
                                            <br /><br />
                                            MONTHLY USERS <br />+
                                            <span className="countup">
                                                <CountUp end={70000} duration={4} separator="'" />
                                            </span>
                                            <br /><br />
                                            DAILY USERS <br />+
                                            <span className="countup">
                                                <CountUp end={30000} duration={4} separator="'" />
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="right" data-aos="zoom-in" data-aos-offset="0">
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
                                    <img src={aboutUs} alt="abus" className="corner-image-left" />
                                </div>
                            </div>
                        </section>
                        {/* NFT Section */}
                        <NFTSlider />

                        {/* Game Section */}
                        <GameSection />

                        {/* Shop Section */}
                        <ShopSection />

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
                                    <div className="text">
                                        <p>And finally, we will do an airdrop of $MLK.<br />
                                            You can get it if you are an active player, or have purchased NFT, or use the services of our shop, renting out or renting cats.<br />
                                            <br />
                                            More activity - more reward<br />
                                            <br />
                                            Airdrop will happen at Q4 of 2024, stay tuned</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                )}
        </div>
    );

}

export default AppScreen;
