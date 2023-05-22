import { Route, Routes } from "react-router";
import bg from "./Resources/assets/images/5570863.jpg";
import NavigationBar from "./Resources/components/NavigationBar";
import LandingPage from "./Resources/pages/LandingPage";
import About from "./Resources/pages/About";
import Properties from "./Resources/pages/Properties";
import Contact from "./Resources/pages/Contact";

function App() {
  return (
    <section
      className="overflow-hidden bg-no-repeat bg-cover bg-fixed"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <NavigationBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </section>
  );
}

export default App;
