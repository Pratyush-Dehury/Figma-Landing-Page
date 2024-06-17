import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex w-screen flex-col">
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Home;
