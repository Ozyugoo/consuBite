import Input from "../../../components/InputFields/Input";
import Button from "../../../components/buttons/Button";
import GoogleButton from "../../../components/buttons/GoogleButton";

function Login() {
  return (
    <div className="bg-[#000] bg-opacity-25 w-screen h-screen flex place-items-center z-10">
      <div className="bg-custom-white w-[40%] h-fit mx-auto px-[48px] py-[32px] rounded-[24px] flex flex-col gap-[24px] font-poppins">
        <div className="flex flex-row w-full place-content-end">
          <img src="/icons/close modal icon.svg" alt="close modal icon" />
        </div>
        <div className="text-center text-[24px] text-custom-black font-semibold">
          Welcome Back!
        </div>
        <GoogleButton>Login with Google</GoogleButton>
        <div className="flex flex-col gap-[24px] w-full">
          <Input
            label="Email"
            placeholder="Email Address"
            type="email"
            // value={email}
          />
          <Input
            label="Password"
            placeholder="Password"
            type="password"
            // value={password}
          />
        </div>
        <Button variant="primary">Login</Button>

        <div className="w-full p-[10px] text-custom-red text-xs font-normal text-center">
          Forgot Password?
        </div>
        <div className="flex flex-row gap-[4px] w-full place-items-center justify-center">
          <div className="text-xs font-normal text-custom-black">
            No Account yet?
          </div>
          <div className="text-xs font-semibold text-custom-red">SIGN UP</div>
        </div>
      </div>
    </div>
  );
}

export default Login;
