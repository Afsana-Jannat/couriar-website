

const HomepageServices = () => {

    function Card({ title, description, src }) {
        return <div className="card card-compact bg-base-100 shadow-xl hover:bg-[#FA4318] hover:text-[#ffff] duration-300">
            <figure><img src={src} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-xs">{description}
                </p>
                <hr />
                <div className="card-actions">
                    <button className="text-[#efef61]">Read More</button>
                </div>
            </div>
        </div>
    }


    return (
        <div className="max-w-4xl mx-auto">
            <div>
                <h2 className="text-center text-3xl font-bold mt-6">OuR SERVICE FOR YOU</h2>
                <p className="text-center text-sm mt-2 mb-6">Quickly optimize cooperative models for long-term high-impact ROI. Dynamically drive innovative e-commerce and distributed paradigms.</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
                <Card src={"https://www.wowtheme7.com/tf/transpro/assets/img/service/1.png"}
                    title={"SEA TRANSPORTATION"}
                    description={"Intrinsicly exploit e-business imperative with emerging human capital."}>
                </Card>
                <Card src={"https://www.wowtheme7.com/tf/transpro/assets/img/service/2.png"}
                    title={"AIR TRANSPORTATION"}
                    description={"Intrinsicly exploit e-business imperative with emerging human capital."}></Card>
                <Card src={"https://www.wowtheme7.com/tf/transpro/assets/img/service/3.png"}
                    title={"WAREHOUSING"}
                    description={"Intrinsicly exploit e-business imperative with emerging human capital."}></Card>
            </div>
        </div>
    );
};


export default HomepageServices;


