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
        <Route path="/contact" element={<ComingSoon />} />
        <Route path="/news" element={<ComingSoon />} />
        <Route path="/products/electronics" element={<ComingSoon />} />
        <Route path="/products/naval" element={<ComingSoon />} />
        <Route path="/products/aerospace" element={<ComingSoon />} />
        <Route path="/products/land-systems" element={<ComingSoon />} />
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
