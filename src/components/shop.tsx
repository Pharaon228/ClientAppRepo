import React, { useEffect, useState } from 'react';
import yellowTailMobile from 'assets/img/yellow-tail-mobile.png';
import yellowTail1080 from 'assets/img/yellow-tail-1080.png';
import yellowTail4k from 'assets/img/yellow-tail-4k.png';
import question from 'assets/img/question.png';
import shop from 'assets/img/shop.png';
import sb5 from 'assets/img/sb5.png';
import sb6 from 'assets/img/sb6.png';
import { Fancybox } from '@fancyapps/ui';
const ShopSection: React.FC = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [activeInfoBlock, setActiveInfoBlock] = useState<null | number>(null);

    useEffect(() => {


        Fancybox.bind("[data-fancybox]", {});

    }, []);


    const handleQuestionClick = () => {
        setActiveInfoBlock(3);
    };

    const handleCloseInfoBlock = () => {
        setActiveInfoBlock(null);
    };

    return (
        <section id="shop">
            <img src={yellowTailMobile} alt="tail" className="tail mobile" />
            <img src={yellowTail1080} alt="tail" className="tail" />
            <img src={yellowTail4k} alt="tail" className="tail wide" />
            <img
                src={question}
                alt="question"
                className="question"
                data-aos="zoom-in"
                data-aos-offset="0"
                data-question="3"
                onClick={handleQuestionClick}
            />

            <div className={`infoblock ${activeInfoBlock === 3 ? 'active' : ''}`} data-infoblock="3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum architecto quisquam odio fugiat sapiente, voluptatem eum laborum expedita iusto. Similique nobis quod nesciunt minima eos voluptate perspiciatis rerum sunt numquam, neque accusantium odit, rem labore ab corporis molestiae officiis veniam dolorem distinctio ipsum, animi natus at excepturi repudiandae. Ex, quam!
                <div className="close" onClick={handleCloseInfoBlock}>
                    &times;
                </div>
            </div>

            <div className="flex">
                <div data-aos="fade-right">
                    <img src={shop} alt="shop" className="shop" />
                </div>
                <div data-aos="zoom-out" data-aos-offset="0">
                    <div className="screens-2">
                        <img src={sb5} alt="screen" data-aos-delay="400" data-fancybox="gallery3" />
                        <img src={sb6} alt="screen" data-aos-delay="400" data-fancybox="gallery3" />
                    </div>
                    <div className="screens-2-slider swiper-container">
                        <div
                            className="swiper-wrapper"
                            style={{
                                transform: activeSlide === 1 ? 'translate3d(-174px, 0px, 0px)' : 'translate3d(0px, 0px, 0px)',
                                transitionDuration: '0ms',
                                transitionDelay: '0ms',
                            }}
                        >
                            <div className={`swiper-slide ${activeSlide === 0 ? 'swiper-slide-active' : 'swiper-slide-prev'}`}>
                                <img src={sb5} alt="screen" data-aos-delay="400" data-fancybox="gallery4" />
                            </div>
                            <div className={`swiper-slide ${activeSlide === 1 ? 'swiper-slide-active' : 'swiper-slide-next'}`}>
                                <img src={sb6} alt="screen" data-aos-delay="400" data-fancybox="gallery4" />
                            </div>
                        </div>
                        <div className="swiper-pagination screens-2-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                            {[sb5, sb6].map((_, index) => (
                                <span
                                    key={index}
                                    className={`swiper-pagination-bullet ${activeSlide === index ? 'swiper-pagination-bullet-active' : ''}`}
                                    tabIndex={0}
                                    role="button"
                                    aria-label={`Go to slide ${index + 1}`}
                                    aria-current={activeSlide === index ? 'true' : 'false'}
                                    onClick={() => setActiveSlide(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopSection;
