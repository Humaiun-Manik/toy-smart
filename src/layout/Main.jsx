import Footer from "../components/shared/footer/Footer";
import Header from "../components/shared/header/Header";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
