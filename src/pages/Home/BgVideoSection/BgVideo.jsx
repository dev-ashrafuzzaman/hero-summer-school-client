import { Fade, Slide } from 'react-awesome-reveal';
import bgVideo from '../../../assets/bg/bgVideo.mp4';
import { FaArrowRight } from 'react-icons/fa';

const BgVideo = () => {
    return (
        <div>
            <div className='md:h-[600px] relative  w-full overflow-hidden'>
                <video className='w-full bg-cover' src={bgVideo} autoPlay loop muted></video>
             <div className=' absolute top-0 bg-[#00000060] w-full'>
             <div className=" max-w-screen-xl mx-auto text-white  w-full flex flex-col justify-start  items-center">
                    <div className='xl:pt-48   pe-4 pt-4 ps-4 md:space-y-10 space-y-3 w-full  md:h-[600px] h-[210px] '>
                        <h3 className=' md:text-7xl text-2xl font-bold' ><Fade  cascade damping={0.2}>LEARN JAPANESE TODAY</Fade></h3>
                        <p className='md:text-2xl md:w-1/2 text-justify'><Slide>Hero Language Academy is your best option for
                            studying Japanese.</Slide></p>
                        <button className='btn custom-button1'>Join Today <FaArrowRight></FaArrowRight> </button>
                    </div>
                </div>
             </div>
            </div>
        </div>
    );
};

export default BgVideo;