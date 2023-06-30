import { FaRegTrashAlt } from 'react-icons/fa';
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useSelected from '../../../../hooks/useSelected';
import SectionTitle from '../../../../components/SocialLogin/SectionTitle/SectionTitle';

const MySelected = () => {
    const [selected, refetch] = useSelected();
    const totalPrice = selected.reduce((sum, classes) => classes.price + sum, 0);


    const handleCartDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/selected/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Selected class has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }


    return (
        <div className="w-full py-10 px-10">
            <Helmet>
                <title>Dashboard | My Selected</title>
            </Helmet>
            <SectionTitle
                heading={'My Selected Classes'}
            ></SectionTitle>
            <div className="flex justify-evenly uppercase mb-10 font-bold items-center">
                <h3>Total Items: {selected?.length}</h3>
                <h3>Total Price: ${totalPrice}</h3>
                <Link to='/dashboard/payment'><button className="btn btn-sm bg-[#EC5082] text-white ">Pay Now</button></Link>
            </div>
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
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selected.map((myClass, index) => <tr className="hover:bg-[#ec508113]"
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
                                <td>
                                    <div className="font-bold ">{myClass.instructor}</div>
                                </td>
                                <td className="">
                                    <p className='bg-[#EC5082] text-white px-2 rounded-full w-[80px] font-bold text-end'>$ {myClass.price}</p>
                                </td>
                                <th className="">
                                    <button onClick={() => handleCartDelete(myClass)} className="btn bg-red-500 text-white"><FaRegTrashAlt></FaRegTrashAlt></button>
                                </th>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelected;