import HomeCommonSection from "./HomeCommonSection";
import { homeData } from "../Utils/Utilities";

const HomeData = () => {
  return (
    <div className="flex max-w-[1250px] mx-auto gap-4 mt-5 justify-between">
      {homeData.map((val, ind) => (
        <HomeCommonSection key={ind} title={val.title} images={val.images} />
      ))}
    </div>
  );
};

export default HomeData;
