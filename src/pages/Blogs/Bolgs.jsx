import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";


const Bolgs = () => {

    function Blogcard({ title, description, src }) {
        return <div className="bg-base-100 mt-6 shadow-xl duration-300">
            <figure><img src={src} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-xs">{description}
                </p>
                <hr />
                <div className="card-actions">
                    <button className="text-[#fb5341]">Read More</button>
                </div>
            </div>
        </div>
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero h-[400px]" style={{ backgroundImage: 'url(https://woocommerce.com/wp-content/uploads/2022/08/order-delivery-banner.png)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-white">
                    <div>
                        <h2 className="font-bold text-4xl">Blogs</h2>
                    </div>
                </div>
            </div>
            <div className="grid mb-10 md:grid-cols-3 sm:grid-cols-1 gap-3 mt-12 max-w-4xl mx-auto">
                <div className="col-span-2">
                    <Blogcard
                        src={"https://www.wowtheme7.com/tf/transpro/assets/img/blog/4.png"}
                        title={"Express delivery is going to slow down"}
                        description={"Phosfluorescently unleash highly efficient experiences for team driven scenarios. Conveniently enhance cross-unit communities with accurate testing procedures. Dynamically embrace team building expertise. Proactively monetize parallel solutions. Dramatically strategize excellent materials via enabled information. Efficiently recaptiualize low-risk high-yield relationships via functionalized value. Rapidiously aggregate team building methodologies."}></Blogcard>

                    <Blogcard
                        src={"https://www.wowtheme7.com/tf/transpro/assets/img/blog/5.png"}
                        title={"Express delivery is going to slow down"}
                        description={"Phosfluorescently unleash highly efficient experiences for team driven scenarios. Conveniently enhance cross-unit communities with accurate testing procedures. Dynamically embrace team building expertise. Proactively monetize parallel solutions. Dramatically strategize excellent materials via enabled information. Efficiently recaptiualize low-risk high-yield relationships via functionalized value. Rapidiously aggregate team building methodologies."}>
                    </Blogcard>
                    <Blogcard
                        title={"Express delivery is going to slow down"}
                        description={"Phosfluorescently unleash highly efficient experiences for team driven scenarios. Conveniently enhance cross-unit communities with accurate testing procedures. Dynamically embrace team building expertise. Proactively monetize parallel solutions. Dramatically strategize excellent materials via enabled information. Efficiently recaptiualize low-risk high-yield relationships via functionalized value. Rapidiously aggregate team building methodologies."}>
                    </Blogcard>
                    <Blogcard
                        src={"https://www.wowtheme7.com/tf/transpro/assets/img/blog/6.png"}
                        title={"New Additions to our great Metro Trucks"}
                        description={"Phosfluorescently unleash highly efficient experiences for team driven scenarios. Conveniently enhance cross-unit communities with accurate testing procedures. Dynamically embrace team building expertise. Proactively monetize parallel solutions."}>
                    </Blogcard>

                </div>
            </div>
            <Footer></Footer>
        </div >
    );
};

export default Bolgs;