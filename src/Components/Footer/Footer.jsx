import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className="bg-[#101727]">
            <div className="container mx-auto text-white py-7">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-10 px-4">
                    <div>
                        <h1 className="text-4xl mb-3 ">DigiTools</h1>
                        <p className="text-gray-400 font-light text-[16px]">Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-2">
                            <li className="text-2xl font-bold">Product</li>
                            <li className="text-gray-400 font-light text-[16px]">Features</li>
                            <li className="text-gray-400 font-light text-[16px]">Pricing</li>
                            <li className="text-gray-400 font-light text-[16px]">Templates</li>
                            <li className="text-gray-400 font-light text-[16px]">Integrations</li>

                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-2">
                            <li className="text-2xl font-bold">Company</li>
                            <li className="text-gray-400 font-light text-[16px]">About</li>
                            <li className="text-gray-400 font-light text-[16px]">Blog</li>
                            <li className="text-gray-400 font-light text-[16px]">Careers</li>
                            <li className="text-gray-400 font-light text-[16px]">Press</li>

                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-2">
                            <li className="text-2xl font-bold">Resources</li>
                            <li className="text-gray-400 font-light text-[16px]">Documentation</li>
                            <li className="text-gray-400 font-light text-[16px]">Help Center</li>
                            <li className="text-gray-400 font-light text-[16px]">Community</li>
                            <li className="text-gray-400 font-light text-[16px]">Contact</li>

                        </ul>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold mb-2">Social Links</h1>
                        <div className="flex gap-4 text-2xl mt-3">
                            <a href="" className="border-2 p-2 rounded-full border-gray-400"><AiFillInstagram /></a>
                            <a href="" className="border-2 p-2 rounded-full border-gray-400"><FaFacebookSquare /></a>
                            <a href="" className="border-2 p-2 rounded-full border-gray-400"><FaXTwitter /></a>
                        </div>
                    </div>
                </div>
                <div className="flex w-full flex-col">
                    <div className="divider divider-neutral"></div>  
                </div>
                <div className=" flex justify-between text-gray-400 text-sm px-4 gap-2 md:gap-0">
                    <div>
                        <p>&copy; 2026 DigiTools. All rights reserved.</p>
                    </div>
                    <div className=" flex gap-9">
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookie</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;