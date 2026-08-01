import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Representation from "../pages/Representation/Representation";
import Manufacturers from "../pages/Manufacturers/Manufacturers";
import Products from "../pages/Products/Products";
import Downloads from "../pages/Downloads/Downloads";
import Compliance from "../pages/Compliance/Compliance";
import NotFound from "../pages/NotFound/NotFound";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import ComingSoon from "../pages/ComingSoon/ComingSoon";
import Contact from "../pages/Contact/Contact";
import LandSystems from "../pages/Products/Land-system/LandSystems";
import NavalSystems from "../pages/Products/Naval-system/NavalSystems";
import AerospaceSystems from "../pages/Products/Aerospace-system/AerospaceSystem";
import ElectronicsSystems from "../pages/Products/Electronics-system/ElectronicsSystem";
import HeavyMachinery from "../pages/Products/HeavyMachinery/HeavyMachinery";
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/representation" element={<Representation />} />
        <Route path="/manufacturers" element={<Manufacturers />} />
        <Route path="/products" element={<Products />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/electronics" element={<ElectronicsSystems />} />
        <Route path="/products/naval" element={<NavalSystems />} />
        <Route path="/products/aerospace" element={<AerospaceSystems />} />
        <Route path="/products/land-systems" element={<LandSystems />} />
        <Route path="/products/heavy-machinery" element={<HeavyMachinery />} />
        <Route path="/compliance" element={<Compliance />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default Router;
