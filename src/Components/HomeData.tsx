import HomeCommonSection from "./HomeCommonSection";

const HomeData = ({ myArray }: { myArray: object[] }) => {
  return (
    <div className="flex max-w-[1250px] mx-auto gap-4 mt-5 justify-between flex-wrap">
      {myArray.map((val: any, ind: number) => (
        <HomeCommonSection key={ind} title={val.title} images={val.images} />
      ))}
    </div>
  );
};

export default HomeData;
