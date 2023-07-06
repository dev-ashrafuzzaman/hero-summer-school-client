import { Helmet } from 'react-helmet-async';
import BannerSlider from '../BannerSlider/BannerSlider';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopulerInstructors from '../PopulerInstructors/PopulerInstructors';
import BgVideo from '../BgVideoSection/BgVideo';
import CallSection from '../CallSection/CallSection';
import CountStudentSection from '../CountStudentSection/CountStudentSection';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>HLA | Home</title>
            </Helmet>
            <BannerSlider></BannerSlider>
            <PopularClasses></PopularClasses>
            <BgVideo></BgVideo>
            <CallSection></CallSection>
            <PopulerInstructors></PopulerInstructors>
            <CountStudentSection></CountStudentSection>

        </div>
    );
};

export default Home;