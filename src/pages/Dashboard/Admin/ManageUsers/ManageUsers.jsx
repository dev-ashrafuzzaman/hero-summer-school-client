import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../components/SocialLogin/SectionTitle/SectionTitle";
import { GiTeacher } from "react-icons/gi";
import { GrUserAdmin } from "react-icons/gr";
import Swal from "sweetalert2";

const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleMakeInstructor = userDetails =>{
        const updateUserRole = {
            role: "instructor"
        }

        // mongodb send data
        fetch(`http://localhost:5000/users/admin/${userDetails._id}`, {
            method: 'PATCH',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateUserRole)
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        title: 'Role Updated.',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                    
                }
            })
    }
    const handleMakeAdmin = userDetails =>{
        const updateUserRole = {
            role: "admin"
        }

        // mongodb send data
        fetch(`http://localhost:5000/users/admin/${userDetails._id}`, {
            method: 'PATCH',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateUserRole)
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        title: 'Role Updated.',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                    
                }
            })
    }

    return (
        <div>
        <div className="w-full py-10 px-10">
       <Helmet>
           <title>Dashboard |Manage Users</title>
       </Helmet>
       <SectionTitle
           heading={'Manage Users'}
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
                       <th className='text-center'>User Profile</th>
                       <th className='text-center'>User Name</th>
                       <th className='text-center'>User email</th>
                       <th className='text-center'>Role</th>
                       <th></th>
                   </tr>
               </thead>
               <tbody>
                   {
                       users.map((user, index) => <tr className="hover:bg-[#ec508113]"
                           key={user._id}
                       >
                           <th>
                               <label>
                                   {index + 1}
                               </label>
                           </th>
                           <td>
                               <div className="flex items-center">
                                   <div className="avatar">
                                       <div className="rounded-full w-12 h-12">
                                           <img src={user.image} alt="Avatar Tailwind CSS Component" />
                                       </div>
                                   </div>

                               </div>
                           </td>
                           <td>
                               <div className="font-bold ">{user.name}</div>
                           </td>
                           <td>
                               <div className="font-bold ">{user.email}</div>
                           </td>
                           <td >
                               <p className={`px-2 text-center rounded-full w-[80px] font-bold ${user.role === 'admin' ? 'bg-green-100 text-green-700' : user.role === 'student' ? "bg-[#fdecf1] text-[#EC5082]" : 'bg-fuchsia-100 text-fuchsia-700'}`}>{user.role}</p>
                           </td>
                           <td>
                           <button onClick={() => handleMakeInstructor(user)} disabled={user.role === 'admin'? true : user.role === 'instructor' ? true : false} className="btn bg-fuchsia-700 text-white me-4"><GiTeacher></GiTeacher>Make Instructor</button>
                           <button onClick={() => handleMakeAdmin(user)} disabled={user.role === 'admin'? true : user.role === 'instructor' ? false : false} className="btn bg-green-700 text-white me-4"><GrUserAdmin className="text-white"></GrUserAdmin>Make Admin</button>
                           </td>
                       </tr>)
                   }


               </tbody>
           </table>
       </div>
   </div>
   </div>
    );
};

export default ManageUsers;