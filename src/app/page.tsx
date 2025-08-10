import Features from "@/components/features-section";
import Footer from "@/components/footer-section";
import Navbar from "@/components/navbar";
import Register from "@/components/register";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Register />
      <Features />
      <Footer />
    </div>
  );
};

export default HomePage;
