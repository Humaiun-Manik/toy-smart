import { Link } from "react-router-dom";
import SocialLogin from "../../components/shared/socialLogin/SocialLogin";

const ResetPassword = () => {
  const handleReset = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log(email);
  };

  return (
    <div className="md:w-2/6 bg-[#111418] mx-auto p-10 text-white rounded-xl my-10">
      <h2 className="text-center text-4xl font-semibold">Forgot password?</h2>
      <p className="text-[#6c757d] text-center md:px-20 my-5">
        Enter the email address or mobile number you used when you joined and we will send you temporary
        password.
      </p>
      <form onSubmit={handleReset}>
        <div className="form-control">
          <label className="labe text-white">
            <span className="label-text text-white text-lg">Email or Mobile Number</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email or Mobile Number"
            className="input input-bordered bg-[#232a31] text-white mt-2"
            required
          />
        </div>
        <input className="bg-[#4285f4] w-full text-xl py-2 rounded-lg my-5" type="submit" value="Continue" />
      </form>
      <div className="divider text-[#828383]">Or with Social Profile</div>
      <SocialLogin />
      <p className="text-center text-lg">
        Return to{" "}
        <Link to={"/login"} className="text-[#4285f4] hover:text-[#4286f4c0] duration-200">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default ResetPassword;
