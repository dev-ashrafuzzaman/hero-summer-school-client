import { Helmet } from 'react-helmet-async';
import BannerSlider from '../BannerSlider/BannerSlider';
import PopularClasses from '../../PopularClasses/PopularClasses';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>HLA | Home</title>
            </Helmet>
            <BannerSlider></BannerSlider>
            <PopularClasses></PopularClasses>
        </div>
    );
};

export default Home;