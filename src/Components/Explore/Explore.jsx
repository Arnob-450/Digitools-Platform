

const Explore = () => {
    return (
        <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
          <div className="container mx-auto flex flex-col items-center justify-center px-10 py-20 gap-10 md: p-30">
            <div>
                <h1 className="text-4xl font-bold text-white mb-2 md:mb-4 text-center">Ready to Transform Your Workflow?</h1>
                <p className='text-gray-300 text-center'>Join thousands of professionals who are already using Digitools to work smarter.<br />Start your free trial today.</p>
            </div>
            <div className="flex gap-4">
                <button className="bg-white btn rounded-4xl"><span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">Explore Products</span></button>
                <button className="btn btn-outline text-white rounded-full hover:text-black">View Pricing</button>
            </div>
             <div className="text-center text-gray-300 mt-2md:mt-4">
                <p>14-day free trial • No credit card required • Cancel anytime</p>
             </div>
            
            </div>  
        </div>
    );
};

export default Explore;