
import useMyClassas from '../../../../hooks/useMyClasses';
import {FaUpload } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../../components/SocialLogin/SectionTitle/SectionTitle';

const MyClasses = () => {
    const [myClasses] = useMyClassas();
    return (
        <div className="w-full px-20 mt-10 h-full">
             <div>
            <Helmet>
                <title>Dashboard | My Classes</title>
            </Helmet>
            <SectionTitle
                heading={'My Classes'}
            ></SectionTitle>
          
            <div className="overflow-x-auto rounded-s-2xl rounded-e-2xl">
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#EC5082] text-white uppercase font-bold  ">
                        <tr>
                            <th>
                                <label>
                                    #
                                </label>
                            </th>
                            <th className='text-center'>Class Image</th>
                            <th className='text-center'>Class Name</th>
                            <th>Available Seats</th>
                            <th>Total Enrolled</th>
                            <th className='text-center'>Status</th>
                            <th className='text-center'>Price</th>
                            <th className='text-center'>Feedback</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myClasses.map((myClass, index) => <tr className="hover:bg-[#ec508113]"
                                key={myClass._id}
                            >
                                <th>
                                    <label>
                                        {index + 1}
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={myClass.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    <div className="font-bold ">{myClass.name}</div>
                                </td>
                                <td >
                                    <p className='font-bold text-end'>{myClass.availableSeats}</p>
                                </td>
                                <td >
                                    <p className=' font-bold text-end'>{myClass.totalEnroll}</p>
                                </td>
                                <td >
                                    <p className={`px-2 text-center rounded-full w-[80px] font-bold ${myClass.status === 'denied' ? 'bg-red-100 text-red-700' : myClass.status === 'approved' ? "bg-green-100 text-green-700" : 'bg-yellow-100 text-yellow-700'}`}>{myClass.status}</p>
                                </td>
                                <td >
                                    <p className='bg-[#EC5082] text-white px-2 rounded-full w-[80px] font-bold text-end'>$ {myClass.price}</p>
                                </td>
                                <td >
                                   
                                 <textarea placeholder="Feedback" defaultValue={myClass.feedback} readOnly className="textarea textarea-bordered textarea-xs w-full max-w-xs" ></textarea>
                                   
                                </td>
                                <th>

                                   <Link to={`/dashboard/instructor/update-classes/${myClass._id}`}> <button className="btn bg-green-500 text-white me-4"><FaUpload></FaUpload></button></Link>
                                </th>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
};

export default MyClasses;