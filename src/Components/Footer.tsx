import Amazon_Logo from "../assets/Amazon_Logo.png";
import flag from "../assets//fe2UeLQmJ11kKHN.png";

const Footer = () => {
  return (
    <footer className="bg-[#232F3E] text-white flex flex-col gap-10 py-8">
      <div className="grid gap-8 pl-4 sm:grid-cols-2 lg:grid-cols-4 max-w-[1000px] w-full mx-auto lg:flex lg:justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Get to Know Us</h2>
          <ul className="flex flex-col gap-1 text-[#ddd]">
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Amazon Science</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Connect with Us</h2>
          <ul className="flex flex-col gap-1 text-[#ddd]">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Make Money with Us</h2>
          <ul className="flex flex-col gap-1 text-[#ddd]">
            <li>Sell on Amazon</li>
            <li>Sell under Amazon Acceleration</li>
            <li>Protect and Build Your Brand</li>
            <li>Amazon Global Selling</li>
            <li>Become an Affiliate</li>
            <li>Fulfilment by Amazon</li>
            <li>Advertise Your Products</li>
            <li>Amazon Pay on Merchants</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Let us Help You</h2>
          <ul className="flex flex-col gap-1 text-[#ddd]">
            <li>COVID-19 and Amazon</li>
            <li>Your Account</li>
            <li>Return Center</li>
            <li>100% Purchase Protection</li>
            <li>Amazon App Download</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
      <div className="border-t-[1px] border-[#eeeeee48] py-5">
        <div className="max-w-[1000px] mx-auto flex gap-10 justify-center">
          <img src={Amazon_Logo} className="w-28" />
          <div className="flex gap-2">
            <select className="bg-transparent border-[1px] border-[#eeeeee7b] min-w-32 pl-2">
              <option>English</option>
            </select>
            <section className="bg-transparent border-[1px] border-[#eeeeee7b] flex gap-2 items-center min-w-24 justify-center">
              <div
                className="h-[18px] w-[24px] "
                style={{
                  backgroundImage: `url(${flag})`,
                  backgroundPosition: "0 -166px",
                }}
              ></div>
              <div>India</div>
            </section>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
