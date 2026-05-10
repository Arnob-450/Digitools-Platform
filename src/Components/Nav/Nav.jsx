import { IoCartOutline } from "react-icons/io5";


const Nav = ({ cartItems }) => {
    return (
        <div className="">
            <div className="navbar bg-base-100 shadow-sm ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a className=" text-[16px]">Products</a></li>
                            <li><a className=" text-[16px]">Features</a></li>
                            <li><a className=" text-[16px]">Pricing</a></li>
                            <li><a className=" text-[16px]">Testimonials </a></li>
                            <li><a className=" text-[16px]">FAQ</a></li>
                        </ul>
                    </div>
                    <a className="text-xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent ">DigiTools</a>
                </div>
                <div className="navbar-center hidden lg:flex"> 
                    <ul className="menu menu-horizontal px-1">
                        <li><a className="font-semibold text-[16px]">Products</a></li>
                        <li><a className="font-semibold text-[16px]">Features</a></li>
                        <li><a className="font-semibold text-[16px]">Pricing</a></li>
                        <li><a className="font-semibold text-[16px]">Testimonials </a></li>
                        <li><a className="font-semibold text-[16px]">FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end gap-1">
                    <div className="flex gap-1 ">
                        <div className="flex items-center ">  <IoCartOutline />
                          {cartItems.length>0 && (
                            <div className="-mt-2 rounded-full w-5 h-5 flex items-center justify-center bg-red-500 text-[10px]">
                              <p className="text-xs text-black ">{cartItems.length}</p>
                            </div>
                          )}
                        </div>
                        <a className="btn btn-ghost rounded-4xl">Login</a>
                    </div>
                    <a className="btn rounded-4xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default Nav;