import { useState } from "react";


const DigitalTools = () => {
    const [toggle, setToggle] = useState("explore");
    return (
        
        <div>
            <div className=" mt-28 container mx-auto px-4 ">
                <h2 className='text-5xl font-bold text-[#101727] text-center mb-6'>Premium Digital Tools</h2>
                <p className='text-[#627382] text-center mb-10'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                <div className="flex items-center justify-center  border-2 border-[#E1E7FF] w-max mx-auto mb-10 rounded-full">
                    <div className="flex flex-row md:flex-row items-center ">
                        <button className={` btn ${toggle==="explore"? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' : 'btn-ghost bg-[#ffffff] text-[#25065D] font-bold'}   rounded-full`} onClick={() => setToggle("explore")}>Explore Tools</button>
                        <button className={` btn ${toggle==="cart"? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' : 'btn-ghost bg-[#ffffff] text-[#25065D] font-bold'}   rounded-full`} onClick={() => setToggle("cart")}>Cart (2)</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DigitalTools;