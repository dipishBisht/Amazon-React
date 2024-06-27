import HomeSlider from "../Components/HomeSlider";
import CommonSlider from "../Components/CommonSlider";
import Navbar from "../Components/Navbar";
import ProductComponent1 from "../Components/ProductComponent1";
import ProductComponent2 from "../Components/ProductComponent2";
import HomeData from "../Components/HomeData";
import { GroceryImgs, homeData, homeData2 } from "../Utils/Utilities";
import {
  electricImgs,
  kitchenImgs,
  trends,
  clothing,
} from "../Utils/Utilities";
import VideoComponent from "../Components/VideoComponent";
import SignInButton from "../Components/SignInButton";
import Footer from "../Components/Footer.jsx";

const SignIn = () => {
  return (
    <div className="bg-[#e3e6e6]">
      {/* <Navbar />
      <HomeSlider />
      <ProductComponent1 />
      <ProductComponent2 />
      <CommonSlider arrayName={electricImgs} />
      <CommonSlider arrayName={kitchenImgs} />
      <HomeData myArray={homeData} />
      <CommonSlider arrayName={trends} />
      <CommonSlider arrayName={clothing} />
      <VideoComponent />
      <HomeData myArray={homeData2} />
      <CommonSlider arrayName={GroceryImgs} />
      <SignInButton /> */}
      <Footer />
    </div>
  );
};

export default SignIn;
