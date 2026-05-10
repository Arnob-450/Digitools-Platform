import user from "../../assets/user.png";
import packageIcon from "../../assets/package.png";
import rocket from "../../assets/rocket.png";

const GetStared = () => {
    return (
        <section className="bg-slate-50 py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">Get Started In 3 Steps</h2>
                    <p className="mt-4 text-slate-500 text-base sm:text-lg">Start using premium digital tools in minutes, not hours.</p>
                </div>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
                    <div className="relative bg-white rounded-4xl p-8 shadow-[0_40px_100px_rgba(15,23,42,0.08)]  flex flex-col justify-center">
                        <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#6d4fff] text-white flex items-center justify-center text-sm font-bold">01</div>
                        <div className="w-20 h-20 rounded-full bg-[#efe6ff] flex items-center justify-center mx-auto mb-6">
                            <img src={user} alt="Create Account" className="w-10 h-10" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 text-center mb-3">Create Account</h3>
                        <p className="text-slate-500 text-sm leading-6 text-center">Sign up for free in seconds. No credit card required <br /> to get started.</p>
                    </div>
                    <div className="relative bg-white rounded-4xl p-8 shadow-[0_40px_100px_rgba(15,23,42,0.08)] flex flex-col justify-center min-h-90">
                        <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#6d4fff] text-white flex items-center justify-center text-sm font-bold">02</div>
                        <div className="w-20 h-20 rounded-full bg-[#efe6ff] flex items-center justify-center mx-auto mb-6">
                            <img src={packageIcon} alt="Choose Products" className="w-10 h-10" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 text-center mb-3">Choose Products</h3>
                        <p className="text-slate-500 text-sm leading-6 text-center">Browse our catalog and select the tools <br /> that fit your needs.</p>
                    </div>
                    <div className="relative bg-white rounded-4xl    p-8 shadow-[0_40px_100px_rgba(15,23,42,0.08)] flex flex-col justify-center">
                        <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#6d4fff] text-white flex items-center justify-center text-sm font-bold">03</div>
                        <div className="w-20 h-20 rounded-full bg-[#efe6ff] flex items-center justify-center mx-auto mb-6">
                            <img src={rocket} alt="Start Creating" className="w-10 h-10" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 text-center mb-3">Start Creating</h3>
                        <p className="text-slate-500 text-sm leading-6 text-center">Download and start using your premium <br /> tools immediately.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetStared;