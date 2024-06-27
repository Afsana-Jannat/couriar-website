import Footer from "../../../Shared/Footer/Footer";
import Navbar from "../../../Shared/Navbar/Navbar";
import Happyclients from "../../Servicespage/Happyclients/Happyclients";
import Banner from "../Banner/Banner";
import HomepageAbout from "../HomepageAbout/HomepageAbout";
import HomepageChoose from "../HomepageChoose/HomepageChoose";
import HomepageServices from "../HomepageServices/HomepageServices";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <HomepageAbout></HomepageAbout>
            <HomepageServices></HomepageServices>
            <HomepageChoose></HomepageChoose>
            <Happyclients></Happyclients>
            <Footer></Footer>
        </div>
    );
};

export default Home;