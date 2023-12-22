import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
