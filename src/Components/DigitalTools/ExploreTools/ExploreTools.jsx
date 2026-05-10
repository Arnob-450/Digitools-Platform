import { use } from "react";
import { IoCheckmark } from "react-icons/io5";



const ExploreTools = ({ DataPromise }) => {
    const data = use(DataPromise);
    console.log(data);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {data.map((data, index) => (
                <div key={index} className="border-2 border-gray-200 rounded-4xl p-6 flex flex-col justify-between min-w-full min-h-[420px]">
                    <div className="flex items-center justify-between mb-4">
                        <div className="border-2 border-gray-300 p-2.5 rounded-full">
                            <img src={data.icon} alt={data.name} />
                        </div>
                        <div>
                            <button className={`btn btn-active ${data.tag === "Best Seller"
                                ? "bg-amber-200 text-amber-700"
                                : data.tag === "New"
                                    ? "bg-green-300 text-green-700"
                                    : "bg-purple-300 text-purple-800"} rounded-4xl`}>{data.tag}</button>
                        </div>
                    </div>
                    <div className="space-y-4 mb-6">
                        <h2 className="text-2xl font-bold ">{data.name}</h2>
                        <p className="text-gray-600 ">{data.description}</p>
                        <p className="text-3xl font-semibold">${data.price}<span className="text-lg font-normal">{data.period=== "monthly" ? "/Mo" :data.period=== "yearly" ? "/yr" : "/One-time"}</span></p>

                    </div>
                    <div className="space-y-5 mb-6">
                        <ul>
                            {data.features?.map((feature, idx) => (
                                <li key={idx} className="flex gap-1 items-center">
                                    <IoCheckmark className="text-green-500" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button className="btn btn-primary rounded-4xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">Buy Now</button>
                </div>
            ))}
        </div>
    );
};

export default ExploreTools;