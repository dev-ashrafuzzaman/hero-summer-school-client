import { Helmet } from 'react-helmet-async';
import BannerSlider from '../BannerSlider/BannerSlider';
import PopularClasses from '../../PopularClasses/PopularClasses';
import PopulerInstructors from '../../PopulerInstructors/PopulerInstructors';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>HLA | Home</title>
            </Helmet>
            <BannerSlider></BannerSlider>
            <PopularClasses></PopularClasses>
            <PopulerInstructors></PopulerInstructors>
        </div>
    );
};

export default Home;