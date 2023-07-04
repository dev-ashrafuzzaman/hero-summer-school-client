import ReactPlayer from 'react-player'
import SectionTitle from '../../../../components/SocialLogin/SectionTitle/SectionTitle';

const MyEnrolledClassPlayer = () => {
    return (
        <div className='mx-auto w-full'>
            <SectionTitle
                heading={"Class "}
            ></SectionTitle>
            <div className='flex justify-center'>
                <ReactPlayer
                    url='https://youtu.be/Rim14e5_Hwc'
                />
            </div>
        </div>
    );
};

export default MyEnrolledClassPlayer;