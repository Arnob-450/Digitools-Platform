

const Stats = () => {
    return (
        <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]  px-10 py-10 ">          
            <div className=" container flex flex-col md:flex-row items-center justify-between mx-auto px-4 gap-6 md:gap-0">
                <div className="flex items-center flex-col w-full md:w-auto">
                    <h2 className=" font-extrabold text-2xl sm:text-3xl md:text-[3.75rem] text-[#ffffff]">50K+</h2>
                    <p className="font-medium text-sm sm:text-base md:text-[1.5rem] text-[#ffffff]">Active Users</p>
                </div>
                <div className="divider divider-horizontal  w-full md:w-auto md:h-20"></div>
                <div className="flex items-center flex-col w-full md:w-auto">
                    <h2 className=" font-extrabold text-2xl sm:text-3xl md:text-[3.75rem] text-[#ffffff]">200+</h2>
                    <p className="font-medium text-sm sm:text-base md:text-[1.5rem] text-[#ffffff]">Premium Tools</p>
                </div>
                <div className="divider divider-horizontal  w-full md:w-auto md:h-20"></div>
                <div className="flex items-center flex-col w-full md:w-auto">
                    <h2 className=" font-extrabold text-2xl sm:text-3xl md:text-[3.75rem] text-[#ffffff]">4.9</h2>
                    <p className="font-medium text-sm sm:text-base md:text-[1.5rem] text-[#ffffff]">Rating</p>
                </div>
            </div>

        </div>
    );
};

export default Stats;