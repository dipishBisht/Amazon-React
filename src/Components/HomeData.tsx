import HomeCommonSection from "./HomeCommonSection";

const HomeData = ({ myArray }: { myArray: object[] }) => {
  return (
    <div className="grid grid-cols-1 place-items-center gap-4 lg:pl-5 sm:grid-cols-2 max-w-[1250px] mx-auto my-8 lg:flex lg:justify-between">
      {myArray.map((val: any, ind: number) => (
        <HomeCommonSection key={ind} title={val.title} images={val.images} />
      ))}
    </div>
  );
};

export default HomeData;
