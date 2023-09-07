import { SlMap, SlSocialFacebook, SlSocialTwitter } from "react-icons/sl";
import { MdAlternateEmail } from "react-icons/md";
import { PiInstagramLogo, PiPhoneCall, PiYoutubeLogoLight } from "react-icons/pi";
import { ImPinterest2 } from "react-icons/im";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="md:pt-60 h-full bg-[url('https://i.ibb.co/d6VBwYv/footer-1-041900e5-258e-4ed1-b56f-37bb763eb759.webp')] bg-no-repeat">
      <div className="footer p-10 text-base-content  max-w-screen-2xl mx-auto">
        <aside>
          <img className="h-20" src="https://i.ibb.co/WnFRwDg/toysmart-logo.png" alt="" />
          <p className="md:text-lg md:my-3">
            A kids toy shop is a store that specializes in selling toys and games <br /> designed specifically
            for children.
          </p>
          <div className="flex items-center">
            <SlMap className="md:text-xl me-4 text-[#ff0c00]" />
            <p className="md:text-lg">Address: 1212 Gulshan, Dhaka</p>
          </div>
          <div className="flex items-center">
            <MdAlternateEmail className="md:text-2xl me-3 text-[#ff0c00]" />
            <p className="md:text-lg">Email: hello@example.com</p>
          </div>
          <div className="flex items-center">
            <PiPhoneCall className="md:text-2xl me-3 text-[#ff0c00]" />
            <p className="md:text-lg">Phone: +880 1700001199</p>
          </div>
        </aside>
        <nav>
          <header className="footer-title md:text-xl text-[#4285f4] md:mb-4">Quick Links</header>
          <a className="link link-hover md:text-lg md:mb-2 hover:text-[#4285f4] hover:no-underline duration-200">
            Help Center
          </a>
          <a className="link link-hover md:text-lg md:mb-2 hover:text-[#4285f4] hover:no-underline duration-200">
            Redeem Voucher
          </a>
          <a className="link link-hover md:text-lg md:mb-2 hover:text-[#4285f4] hover:no-underline duration-200">
            Contact Us
          </a>
          <a className="link link-hover md:text-lg md:mb-2 hover:text-[#4285f4] hover:no-underline duration-200">
            Policies & Rules
          </a>
          <a className="link link-hover md:text-lg md:mb-2 hover:text-[#4285f4] hover:no-underline duration-200">
            Check Offer List
          </a>
        </nav>
        <nav>
          <header className="footer-title md:text-xl text-[#4285f4] md:mb-4">Information</header>
          <a className="link link-hover md:text-lg md:mb-2 hover:text-[#4285f4] hover:no-underline duration-200">
            Product Support
          </a>
          <a className="link link-hover md:text-lg md:mb-2 hover:text-[#4285f4] hover:no-underline duration-200">
            Checkout
          </a>
          <a className="link link-hover md:text-lg md:mb-2 hover:text-[#4285f4] hover:no-underline duration-200">
            License Policy
          </a>
          <a className="link link-hover md:text-lg md:mb-2 hover:text-[#4285f4] hover:no-underline duration-200">
            Affiliate
          </a>
          <a className="link link-hover md:text-lg md:mb-2 hover:text-[#4285f4] hover:no-underline duration-200">
            About Us
          </a>
        </nav>
        <nav>
          <header className="footer-title md:text-xl text-[#4285f4] md:mb-4">Follow Us On</header>
          <a className="link link-hover md:text-xl md:mb-2 flex items-center hover:text-[#4285f4] hover:no-underline duration-200">
            <SlSocialFacebook className="me-3" />
            Facebook
          </a>
          <a className="link link-hover md:text-lg md:mb-2 flex items-center hover:text-[#4285f4] hover:no-underline duration-200">
            <SlSocialTwitter className="me-3" />
            Twitter
          </a>
          <a className="link link-hover md:text-lg md:mb-2 flex items-center hover:text-[#4285f4] hover:no-underline duration-200">
            <PiInstagramLogo className="me-3" />
            Instagram
          </a>
          <a className="link link-hover md:text-lg md:mb-2 flex items-center hover:text-[#4285f4] hover:no-underline duration-200">
            <PiYoutubeLogoLight className="me-3" />
            Youtube
          </a>
          <a className="link link-hover md:text-lg md:mb-2 flex items-center hover:text-[#4285f4] hover:no-underline duration-200">
            <ImPinterest2 className="me-3" />
            Pinterest
          </a>
        </nav>
      </div>
      <p className="bg-[#fbbc05] py-5 text-center md:text-lg">
        &copy; {currentYear} Toy Smart. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
