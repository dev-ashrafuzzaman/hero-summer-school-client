
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../../components/SocialLogin/SectionTitle/SectionTitle';
import useClasses from '../../../../hooks/useClasses';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { MdOutlineGppBad, MdGppGood, MdOutlineFeedback } from 'react-icons/md';

const ManageClasses = () => {
    const [classes, refetch] = useClasses();
    const [classFeedback, setClassFeedback] = useState();
    const [selectedStatus, setSelectedStatus] = useState('all');


    const openModalFeedback = feedbackDetails => {
        setClassFeedback(feedbackDetails)
        window.my_modal_1.showModal()
    }

    const handleFeedback = (event) => {
        const feedback = event.target.writeFeedback.value;
        console.log(feedback);
        const updateFeedBack = {
            feedback: feedback
        }

        // mongodb send data
        fetch(`https://server.udvabonibd.com/classes/${classFeedback._id}`, {
            method: 'PATCH',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateFeedBack)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        title: 'Feedback Updated.',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })

                }
            })
    }
    const closeModal = () => {
        const modal = document.getElementById('my_modal_1');
        modal.close();
    };
    const submitStatusApproved = (statusDetails) => {
        const ClassStatusDetails = {
            status: "approved"
        }

        // mongodb send data
        fetch(`https://server.udvabonibd.com/classes/status/${statusDetails._id}`, {
            method: 'PATCH',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(ClassStatusDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        title: 'Status Updated.',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })

                }
            })
    }
    const submitStatusDeny = (statusDetails) => {
        const ClassStatusDetails = {
            status: "denied"
        }

        // mongodb send data
        fetch(`https://server.udvabonibd.com/classes/status/${statusDetails._id}`, {
            method: 'PATCH',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(ClassStatusDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        title: 'Status Updated.',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })

                }
            })
    }

    const filteredClasses = classes.filter(myClass => {
        if (selectedStatus === 'all') {
            return true; // Show all classes
        } else {
            return myClass.status === selectedStatus;
        }
    });

    filteredClasses.sort((a, b) => {
        // Sort by status: pending -> approved -> denied
        if (a.status === b.status) {
            return 0;
        } else if (a.status === 'pending') {
            return -1;
        } else if (b.status === 'pending') {
            return 1;
        } else if (a.status === 'approved' && b.status === 'denied') {
            return -1;
        } else {
            return 1;
        }
    });

    return (
        <div>

            <div className="w-full py-10 px-10">
                <Helmet>
                    <title>Dashboard |Manage Classes</title>
                </Helmet>
                <SectionTitle
                    heading={'Manage Classes'}
                ></SectionTitle>


                <div className='flex justify-end items-center pe-6 mb-4'>
                    <div className='text-center'>
                        Status
                        <select
                            className="ml-2 px-2 py-1 border-2  border-pink-500 rounded"
                            value={selectedStatus}
                            onChange={event => setSelectedStatus(event.target.value)}
                        >
                            <option value="all">All</option>
                            <option value="pending">Pending</option>
                            <option value="approved">Approved</option>
                            <option value="denied">Denied</option>
                        </select>
                    </div>
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
                                <th className='text-center'>Class Image</th>
                                <th className='text-center'>Class Name</th>
                                <th className='text-center'>Instructor Name</th>
                                <th className='text-center'>Instructor email</th>
                                <th>Available Seats</th>
                                <th className='text-center'>Status</th>
                                <th className='text-center'>Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filteredClasses.map((myClass, index) => <tr className="hover:bg-[#ec508113]"
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
                                        <div className="font-bold ">{myClass.instructorName}</div>
                                    </td>
                                    <td>
                                        <div className="font-bold ">{myClass.email}</div>
                                    </td>
                                    <td >
                                        <p className='font-bold text-end'>{myClass.availableSeats}</p>
                                    </td>
                                    <td >
                                        <p className={`px-2 text-center rounded-full w-[80px] font-bold ${myClass.status === 'denied' ? 'bg-red-100 text-red-700' : myClass.status === 'approved' ? "bg-green-100 text-green-700" : 'bg-yellow-100 text-yellow-700'}`}>{myClass.status}</p>
                                    </td>
                                    <td >
                                        <p className='bg-[#EC5082] text-white px-2 rounded-full w-[80px] font-bold text-end'>$ {myClass.price}</p>
                                    </td>
                                    <td>
                                        <button disabled={myClass.status === 'approved' ? true : myClass.status === 'denied' ? true : false} onClick={() => submitStatusApproved(myClass)} className="btn btn-xs btn-success hover:bg-green-800 text-white  me-4"><MdGppGood></MdGppGood> Approve</button>
                                        <button disabled={myClass.status === 'approved' ? true : myClass.status === 'denied' ? true : false} onClick={() => submitStatusDeny(myClass)} className="btn btn-xs btn-error hover:bg-red-800 text-white me-4"><MdOutlineGppBad></MdOutlineGppBad>Deny</button>
                                        <button onClick={() => openModalFeedback(myClass)} className="btn btn-xs btn-accent hover:bg-teal-800 text-white me-4"><MdOutlineFeedback></MdOutlineFeedback>send feedback</button>
                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
            <dialog id="my_modal_1" className="modal">
                <form method="dialog" onSubmit={handleFeedback} className="modal-box">
                    <h3 className="font-bold text-lg">Feedback for this class: <span className='text-teal-600'>{classFeedback?.name}</span></h3>
                    <p className="py-4">Kindly provide your valuable feedback:</p>
                    <textarea required placeholder="Write Feedback" name='writeFeedback' className="textarea textarea-bordered textarea-accent textarea-lg w-full" ></textarea>
                    <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <button type='submit' className="btn bg-teal-500 text-white">Feebback submit</button>
                        <div className="tooltip" data-tip="or Press ESC">
                            <button className="btn" onClick={closeModal}>Close</button>
                        </div>
                    </div>
                </form>
            </dialog>
        </div>
    );
};

export default ManageClasses;