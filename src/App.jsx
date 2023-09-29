import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Companies from "./Components/Companies";
import Residencies from "./Components/Residencies";
import Value from "./Components/Value";
import Contact from "./Components/Contact";
import GetStarted from "./Components/GetStarted";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <div className="relative bg-black">
        <div className="absolute h-80 w-80 bg-[#ffffff85] rounded-full blur-[100px]" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
