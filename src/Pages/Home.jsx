import Banner from "../Components/Banner";
import Blogs from "../Components/Blogs";
import Brands from "../Components/Brands";
import HotDeal from "../Components/HotDeal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HotDeal></HotDeal>
            <Brands></Brands>
            <Blogs></Blogs>
            <ToastContainer></ToastContainer>
        </div>
    );
};
export default Home;