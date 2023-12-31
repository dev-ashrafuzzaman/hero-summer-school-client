import { PiStudentBold } from 'react-icons/pi';
import { useLocation, useNavigate } from 'react-router-dom';
import useSelected from '../../../hooks/useSelected';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import useEnrolled from '../../../hooks/useEnrolled';
import useAdmin from '../../../hooks/useAdmin';
import useInstructor from '../../../hooks/useInstructor';
const PopularClassessCard = ({ classes }) => {
    const { name, image, instructorName, availableSeats, price, totalEnroll, _id } = classes;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [selected, refetch] = useSelected();
    const [enrolled] = useEnrolled();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    const enrolledClassIds = new Set(
        enrolled.flatMap((enrollment) => enrollment.classes)
    );


    const handleSelected = classes => {
        if (user && user.email) {
            const selectClasses = {
                classesId: classes._id,
                name: classes.name,
                image: classes.image,
                price: classes.price,
                instructor: classes.instructorName,
                email: user.email
            };

            const selectOneCless = selected?.find(selectOne => selectOne.classesId === _id);

            const filteredClasses = [classes].find((myClass) =>
                enrolledClassIds.has(myClass._id)
            );


            if (filteredClasses?._id === _id) {
                toast.warn('Already Enrolled Check dashboard.', {
                    position: "bottom-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                return

            }
            if (selectOneCless?.classesId === _id) {
                toast.warn('Already selected Check dashboard.', {
                    position: "bottom-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
            else {
                fetch('https://server.udvabonibd.com/selected', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(selectClasses)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            refetch()
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Class add to select',
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        // Handle error case
                    });
            }



        } else {
            Swal.fire({
                title: 'Please login then add to select!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then(result => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    };

    return (
        <div>
            <div className={`card bg-base-100 shadow-xl border-2   ${availableSeats === 0 ? 'border-2 border-red-400' : 'border-white'}`}>
                <div className='bg-red-500  pb-8 flex flex-col items-center justify-end h-[250px] rounded-2xl bg-cover' style={{
                    backgroundImage: `url(${image})`
                }}>
                    <div>
                        <div className='flex justify-center items-center gap-4 '>
                            <div className={`bg-white p-2 rounded-lg border-2 ${availableSeats === 0 ? 'border-red-500 bg-[#fff2f6] ' : ''} hover:border-2 hover:border-[#EC5082] hover:bg-[#fff2f6]`}>
                                <p>Available Seat:  <span className='font-bold'> {availableSeats}</span></p>
                            </div>
                            <div className='bg-white p-2 rounded-lg border-2 hover:border-2 hover:border-[#BAD650] hover:bg-[#fafdef]'>
                                <p>Course Price: <span className='font-bold'>${price}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body space-y-2">
                    <h2 className="text-3xl font-semibold">{name}</h2>
                    <p className='text-xl text-[#5D5E5E]'>Instructor: {instructorName}</p>
                    <p className='text-xl flex justify-center border-2 rounded-full text-[#a4bd48] bg-[#bed26625] font-bold items-center w-[100px]'><PiStudentBold></PiStudentBold> {totalEnroll}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleSelected(classes)} className={`btn main-color-bg w-full font-bold text-xl text-white`} disabled={availableSeats === 0 ? true : isAdmin || isInstructor ? true : false} >Select</button>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default PopularClassessCard;
//  {
//     name: 'English Spoken',
//     image: 'https://i.ibb.co/7Q9WCRX/card-cover.png',
//     instructorName: 'Nusrat Jahan',
//     availableSeats: 30,
//     price: 1500,
// }