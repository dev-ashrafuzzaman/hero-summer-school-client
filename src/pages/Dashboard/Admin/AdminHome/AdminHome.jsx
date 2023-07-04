
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import useClasses from '../../../../hooks/useClasses';
import { Helmet } from 'react-helmet-async';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const AdminHome = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [classes] = useClasses();


    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure('/admin-stats')
            return res.data;
        }
    });

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    const sortedClasses = stats.populerClasses?.sort((a, b) => b.totalEnroll - a.totalEnroll);

    return (
        <div className='w-full px-20 mt-10'>
            <Helmet>
                <title>Dashboard | Home</title>
            </Helmet>
            <div>
                <h3 className='font-bold text-2xl text-start'>Welcome Back! <span className='text-[#EC5082]'> {user.displayName}</span></h3>
            </div>
            <div className='grid xl:grid-cols-4 md:grid-cols-2 gap-6 mt-10'>
                <div className='flex justify-between items-center bg-gradient-to-r from-orange-500 to-orange-500/40 px-6 py-8 rounded-xl'>
                    <div>
                        <p className='text-xl font-semibold'>Total Users</p>
                        <p className='text-4xl font-bold'>{stats.users}</p>
                    </div>
                    <img className='w-20 opacity-50' src="https://static.vecteezy.com/system/resources/previews/020/911/731/original/profile-icon-avatar-icon-user-icon-person-icon-free-png.png" alt="" />
                </div>

                <div className='flex justify-between items-center bg-gradient-to-r from-green-500 to-green-500/40 px-6 py-8 rounded-xl'>
                    <div>
                        <p className='text-xl font-semibold'>Total Revenue</p>
                        <p className='text-4xl font-bold'>$ {stats.totalRevenue}</p>
                    </div>
                    <img className='w-20 opacity-50' src="https://cdn-icons-png.flaticon.com/512/1421/1421335.png" alt="" />
                </div>

                <div className='flex justify-between items-center bg-gradient-to-r from-red-500 to-red-500/40 px-6 py-8 rounded-xl'>
                    <div>
                        <p className='text-xl font-semibold'>Total Instructor</p>
                        <p className='text-4xl font-bold'>{stats.totalInstructor}</p>
                    </div>
                    <img className='w-20 opacity-50' src="https://cdn.onlinewebfonts.com/svg/img_113883.png" alt="" />
                </div>

                <div className='flex justify-between items-center bg-gradient-to-r from-teal-500 to-teal-500/40 px-6 py-8 rounded-xl'>
                    <div>
                        <p className='text-xl font-semibold'>Total Classes</p>
                        <p className='text-4xl font-bold'>{stats.totalClasses}</p>
                    </div>
                    <img className='w-20 opacity-50' src="https://www.svgrepo.com/download/40913/classroom.svg" alt="" />
                </div>


                <div className='flex justify-between items-center bg-gradient-to-r from-pink-500 to-pink-500/40 px-6 py-8 rounded-xl'>
                    <div>
                        <p className='text-xl font-semibold'>Total Order</p>
                        <p className='text-4xl font-bold'>{stats.totalOrders}</p>
                    </div>
                    <img className='w-20 opacity-50' src="https://icons.veryicon.com/png/o/system/linear-chh/order-27.png" alt="" />
                </div>

                <div className='flex justify-between items-center bg-gradient-to-r from-cyan-500 to-cyan-500/40 px-6 py-8 rounded-xl'>
                    <div>
                        <p className='text-xl font-semibold'>Total Approved</p>
                        <p className='text-4xl font-bold'>{stats.totalApproved}</p>
                    </div>
                    <img className='w-20 opacity-50' src="https://cdn-icons-png.flaticon.com/512/4157/4157027.png" alt="" />
                </div>

                <div className='flex justify-between items-center bg-gradient-to-r from-indigo-500 to-indigo-500/40 px-6 py-8 rounded-xl'>
                    <div>
                        <p className='text-xl font-semibold'>Total Pending</p>
                        <p className='text-4xl font-bold'>{stats.totalpending}</p>
                    </div>
                    <img className='w-20 opacity-50' src="https://cdn-icons-png.flaticon.com/512/2516/2516759.png" alt="" />
                </div>

                <div className='flex justify-between items-center bg-gradient-to-r from-yellow-500 to-yellow-500/40 px-6 py-8 rounded-xl'>
                    <div>
                        <p className='text-xl font-semibold'>Total Denied</p>
                        <p className='text-4xl font-bold'>{stats.totaldenied}</p>
                    </div>
                    <img className='w-20 opacity-50' src="https://cdn-icons-png.flaticon.com/512/157/157903.png" alt="" />
                </div>
            </div>
            <div className='my-20 grid 2xl:grid-cols-2 grid-cols-1'>
                <div className='w-auto'>
                    <h3 className='text-center font-bold text-2xl mb-8'>Total Enrolled Overview</h3>
                    <BarChart
                        width={650}
                        height={400}
                        data={classes}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="totalEnroll" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {classes.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <div className='w-auto'>
                    <h3 className='text-center font-bold text-2xl mb-8'>Top 5 Best Seller Classes</h3>
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
                                    <th>Total Enrolled</th>
                                    <th className='text-center'>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    sortedClasses?.slice(0, 5).map((myClass, index) => <tr className="hover:bg-[#ec508113]"
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
                                        <td >
                                            <p className='font-bold text-end'>{myClass.totalEnroll}</p>
                                        </td>
                                        <td >
                                            <p className='bg-[#EC5082] text-white px-2 rounded-full w-[80px] font-bold text-end'>$ {myClass.price}</p>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;