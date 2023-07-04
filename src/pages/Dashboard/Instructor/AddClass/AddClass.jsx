import Swal from 'sweetalert2';
import SectionTitle from '../../../../components/SocialLogin/SectionTitle/SectionTitle';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const imageUploadToken = import.meta.env.VITE_Image_Upload_Token;

const AddClass = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const Image_host_url = `https://api.imgbb.com/1/upload?key=${imageUploadToken}`


    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(Image_host_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, price, availableSeats, instructorName, email } = data;
                    const newAddClass = {
                        name,
                        price: parseFloat(price),
                        availableSeats: parseFloat(availableSeats),
                        instructorName,
                        image: imgURL,
                        email,
                        status: 'pending',
                        totalEnroll: parseFloat(0),
                        feedback: ""
                    }

                    // mongodb send data
                    axiosSecure.post('/classes', newAddClass)
                        .then(data => {
                            if (data.data.insertedId) {
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Class added successfull',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                                reset();
                                navigate('/dashboard/instructor/my-classes');
                            }
                        })
                }
            })
    };

    return (
        <div className="w-full mb-20 px-20">
             <Helmet>
                <title>Dashboard | Add Class</title>
            </Helmet>
            <SectionTitle heading={"Add a Class"}></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} className="ml-20 bg-[#f3f3f3] p-10" >
                <div className="form-control w-full md:max-w-screen-2xl max-w-xs">
                    <label className="label">
                        <span className="label-text">Class Name*</span>
                    </label>
                    <input type="text" placeholder="Class Name Type here"  {...register("name", { required: true, maxLength: 18 })} className="input input-bordered w-full md:max-w-screen-2xl max-w-xs" />
                </div>
                {errors.name?.type === 'maxLength' && <span className=" text-red-600">Class Name is too long max 18 characters</span>}
                <div className="flex gap-6">

                    <div className="form-control w-full max-w-xs md:max-w-screen-2xl">
                        <label className="label">
                            <span className="label-text">Available seats*</span>
                        </label>
                        <input type="number" placeholder="Type here Available seats" {...register("availableSeats", { required: true })} className="input input-bordered w-full md:max-w-screen-2xl max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs md:max-w-screen-2xl">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input type="number" placeholder="Type here Price" {...register("price", { required: true })} className="input input-bordered w-full md:max-w-screen-2xl max-w-xs" />
                    </div>
                </div>

                <div className="flex gap-6">
                    <div className="form-control w-full max-w-xs md:max-w-screen-2xl">
                        <label className="label">
                            <span className="label-text">Instructor name*</span>
                        </label>
                        <input type="text" readOnly defaultValue={user?.displayName} placeholder="Type here Instructor name" {...register("instructorName", { required: true })} className="input input-bordered w-full md:max-w-screen-2xl max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs md:max-w-screen-2xl">
                        <label className="label">
                            <span className="label-text">Instructor email*</span>
                        </label>
                        <input type="email" readOnly defaultValue={user?.email} placeholder="Type here Instructor email" {...register("email", { required: true })} className="input input-bordered w-full md:max-w-screen-2xl max-w-xs" />
                    </div>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Class Cover Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
                </div>
                <button type="submit" className=" flex items-center justify-center gap-2 py-2 rounded bg-[#EC5082] hover:bg-[#a9365b] font-semibold w-[120px] text-white mt-6">
                    Add Class

                </button>
            </form>
        </div>
    );
};

export default AddClass;