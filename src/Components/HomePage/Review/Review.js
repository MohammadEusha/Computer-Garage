import React, { useEffect, useState } from 'react';
import ReviewInfo from '../ReviewInfo/ReviewInfo';
// import SwiperCore, { Autoplay, Pagination } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';
import ReactCarousel, { AFTER, CENTER, BEFORE } from "react-carousel-animated";
import "react-carousel-animated/dist/style.css";

const Review = () => {
    // SwiperCore.use([Pagination, Autoplay]);

    const [reviews, setReviews] = useState([])
    useEffect(() => {

        fetch('https://young-beach-67366.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])
    return (
        <div id="reviews" className="py-5 ">
            <div className="container">
                <div className="text-center">
                    <h1 style={{ fontSize: "65px" }} className="text-center py-5">Our Customers Reviews </h1>
                </div>
                <div>
                    {/* <Swiper
                        loop={true}
                        pagination={{ clickable: true }}
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 2,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                        }}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        spaceBetween={10}
                    >

                        {
                            reviews.map(review => {
                                return (
                                    <SwiperSlide >
                                        
                                    </SwiperSlide>
                                )
                            })
                        }

                    </Swiper> */}
                    <ReactCarousel
                        carouselConfig={{
                            transform: {
                                rotateY: {
                                    [BEFORE]: () => "rotateY(25deg)",
                                    [CENTER]: () => "rotateY(0deg)",
                                    [AFTER]: () => "rotateY(-25deg)",
                                },
                            },
                        }}

                        containerBackgroundStyle={{
                            filter: "blur(7px)",

                        }}
                        carouselHeight="500px"
                    >
                        {
                            reviews.map(review => <ReviewInfo review={review}  ></ReviewInfo>)
                        }
                    </ReactCarousel>
                </div>
            </div>
        </div>
    );
};

export default Review;