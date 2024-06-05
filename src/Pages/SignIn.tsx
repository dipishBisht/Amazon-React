import HomeSlider from "../Components/HomeSlider";
import CommonSlider from "../Components/CommonSlider";
import Navbar from "../Components/Navbar";
import ProductComponent1 from "../Components/ProductComponent1";
import ProductComponent2 from "../Components/ProductComponent2";
import HomeData from "../Components/HomeData";
import {
  electricImgs,
  kitchenImgs,
  trends,
  clothing,
} from "../Utils/Utilities";
import VideoComponent from "../Components/VideoComponent";

const SignIn = () => {
  return (
    <div className="bg-[#e3e6e6]">
      <Navbar />
      <HomeSlider />
      <ProductComponent1 />
      <ProductComponent2 />
      <CommonSlider arrayName={electricImgs} />
      <CommonSlider arrayName={kitchenImgs} />
      <HomeData />
      <CommonSlider arrayName={trends} />
      <CommonSlider arrayName={clothing} />
      <VideoComponent />
    </div>
  );
};

export default SignIn;
