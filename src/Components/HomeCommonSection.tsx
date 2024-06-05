const HomeCommonSection = ({ title, images }: { title: string; images: string[] }) => {
    return (
      <div className="flex flex-col gap-4 my-5 mx-0 bg-white py-4 px-5">
        <h2 className="text-xl font-bold max-w-[250px]">{title}</h2>
        <div className="flex flex-wrap gap-2">
          {images.length === 1 ? (
            <img src={images[0]} className="w-full h-auto" />
          ) : (
            <div className="grid grid-cols-2 gap-2">
              {images.map((image: any, index: any) => (
                <img
                  key={index}
                  src={image}
                  alt={`Home ${index}`}
                  className="w-[120px] h-[120px] object-contain"
                />
              ))}
            </div>
          )}
        </div>
        <p className="text-sm text-[#007185]">See all offers</p>
      </div>
    );
  };

  export default HomeCommonSection