import { ImGooglePlus } from "react-icons/im";
import { TbBrandGithubFilled } from "react-icons/tb";

const SocialLogin = () => {
  return (
    <div className="flex justify-center my-5">
      <div className="w-10 h-10 bg-[#db4437] rounded-full flex items-center justify-center me-5">
        <ImGooglePlus className="text-white text-2xl" />
      </div>
      <div className="w-10 h-10 bg-[#4078c0] rounded-full flex items-center justify-center">
        <TbBrandGithubFilled className="text-white text-2xl" />
      </div>
    </div>
  );
};

export default SocialLogin;
