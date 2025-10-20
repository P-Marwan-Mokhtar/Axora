import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./pages/Home";
import Footer from "./Components/Footer";
import About from "./pages/About";
import Crew from "./pages/Crew";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Services from "./pages/Services";
import ServicesDetails from "./pages/ServicesDetails";
import Portfolio from "./pages/Portfolio";
import PortfolioDetails from "./pages/PortfolioDetails";
import Blog from "./pages/Blog";
import BLogDetails from "./pages/BLogDetails";
import BackToTop from "./Components/BackToTop";

function App() {
  return (
    <>
      <Header />
      <BackToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<About />} />
        <Route path="/team" element={<Crew />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/servicesList" element={<Services />} />
        <Route path="/servicesdetails" element={<ServicesDetails />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/PortfolioDetails" element={<PortfolioDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/bLogDetails" element={<BLogDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
