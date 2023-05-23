import { Route, Routes } from "react-router";
import bg from "./Resources/assets/images/5570863.jpg";
import NavigationBar from "./Resources/components/NavigationBar";
import LandingPage from "./Resources/pages/LandingPage";
import About from "./Resources/pages/About";
import Properties from "./Resources/pages/Properties";
import Contact from "./Resources/pages/Contact";
import Footer from "./Resources/components/Footer";
import whatsappicon from "./Resources/assets/icons/whatsapp.png";

function App() {
  return (
    <section
      className="overflow-hidden bg-no-repeat bg-cover bg-fixed"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <a href="https://wa.me/+971555147420?text=">
        <img
          src={whatsappicon}
          className="lg:w-16 w-12 fixed bottom-10 right-10 z-50"
          alt="whatsappicon"
        />
      </a>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
