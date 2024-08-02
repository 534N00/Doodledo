import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import  { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import Button from '../../Elements/Button/Button';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './UserHome.css';

import img1 from '../../../assets/test1.png';
import img2 from '../../../assets/test2.png';
import img3 from '../../../assets/test3.png';
import img4 from '../../../assets/test4.png';

const UserHome = () => {

    useEffect(() => {
        // Fetch user's recent canvases
        console.log("userhome mounted");
    }, []);

    return (
        <div className="carousel-all">
            <div className="flex-bit">
                <div className="swiper-bit">
                    <h2>Pick up where you left off?</h2>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        initialSlide={1}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 300,
                            modifier: 2.5,
                        }}
                        pagination={{ el: '.swiper-pagination', clickable: true }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                            clickable: true,
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className="swiper-container"
                    >
                       
                    <SwiperSlide className="swiper-slide">
                        <Link className="not-canvas" to="/new">
                            <p>New Canvas</p>
                            <svg width="53" height="51" viewBox="0 0 53 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.5835 15.8693C25.5835 22.7476 26.5111 29.4557 26.5111 36.2781M14.1422 25.4552C20.3623 25.4552 26.3539 25.9858 32.5238 25.1632C34.1705 24.9436 35.9768 25.146 37.6432 25.146M37.0247 4.73728C41.1967 4.73728 42.3419 9.35862 45.1333 11.3684C45.9893 11.9847 46.1557 12.921 47.0573 13.4127C47.4344 13.6184 47.4094 13.9998 47.607 14.3232C47.8742 14.7604 48.4279 14.4226 48.7065 14.7011C49.0635 15.0581 49.616 16.0939 49.8575 16.6252C50.2356 17.4571 50.6306 18.1738 50.6306 19.1162C50.6306 20.6273 51.249 21.6828 51.249 23.1361C51.249 24.6963 50.399 25.9129 50.3213 27.3106C50.2626 28.3674 49.9445 30.3667 49.3937 31.2618C48.8102 32.2098 47.9803 33.9914 47.8304 35.0412C47.5778 36.8091 46.5588 38.3246 46.2842 40.109C46.2245 40.4975 45.3798 41.0417 45.1333 41.5349C44.9852 41.8309 44.1069 42.8644 43.8276 43.0123C42.5529 43.6871 41.4972 44.9288 40.0482 45.4861C39.104 45.8493 38.9393 46.7917 37.815 46.7917C37.0145 46.7917 35.7755 47.536 35.0319 47.874C32.2406 49.1428 29.6072 49.2655 26.5111 49.2655H20.2579C19.5424 49.2655 15.5825 48.4027 15.3963 47.5647C15.3253 47.2453 13.9778 46.3329 13.5924 45.9327C12.9518 45.2675 12.1506 44.7658 11.5138 44.1289C10.3637 42.9789 9.38968 41.7045 8.1295 40.6244C7.57632 40.1502 5.68902 37.9236 5.48392 37.2057C5.29327 36.5385 4.31186 35.9663 4.24703 35.3504C4.15041 34.4325 3.76462 33.88 3.14757 33.1858C2.30109 32.2336 2.48832 29.3691 2.08246 28.1008C1.45863 26.1514 1.77324 23.7962 1.77324 21.7618C1.77324 20.2715 1.54201 18.1962 2.5463 16.9688C3.55092 15.7409 4.52936 14.0954 5.31213 12.7771C6.04116 11.5492 8.13975 10.2032 9.1946 9.20384C9.67803 8.74586 10.4855 8.03774 11.0499 7.6749C11.5794 7.33454 12.5948 6.12913 13.0771 5.99135C13.8114 5.78156 14.5584 5.0641 15.2416 4.66856C15.5403 4.49567 15.5898 3.94248 15.8429 3.68935C16.0762 3.45609 16.4189 3.59212 16.616 3.34577C17.4789 2.26709 18.6861 2.26349 20.0174 2.26349H25.6522C27.2315 2.26349 28.5415 2.88194 30.0672 2.88194C31.033 2.88194 32.9642 2.89375 33.7779 3.34577C34.4194 3.70216 36.3217 4.11883 37.0247 4.11883" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                            </svg>
                        </Link>
                    </SwiperSlide>
                    
                    <SwiperSlide className="swiper-slide">
                        <Link to="/canvas1">
                            <img src={img1} alt="test1"/>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <Link to="/canvas2">
                            <img src={img2} alt="test2"/>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <Link to="canvas3">
                            <img src={img3} alt="test3"/>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <Link to="canvas4">
                            <img src={img4} alt="test4"/>
                        </Link>
                    </SwiperSlide>
                </Swiper>
                </div>
               <button onClick={null}>see all</button>
            </div>
        </div>
    );
};

export default UserHome;