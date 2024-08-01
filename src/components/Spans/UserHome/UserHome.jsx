import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import  { useEffect } from 'react';
import Button from '../../Elements/Button/Button';
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
            <h2>Pick up where you left off?</h2>
            <div className="flex-bit">
                <div className="new-canvas">
                    <p>New Canvas</p>
                    {/* Some SVG Add button */}
                </div>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 350,
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
                        <img src={img1} alt="test1"/>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src={img2} alt="test2"/>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src={img3} alt="test3"/>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src={img4} alt="test4"/>
                    </SwiperSlide>
               </Swiper>
               <Button text="SEE ALL" onClick={null} />
            </div>
        </div>
    );
};

export default UserHome;