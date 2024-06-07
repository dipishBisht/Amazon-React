const SignInButton = () => {
  return (
    <div className="bg-white py-5 my-5">
      <div className="flex flex-col gap-2 py-4 text-sm items-center mx-auto border-[1px] border-[#33333332]" >
        <p>See personalized recommendations</p>
        <button className="bg-[#ffc52f] px-6 py-1.5 font-bold rounded-md">
          Sign In
        </button>
        <section className="flex justify-center gap-1 text-xs">
          <span>New customer?</span>
          <span className="text-[#007185]">Start Here</span>
        </section>
      </div>
    </div>
  );
};

export default SignInButton;
