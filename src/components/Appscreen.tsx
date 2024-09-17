import { useEffect } from 'react';
//import { motion, AnimatePresence } from 'framer-motion';
//import CatContainer from './CatContainer';
import background from 'assets/images/topline.png';
//import mainBack from 'assets/images/mainBackground.svg';
import milkAirDrop from 'assets/images/buttons/MilkAirDrop.png';
import nft from 'assets/images/buttons/Nft.png';
import shop from 'assets/images/buttons/Shop.png';
//import aboutUs from 'assets/images/buttons/AboutUs.png';
import game from 'assets/images/buttons/Game.png';
//import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import leftColumn from 'assets/images/buttons/left.png';
import rightColumn from 'assets/images/buttons/right.png';
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

    const { ref: leftContainerRef, inView: isLeftInView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    useEffect(() => {
        if (isLeftInView) {
            // setRandomValue1(Math.floor(Math.random() * (150000 - 100000 + 1)) + 100000);
            // setRandomValue2(Math.floor(Math.random() * (150000 - 100000 + 1)) + 100000);
            // setRandomValue3(Math.floor(Math.random() * (150000 - 100000 + 1)) + 100000);
            // setRandomValue4(Math.floor(Math.random() * (150000 - 100000 + 1)) + 100000);
        }
    }, [isLeftInView]);



    return (
        <section id="main">
            <img src={background} alt="topline" className="topline" />

            <header>
                <div data-aos="fade-right">
                    <a href="#" target="_blank"><img src={nft} alt="nft" className="hover" /></a>
                    <a href="#" target="_blank"><img src={game} alt="game" className="hover" /></a>
                </div>
                <div data-aos="fade-left">
                    <a href="#" target="_blank"><img src={milkAirDrop} alt="airdrop" className="hover" /></a>
                    <a href="#" target="_blank"><img src={shop} alt="shop" className="hover" /></a>
                </div>
            </header>

            <div className="container">
                {/* Левый блок */}
                <div
                    className="left"
                    data-aos="zoom-in"
                    data-aos-offset="0"
                >
                    <img src={leftColumn} alt="left-block" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis veniam ut quis numquam commodi reiciendis quod voluptates velit cum. Facere!
                    </p>
                </div>

                {/* Правый блок */}
                <div
                    ref={leftContainerRef}
                    className="right"
                    data-aos="zoom-in"
                    data-aos-offset="0"
                >
                    <img src={rightColumn} alt="right-block" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, numquam harum dicta dignissimos dolorum laudantium doloribus esse. Delectus, iusto neque.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AppScreen;
