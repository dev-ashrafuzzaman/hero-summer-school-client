import { Autoplay, EffectCoverflow, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import './BannerSlider.css'
import { Link } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";

const slider = [
    {
        id: 1,
        title: "Spoken Hindi",
        description: "Master spoken English with our comprehensive course, boosting your fluency, vocabulary, and communication skills.",
        url: "https://i.ibb.co/w4g5s5k/Japanese-Horizantal.png"
    },
    {
        id: 2,
        title: "Spoken Arabic",
        description: "Master spoken English with our comprehensive course, boosting your fluency, vocabulary, and communication skills.",
        url: "https://i.ibb.co/w4g5s5k/Japanese-Horizantal.png"
    },
    {
        id: 3,
        title: "Spoken Chinese",
        description: "Master spoken English with our comprehensive course, boosting your fluency, vocabulary, and communication skills.",
        url: "https://i.ibb.co/w4g5s5k/Japanese-Horizantal.png"
    },

    {
        id: 4,
        title: "Spoken Japanese",
        description: "Master spoken English with our comprehensive course, boosting your fluency, vocabulary, and communication skills.",
        url: "https://i.ibb.co/w4g5s5k/Japanese-Horizantal.png"
    },
    {
        id: 5,
        title: "Spoken English",
        description: "Master spoken English with our comprehensive course, boosting your fluency, vocabulary, and communication skills.",
        url: "https://i.ibb.co/w4g5s5k/Japanese-Horizantal.png"
    },
    {
        id: 6,
        title: "Spoken English",
        description: "Master spoken English with our comprehensive course, boosting your fluency, vocabulary, and communication skills.",
        url: "https://i.ibb.co/w4g5s5k/Japanese-Horizantal.png"
    },
]
const BannerSlider = () => {
    return (
        <div className='featured-item bg-fixed pb-20'>
            <div className='xl:h-[100vh] xl:px-0 px-4 max-w-screen-xl mx-auto lg:flex lg:justify-center lg:items-center   lg:space-x-4 '>
                <div className='lg:w-[100%] 2xl:w-[70%]  md:w-[50%] md:mb-0 mb-10 pt-20 lg:pt-28'>
                    <div className='carousel-content'>
                        <span className='uppercase font-xl font-bold text-white tracking-wide'>Hero Language Academy</span>
                        <h1 className='text-white capitalize tracking-wide lg:text-4xl 2xl:text-5xl text-3xl font-bold  '><Fade  cascade damping={0.2}>ヒーロー日本語学院</Fade></h1>
                        <hr />
                        <p className='text-white'><Fade>Hero Language Academy is your best option for studying Japanese. Our language and culture courses adapt to your specific goals for a completely personalized learning experience.</Fade></p>
                        <button href="#" className='btn uppercase border-2 border-solid bg-white  rounded-full mt-16   w-[130px] transition  ease-in-out duration-800 hover:border-[#EC5082] hover:text-[#EC5082] hover:bg-white hover:shadow hover:shadow-[#EC5082]'>Enroll Now</button>
                    </div>
                </div>

                <Swiper
                    className='myswiper'
                    modules={[Pagination, EffectCoverflow, Autoplay]}
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 3,
                        slideShadows: true
                    }}
                    loop={true}
                    pagination={{ clickable: true }}

                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2
                        },
                        768: {
                            slidesPerView: 1
                        },
                        1024: {
                            slidesPerView: 2
                        },
                        1560: {
                            slidesPerView: 3
                        },
                    }}

                >
                    {
                        slider.map(data => (
                            <SwiperSlide key={data.id} style={{ backgroundImage: `url(${data.url})` }} className="w-72 myswiper-slider">
                                <div className='pe-[30px] 2xl:pe-0 '>
                                    <Link to={`/dashbord/${data.id}`}><button className='text-[#5D5E5E]  uppercase border-2 border-solid border-[#5D5E5E] rounded-full mt-16 btn bg-white w-[130px] transition  ease-in-out duration-800 hover:border-[#EC5082] hover:text-[#EC5082] hover:bg-white hover:shadow hover:shadow-[#EC5082]'>explore</button></Link>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default BannerSlider;