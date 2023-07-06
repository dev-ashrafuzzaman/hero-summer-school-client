

import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../components/SocialLogin/SectionTitle/SectionTitle";
import useClasses from "../../../../hooks/useClasses";
import useEnrolled from "../../../../hooks/useEnrolled";
import MyEnrolledClassCard from "./MyEnrolledClassCard";


const MyEnrolledClasses = () => {
    const [enrolled] = useEnrolled();
    const [classes] = useClasses();

    const enrolledClassIds = new Set(
        enrolled.flatMap((enrollment) => enrollment.classes)
    );

    const filteredClasses = classes.filter((myClass) =>
        enrolledClassIds.has(myClass._id)
    );


    return (
        <div className="w-full px-10 mb-20">
            <SectionTitle
                heading={"My Enrolled Classes"}
            ></SectionTitle>
            <Helmet heading={"HLA | Enrolled Classes"}></Helmet>
            <div className="grid grid-cols-3 gap-10">
                {
                    filteredClasses.map(enrolledClasses => <MyEnrolledClassCard
                        key={enrolledClasses._id}
                        enrolledClasses={enrolledClasses}
                    ></MyEnrolledClassCard>)
                }
            </div>
        </div>
    );
};

export default MyEnrolledClasses;