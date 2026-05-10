import banner from '../../assets/banner.png'

const Banner = () => {
    return (
        <div className='min-h-5 container mx-auto'>
            <div className='flex flex-col-reverse md:flex-row justify-center md:items-center gap-10 px-4 py-10 lg:py-20'>
                <div>
                    <div className=' bg-[#e1e7ff] w-max px-3 py-1 rounded-4xl mb-4'>
                        <h2 className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent '>New: AI-Powered Tools Available</h2>
                    </div>
                    <h1 className='text-4xl font-bold text-gray-800'>Supercharge Your<br />Digital Workflow</h1>
                    <p className='text-gray-600 mt-4'>
                        Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
                        Explore Products
                    </p>
                    <div className='flex gap-4 mt-4'>
                        <button className='btn rounded-4xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>Explore Products</button>
                        <button className='btn rounded-4xl bg-transparent border-2 border-[#4F39F6] text-[#4F39F6] hover:bg-[#4F39F6] hover:text-white'>Watch Now</button>
                    </div>
                </div>
                <div>
                    <img src={banner} alt="Banner" />
                </div>
            </div>
        </div>
    );
};

export default Banner;