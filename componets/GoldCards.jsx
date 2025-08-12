export default function GoldCards() {
    return (
        <section className="w-full bg-[#fff8f0] py-8 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Card 1 */}
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl shadow-lg p-6 md:p-10 flex flex-col justify-between text-white hover:scale-[1.02] transition-transform duration-300">
                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-wider mb-3">
                            Gold Exchange Program
                        </h3>
                        <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
                            Enjoy 0% Deduction on your exchange value
                        </h2>
                        <p className="text-sm opacity-90 mb-6">
                            Get the best value for your gold without deductions.
                        </p>
                    </div>
                    <button className="bg-white text-yellow-700 font-semibold px-5 py-2 rounded-lg shadow hover:bg-yellow-100 transition-colors">
                        Calculate Your Gold Value
                    </button>
                </div>

                {/* Card 2 */}
                <div className="bg-gradient-to-r from-green-400 to-green-600 rounded-2xl shadow-lg p-6 md:p-10 flex flex-col justify-between text-white hover:scale-[1.02] transition-transform duration-300">
                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-wider mb-3">
                            Invest with E-Gold
                        </h3>
                        <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
                            Now you can invest & redeem anytime
                        </h2>
                        <p className="text-sm opacity-90 mb-6">
                            Start your digital gold journey instantly and securely.
                        </p>
                    </div>
                    <button className="bg-white text-green-700 font-semibold px-5 py-2 rounded-lg shadow hover:bg-green-100 transition-colors">
                        Buy Digital Gold
                    </button>
                </div>

            </div>
        </section>
    );
}
