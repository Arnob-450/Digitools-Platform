

const Pricing = () => {
    return (
        <section className=" py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">Simple, Transparent Pricing</h2>
                    <p className="mt-4 text-slate-500 text-base sm:text-lg">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-3 items-stretch">
                    <div className="bg-white border border-slate-200 rounded-4xl p-8 shadow-sm flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-1">Starter</h3>
                            <p className="text-slate-500 mb-8">Perfect for getting started</p>
                            <div className="flex items-end gap-2 mb-8">
                                <span className="text-4xl font-bold text-slate-900">$0</span>
                                <span className="text-base text-slate-500">/Month</span>
                            </div>
                            <ul className="space-y-3 text-slate-600 text-sm">
                                <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span>Access to 10 free tools</li>
                                <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span>Basic templates</li>
                                <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span>Community support</li>
                                <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span>1 project per month</li>
                            </ul>
                        </div>
                        <button className="mt-10 btn w-full rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">Get Started Free</button>
                    </div>
                    <div className="relative bg-linear-to-br from-[#5c2bff] to-[#8713ff] rounded-4xl p-8  flex flex-col justify-between overflow-visible">
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-200 text-slate-900 px-5 py-2 rounded-full text-xs font-semibold shadow-sm z-10">Most Popular</div>
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-1">Pro</h3>
                            <p className="text-indigo-100 mb-8">Best for professionals</p>
                            <div className="flex items-end gap-2 mb-8">
                                <span className="text-5xl font-bold text-white">$29</span>
                                <span className="text-base text-indigo-100">/Month</span>
                            </div>
                            <ul className="space-y-3 text-indigo-100 text-sm">
                                <li className="flex items-center gap-2"><span className="text-emerald-300">✓</span>Access to all premium tools</li>
                                <li className="flex items-center gap-2"><span className="text-emerald-300">✓</span>Unlimited templates</li>
                                <li className="flex items-center gap-2"><span className="text-emerald-300">✓</span>Priority support</li>
                                <li className="flex items-center gap-2"><span className="text-emerald-300">✓</span>Unlimited projects</li>
                                <li className="flex items-center gap-2"><span className="text-emerald-300">✓</span>Cloud sync</li>
                                <li className="flex items-center gap-2"><span className="text-emerald-300">✓</span>Advanced analytics</li>
                            </ul>
                        </div>
                        <button className="mt-10 btn w-full rounded-full bg-white text-slate-900 font-semibold">Start Pro Trial</button>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-4xl p-8 shadow-sm flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-1">Enterprise</h3>
                            <p className="text-slate-500 mb-8">For teams and businesses</p>
                            <div className="flex items-end gap-2 mb-8">
                                <span className="text-4xl font-bold text-slate-900">$99</span>
                                <span className="text-base text-slate-500">/Month</span>
                            </div>
                            <ul className="space-y-3 text-slate-600 text-sm">
                                <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span>Everything in Pro</li>
                                <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span>Team collaboration</li>
                                <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span>Custom integrations</li>
                                <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span>Dedicated support</li>
                                <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span>SLA guarantee</li>
                                <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span>Custom branding</li>
                            </ul>
                        </div>
                        <button className="mt-10 btn w-full rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">Contact Sales</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;