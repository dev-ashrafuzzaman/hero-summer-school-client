import { Helmet } from 'react-helmet-async';
import BannerSlider from '../BannerSlider/BannerSlider';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopulerInstructors from '../PopulerInstructors/PopulerInstructors';
import BgVideo from '../BgVideoSection/BgVideo';
import CallSection from '../CallSection/CallSection';
import CountStudentSection from '../CountStudentSection/CountStudentSection';
import MobileAppSection from '../MobileAppSection/MobileAppSection';
import Corporate from '../Corporate/Corporate';
import SkillsSlide from '../SkillsSlide/SkillsSlide';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>HLA | Home</title>
            </Helmet>
            <BannerSlider></BannerSlider>
            <SkillsSlide></SkillsSlide>
            <PopularClasses></PopularClasses>
            <BgVideo></BgVideo>
            <CallSection></CallSection>
            <PopulerInstructors></PopulerInstructors>
            <CountStudentSection></CountStudentSection>
            <MobileAppSection></MobileAppSection>
            <Corporate></Corporate>

        </div>
    );
};

export default Home;