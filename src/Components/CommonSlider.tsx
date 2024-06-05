const CommonSlider = ({arrayName}:{arrayName:any[]}) => {
  return (
    <div className="mt-8 bg-white max-w-[1250px] mx-auto px-4 pt-6">
      <div className="flex flex-col gap-4">
        <section className="flex gap-4 items-center">
          <h2 className="font-bold text-xl">{arrayName[0].title}</h2>
          <p className="text-[#007185] text-sm">See all offers</p>
        </section>
        <div className="flex gap-3 overflow-x-scroll">
          {arrayName[0].imgs.map((val: string, ind: number) => (
            <div
              key={ind}
              className="h-[200px] w-[200px] flex-shrink-0"
              style={{
                backgroundImage: `url(${val})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommonSlider;
