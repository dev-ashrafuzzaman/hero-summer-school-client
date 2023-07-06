import stdGifImage from "../../../assets/bg/animation_500_ljbwq2f5.gif"

const CountStudentSection = () => {
    return (
        <div className="mx-auto max-w-screen-xl md:mb-44 mb-10 px-2 ">
            <div className="grid md:grid-cols-2 gap-4">
                {/* Content Area */}
                <div className="grid md:grid-cols-2 text-center gap-4">
                    <div className="bg-[#fcf0f4] border-2 border-white hover:border-[#c93567] hover:text-[#c93567] flex flex-col justify-center items-start px-10 py-10 rounded-2xl space-y-2">
                        <p className="text-5xl font-bold">1B+</p>
                        <p className="text-2xl font-semibold text-[#5D5E5E]">Total Student</p>
                    </div>
                    <div className="bg-[#ecfafa] border-2 border-white hover:border-[#32c1c1] hover:text-[#32c1c1] flex flex-col justify-center items-start px-10 py-10  rounded-2xl space-y-2">
                        <p className="text-5xl font-bold">37M+</p>
                        <p className="text-2xl font-semibold text-[#5D5E5E]">App User</p>
                    </div>
                    <div className="bg-[#ebeefa] border-2 border-white hover:border-[#1e389c] hover:text-[#1e389c] flex flex-col justify-center items-start px-10 py-10 rounded-2xl space-y-2">
                        <p className="text-5xl font-bold">70,000+</p>
                        <p className="text-2xl font-semibold text-[#5D5E5E]">Approved Vish</p>
                    </div>
                    <div className="bg-[#f7fbe5] border-2 border-white hover:border-[#acc831] hover:text-[#acc831] flex flex-col justify-center items-start px-10 py-10 rounded-2xl space-y-2">
                        <p className="text-5xl font-bold">24,000+</p>
                        <p className="text-2xl font-semibold text-[#5D5E5E]">Learning Content</p>
                    </div>

                </div>
                {/* Image Area */}
                <div className="bg-cover border bg-center h-[512px] rounded-2xl hidden md:block"
                    style={{
                        backgroundImage: `url(${stdGifImage})`
                    }}
                >

                </div>
            </div>
        </div>
    );
};

export default CountStudentSection;