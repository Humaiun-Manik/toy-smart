import { Link } from "react-router-dom";
import SocialLogin from "../../components/shared/socialLogin/SocialLogin";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";

const Login = () => {
  const [passwordType, setPasswordType] = useState("password");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  return (
    <div className="md:w-2/6 bg-[#111418] mx-auto p-10 text-white rounded-xl my-10">
      <h2 className="text-center text-4xl font-semibold mb-10">Sign In</h2>
      <form onSubmit={handleLogin}>
        <div className="form-control">
          <label className="labe text-white">
            <span className="label-text text-white text-lg">Email Address</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            className="input input-bordered bg-[#232a31] text-white mt-2"
            required
          />
        </div>
        <div className="form-control my-5">
          <label className="labe text-white">
            <span className="label-text text-white text-lg">Password</span>
          </label>
          <div className="relative">
            <input
              type={passwordType}
              name="password"
              placeholder="Enter Password"
              className="input input-bordered w-full bg-[#232a31] text-white mt-2"
              required
            />
            {passwordType === "password" ? (
              <AiOutlineEyeInvisible
                onClick={() => setPasswordType("text")}
                className="absolute top-1/3 mt-1 right-5 text-xl cursor-pointer"
              />
            ) : (
              <AiOutlineEye
                onClick={() => setPasswordType("password")}
                className="absolute top-1/3 mt-1 right-5 text-xl cursor-pointer"
              />
            )}
          </div>
        </div>
        <Link to={"/reset"}>
          <p className="text-end text-[#4285f4] hover:text-[#4286f4c0] duration-200">Forgot Password ?</p>
        </Link>
        <input className="bg-[#4285f4] w-full text-xl py-2 rounded-lg my-5" type="submit" value="Sign In" />
      </form>
      <div className="divider text-[#828383]">Or with Social Profile</div>
      <SocialLogin />
      <p className="text-center text-lg">
        Do not have an account?{" "}
        <Link to={"/register"} className="text-[#4285f4] hover:text-[#4286f4c0] duration-200">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
