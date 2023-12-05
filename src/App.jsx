import { useRef, useState } from "react"
import Topbar from "./components/Topbar"
import Navbar from "./components/Navbar"
import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";
function App() {
  const [showBanner, setShowBanner] = useState(true);
  const productsRef = useRef(null);

  const handleBannerDismiss = () => {
    productsRef.current = productsRef.current;
  };
  return (
    <>
      <Topbar onBannerDismiss={handleBannerDismiss} />
      <Navbar productsRef={productsRef} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  )
}

export default App
