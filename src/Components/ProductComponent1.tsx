import { productList1 } from "../Utils/Utilities";

const ProductComponent1 = () => {
  return (
    <div className="bg-[#e3e6e6]">
      <div className="flex relative justify-between px-5 z-20 gap-4">
        {productList1.map((val, ind) => {
          return (
            <div
              key={ind}
              className="bg-white h-[460px] w-fit py-6 px-4 shadow-md flex flex-col justify-between"
            >
              <div className="flex flex-col gap-5 items-center">
                <h2 className="text-xl font-bold max-w-[250px]">{val.title}</h2>
                <div className="grid grid-cols-2 gap-2 w-fit">
                  {val.subProducts.map((val, ind) => {
                    return (
                      <section className="flex flex-col" key={ind}>
                        <img
                          className="w-[160px] h-[100px] object-cover"
                          src={val.subImage}
                          alt=""
                        />
                        <p className="text-xs max-w-[140px]">{val.subTitle}</p>
                      </section>
                    );
                  })}
                </div>
              </div>
              <p className="text-[#007185]">See more</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductComponent1;
