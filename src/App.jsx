import Hero from "./layout/Hero";
import Features from "./layout/Features";
import Bestsellers from "./layout/Bestsellers";
import Values from "./layout/Values";
import Reviews from "./layout/Reviews";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="container">
      <Hero />
      <Features />
      <Bestsellers />
      <Values />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
