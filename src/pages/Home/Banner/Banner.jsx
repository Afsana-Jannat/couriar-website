
const Banner = () => {
    return (
        <div>
            <div className="hero h-[600px]" style={{ backgroundImage: 'url(https://png.pngtree.com/thumb_back/fh260/background/20230616/pngtree-digital-delivery-a-3d-rendering-of-online-order-tracking-logistics-and-image_3607079.jpg)' }}>
                <div className=""></div>
                <div className="ml-11 text-left text-white">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold">FAST CERTIFIED
                            <br />& BEST WORLD <br />WIDE SERVICE</h1>
                        <p className="mb-5 text-xs">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                    </div>
                </div>
            </div>
            <div className="bg-slate-100 border border-none max-w-4xl mx-auto rounded-lg -mt-12">
                <div className="grid grid-cols-2 p-6">
                    <div className="grid grid-cols-2">
                        <div>
                            <h2 className="text-sm
                        w-24 text-orange-700">FEATURES</h2>
                            <h2>WHAT WE OFFER</h2>
                        </div>
                        <div>
                            <img className="h-[50px] w-[50px]" src="https://static.vecteezy.com/system/resources/previews/014/455/904/non_2x/delivery-truck-icon-icon-on-transparent-background-free-png.png" alt="" />
                        </div>
                    </div>
                    <div>
                        <p className="text-sm">
                            Collaboratively customize front-end materials with standardized infomediaries. Holisticly engineer performance based value. Assertively benchmark turnkey web-readiness rather than long.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4 p-4">
                    <div className="border rounded-lg border-none bg-[#FEECE7] p-4">
                        <img className="rounded-full mb-2 bg-[#FA4318]" src="./public/images/feature-1.png" alt="" />
                        <h2 className="text-sm font-semibold">TRANSPARENT PRICING</h2>
                        <p className="mt-2 text-xs">Delivery Optimization is a Windows feature enabling a computer to receive and deliver portions of system and app updates from other devices connected to the same network.
                        </p>
                    </div>
                    <div className="border rounded-lg border-none bg-[#E5F3FD] p-4">
                        <img className="rounded-full mb-2 bg-[#FA4318]" src="https://www.wowtheme7.com/tf/transpro/assets/img/icon/feature-3.png" alt="" />
                        <h2 className="text-sm font-semibold">WAREHOUSE STORAGE</h2>
                        <p className="mt-2 text-xs">Delivery Optimization is a Windows feature enabling a computer to receive and deliver portions of system and app updates from other devices connected to the same network.
                        </p>
                    </div>
                    <div className="border rounded-lg border-none bg-[#f0e4f3] p-4">
                        <img className="rounded-full mb-2 bg-[#FA4318]" src="https://www.wowtheme7.com/tf/transpro/assets/img/icon/feature-2.png" alt="" />
                        <h2 className="text-sm font-semibold">ONLINE TRACKING</h2>
                        <p className="mt-2 text-xs">Delivery Optimization is a Windows feature enabling a computer to receive and deliver portions of system and app updates from other devices connected to the same network.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;