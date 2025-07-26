import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Footer from "./Footer.jsx";
import Home from "./Home.jsx";
import FAQSection from "./FAQSection.jsx";
import MoreReasons from "./MoreReasons.jsx";
import TrendingSlider from "./Trading.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Home />
    <TrendingSlider />
    <MoreReasons />
    <FAQSection />
    <Footer />
  </StrictMode>
);
