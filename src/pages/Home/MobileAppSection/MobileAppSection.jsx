import appdesign from '../../../assets/bg/com.worddive.mobile.png'

const MobileAppSection = () => {
    return (
        <div className='shadow-md shadow-slate-500 flex justify-evenly items-center md:mx-auto mx-2 max-w-screen-xl md:mb-44 mb-10 px-2 bg-black rounded-xl md:p-10'>
            <div className='text-white'>
                <p className='md:text-3xl font-bold mb-6'>Download our mobile app, <br /> start learning today</p>
                <div className='md:flex gap-4'>
                    <img className='w-32' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="" />
                    <img className='w-32' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Download_on_the_App_Store_Badge_NL_RGB_blk.svg/2560px-Download_on_the_App_Store_Badge_NL_RGB_blk.svg.png" alt="" />
                </div>
            </div>
            <div>
                <img className='rounded-xl' src={appdesign} alt="" />
            </div>
        </div>
    );
};

export default MobileAppSection;