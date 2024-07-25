import Logo2 from "/assets/logo.svg";

export default function SignUp() {
  return (
    <div className="bg-custom-black flex justify-center items-center h-full flex-col">
      <header>
        <img src={Logo2} alt="" />
      </header>

      <main className="max-w-[327px] max-h-[440px] rounded-[10px] bg-custom-blue mt-[60px] p-[24px]">
        <form action="">
          <h2 className="text-[32px] tracking-[0.5px]">Sign Up</h2>
          <div className="mt-[40px]">
            <input
              type="email"
              id="email"
              // {...register("email", { required: "Email is required" })}
              className="w-full px-3 py-2 bg-custom-blue rounded placeholder-opacity-50 focus:outline-none"
              placeholder="Email address"
            />
            <hr className="w-full h-[1px] bg-custom-grey opacity-30" />
            <input
              type="password"
              id="password"
              // {...register("password", { required: "Password is required" })}
              className="w-full px-3 py-2 bg-custom-blue rounded placeholder-opacity-30 focus:outline-none mt-[24px]"
              placeholder="Password"
            />
            <hr className="w-full h-[1px] bg-custom-grey opacity-30" />
            <input
              type="password"
              id="repeat password"
              // {...register("password", { required: "Password is required" })}
              className="w-full px-3 py-2 bg-custom-blue rounded placeholder-opacity-30 focus:outline-none mt-[24px]"
              placeholder="Repeat Password"
            />
            <hr className="w-full h-[1px] bg-custom-grey opacity-30" />
          </div>
          <div className="flex flex-col items-center justify-center mt-[40px] gap-[24px]">
            <button className="bg-custom-red pt-[15px] pb-[15px]   rounded-[6px] w-[279px] h-[48px] text-opacity-50 font-normal">
              <span>Create an account</span>
            </button>
            <p className="tracking-[0.5px]  ">
              Already have an account?
              <button className="ml-[8px] text-custom-red">Login</button>
            </p>
          </div>
        </form>
      </main>
    </div>
  );
}
