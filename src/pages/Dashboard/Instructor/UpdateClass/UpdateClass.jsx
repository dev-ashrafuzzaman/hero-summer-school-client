import Swal from 'sweetalert2';
import SectionTitle from '../../../../components/SocialLogin/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const imageUploadToken = import.meta.env.VITE_Image_Upload_Token;

const UpdateClass = () => {
    const navigate = useNavigate();
    const { register, handleSubmit,formState: { errors } } = useForm();
    const classDetails = useLoaderData();
    const Image_host_url = `https://api.imgbb.com/1/upload?key=${imageUploadToken}`

    const onSubmit = data => {
        const formData = new FormData();
        if (data.image && data.image[0]) {
            formData.append('image', data.image[0]);
        }
    
        fetch(Image_host_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, price, availableSeats, instructorName, email } = data;
                    const updateClassDetails = {
                        name,
                        price: parseFloat(price),
                        availableSeats: parseFloat(availableSeats),
                        instructorName,
                        email,
                        status: 'pending',
                        totalEnroll: parseFloat(0),
                        
                    }
    
                    if (imgURL) {
                        updateClassDetails.image = imgURL;
                    }
    
                    // mongodb send data
                    fetch(`https://server.udvabonibd.com/myClasses/${classDetails._id}`, {
                        method: 'PATCH',
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(updateClassDetails)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.modifiedCount > 0) {
                                Swal.fire({
                                    title: 'Class successfully updated.',
                                    text: 'Do you want to continue',
                                    icon: 'success',
                                    confirmButtonText: 'Cool'
                                })
                                navigate('/dashboard/instructor/my-classes');
                            }
                        })
                } else {
                    const { name, price, availableSeats, instructorName, email } = data;
                    const updateClassDetails = {
                        name,
                        price: parseFloat(price),
                        availableSeats: parseFloat(availableSeats),
                        instructorName,
                        email,
                        image: classDetails.image,
                        status: 'pending',
                        totalEnroll: parseFloat(0),
                        
                    }
    
                    // mongodb send data
                    fetch(`https://server.udvabonibd.com/myClasses/${classDetails._id}`, {
                        method: 'PATCH',
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(updateClassDetails)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.modifiedCount > 0) {
                                Swal.fire({
                                    title: 'Class successfully updated.',
                                    text: 'Do you want to continue',
                                    icon: 'success',
                                    confirmButtonText: 'Cool'
                                })
                                navigate('/dashboard/instructor/my-classes');
                            }
                        })
                }
            })
    };

    return (
        <div className="w-full mb-20 px-20">
             <Helmet>
                <title>Dashboard | Update Class</title>
            </Helmet>
            <SectionTitle heading={"Update a Class"}></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} className="ml-20 bg-[#f3f3f3] p-10" >
                <div className="form-control w-full md:max-w-screen-2xl max-w-xs">
                    <label className="label">
                        <span className="label-text">Class Name*</span>
                    </label>
                    <input type="text" defaultValue={classDetails.name} placeholder="Class Name Type here"  {...register("name", { required: true, maxLength: 18 })} className="input input-bordered w-full md:max-w-screen-2xl max-w-xs" />
                </div>
                {errors.name?.type === 'maxLength' && <span className=" text-red-600">Class Name is too long max 18 characters</span>}
                <div className="flex gap-6">

                    <div className="form-control w-full max-w-xs md:max-w-screen-2xl">
                        <label className="label">
                            <span className="label-text">Available seats*</span>
                        </label>
                        <input type="number" defaultValue={classDetails.availableSeats} placeholder="Type here Available seats" {...register("availableSeats", { required: true })} className="input input-bordered w-full md:max-w-screen-2xl max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs md:max-w-screen-2xl">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input type="number" defaultValue={classDetails.price} placeholder="Type here Price" {...register("price", { required: true })} className="input input-bordered w-full md:max-w-screen-2xl max-w-xs" />
                    </div>
                </div>

                <div className="flex gap-6">
                    <div className="form-control w-full max-w-xs md:max-w-screen-2xl">
                        <label className="label">
                            <span className="label-text">Instructor name*</span>
                        </label>
                        <input type="text" readOnly defaultValue={classDetails.instructorName} placeholder="Type here Instructor name" {...register("instructorName", { required: true })} className="input input-bordered w-full md:max-w-screen-2xl max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs md:max-w-screen-2xl">
                        <label className="label">
                            <span className="label-text">Instructor email*</span>
                        </label>
                        <input type="email" readOnly defaultValue={classDetails.email} placeholder="Type here Instructor email" {...register("email", { required: true })} className="input input-bordered w-full md:max-w-screen-2xl max-w-xs" />
                    </div>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Class Cover Image*</span>

                    </label>
                    <input type="file" {...register("image")} className="file-input file-input-bordered w-full max-w-xs" />
                    <img src={classDetails.image} className='rounded-lg mt-2' alt="" />
                </div>
                <button type="submit" className=" flex items-center justify-center gap-2 py-2 rounded bg-[#EC5082] hover:bg-[#a9365b] font-semibold w-[120px] text-white mt-6">
                    Update Class

                </button>
            </form>
        </div>
    );
};

export default UpdateClass;