import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import sliderImg1 from "../assets/navSlider-1.jpg";
import sliderImg2 from "../assets/navSlider-2.jpg";
import sliderImg3 from "../assets/navSlider-3.jpg";
import sliderImg4 from "../assets/navSlider-4.jpg";
import sliderImg5 from "../assets/navSlider-5.jpg";
import sliderImg6 from "../assets/navSlider-6.jpg";
import sliderImg7 from "../assets/navSlider-7.jpg";
import sliderImg8 from "../assets/navSlider-8.jpg";

const HomeSlider = () => {
  const sliderAllImg: string[] = [
    sliderImg1,
    sliderImg2,
    sliderImg3,
    sliderImg4,
    sliderImg5,
    sliderImg6,
    sliderImg7,
    sliderImg8,
  ];

  return (
    <div className="relative h-[60vh] z-10">
      <div className="absolute top-0 left-0 z-10 w-full h-full">
        <AwesomeSlider bullets={false} style={{ height: "516px" }} >
          {sliderAllImg.map((val, ind) => (
            <div key={ind}>
              <img src={val} alt="" />
            </div>
          ))}
        </AwesomeSlider>
      </div>
    </div>
  );
};

export default HomeSlider;
