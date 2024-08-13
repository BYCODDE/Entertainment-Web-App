import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Logo2 from "/assets/logo.svg";

type FormValues = {
  email: string;
  password: string;
  repeatPassword: string;
};

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>();

  const navigate = useNavigate();

  const onSubmit = (data: FormValues) => {
    console.log(data);

    navigate("/");
  };

  const onLogin = () => {
    navigate("/login");
  };

  return (
    <div className="bg-custom-black flex justify-center items-center min-h-screen flex-col">
      <header>
        <img src={Logo2} alt="Logo" />
      </header>

      <main className="max-w-[327px] max-h-[440px] rounded-[10px] bg-custom-blue mt-[60px] p-[24px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-[32px] tracking-[0.5px]">Sign Up</h2>
          <div className="mt-[40px]">
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-3 py-2 bg-custom-blue rounded placeholder-opacity-50 focus:outline-none"
              placeholder="Email address"
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
            <hr className="w-full h-[1px] bg-custom-grey opacity-30" />

            <input
              type="password"
              id="password"
              {...register("password", { required: "Password is required" })}
              className="w-full px-3 py-2 bg-custom-blue rounded placeholder-opacity-30 focus:outline-none mt-[24px]"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password.message}</p>
            )}
            <hr className="w-full h-[1px] bg-custom-grey opacity-30" />

            <input
              type="password"
              id="repeatPassword"
              {...register("repeatPassword", {
                required: "Repeat Password is required",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              className="w-full px-3 py-2 bg-custom-blue rounded placeholder-opacity-30 focus:outline-none mt-[24px]"
              placeholder="Repeat Password"
            />
            {errors.repeatPassword && (
              <p className="text-red-500 text-xs">
                {errors.repeatPassword.message}
              </p>
            )}
            <hr className="w-full h-[1px] bg-custom-grey opacity-30" />
          </div>
          <div className="flex flex-col items-center justify-center mt-[40px] gap-[24px]">
            <button
              type="submit"
              className="bg-custom-red pt-[15px] pb-[15px] rounded-[6px] w-[279px] h-[48px] text-white font-normal"
            >
              <span>Create an account</span>
            </button>
            <p className="tracking-[0.5px]">
              Already have an account?
              <button className="ml-[8px] text-custom-red" onClick={onLogin}>
                Login
              </button>
            </p>
          </div>
        </form>
      </main>
    </div>
  );
}
