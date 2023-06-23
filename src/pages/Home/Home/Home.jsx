import { Helmet } from 'react-helmet-async';
import BannerSlider from '../BannerSlider/BannerSlider';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>HLA | Home</title>
            </Helmet>
            <BannerSlider></BannerSlider>
            <h2>Home</h2>
        </div>
    );
};

export default Home;