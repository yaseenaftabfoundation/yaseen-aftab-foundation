import Navbar from "./Navbar";
import NextTopLoader from "nextjs-toploader";
import Topbar from "./Topbar";
import Preloader from "./Preloader";

const Header = () => {
  return (
    <>
      {/* preloader */}
      <Preloader />
      {/* loader */}
      <NextTopLoader color="#00897b" shadow="0" height={4} showSpinner={false} />
      {/* topbar */}
      <Topbar />
      {/* navbar */}
      <Navbar />
    </>
  );
};

export default Header;
