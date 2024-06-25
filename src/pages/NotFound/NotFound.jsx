import Footer from "../../componants/Footer/Footer";
import Navbar from "../../componants/Navbar/Navbar";

const NotFound = () => {
  return (
    <div className="min-w-[100vw] min-h-screen flex flex-col justify-between items-center">
      <Navbar />
      <h1 className="text-8xl my-64">Oops! Page Not Found</h1>
      <Footer />
    </div>
  );
};

export default NotFound;
