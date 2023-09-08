import { Link } from "react-router-dom";
import SocialLogin from "../../components/shared/socialLogin/SocialLogin";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Register = () => {
  const [passwordType, setPasswordType] = useState("password");

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const img = form.image.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, img, email, password);
  };

  return (
    <div className="md:w-2/6 bg-[#111418] mx-auto p-10 text-white rounded-xl my-10">
      <h2 className="text-center text-4xl font-semibold mb-10">Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className="form-control my-5">
          <label className="labe text-white">
            <span className="label-text text-white text-lg">Full Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            className="input input-bordered bg-[#232a31] text-white mt-2"
            required
          />
        </div>
        <div className="form-control my-5">
          <label className="labe text-white">
            <span className="label-text text-white text-lg">Profile Picture</span>
          </label>
          <input
            type="text"
            name="image"
            placeholder="Enter Image URL"
            className="input input-bordered bg-[#232a31] text-white mt-2"
            required
          />
        </div>
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
        <div className="flex items-center">
          <input type="checkbox" className="checkbox checkbox-info checkbox-sm me-3" />
          <p>
            I agree to the <Link className="text-[#4285f4] hover:text-[#4286f4c0] duration-200">Terms</Link>{" "}
            and <Link className="text-[#4285f4] hover:text-[#4286f4c0] duration-200">Privacy Policy</Link>.
          </p>
        </div>
        <input className="bg-[#4285f4] w-full text-xl py-2 rounded-lg my-5" type="submit" value="Sign Up" />
      </form>
      <div className="divider text-[#828383]">Or with Social Profile</div>
      <SocialLogin />
      <p className="text-center text-lg">
        Already have an account?{" "}
        <Link to={"/login"} className="text-[#4285f4] hover:text-[#4286f4c0] duration-200">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default Register;
