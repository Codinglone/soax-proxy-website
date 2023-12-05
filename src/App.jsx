import { useRef, useState } from "react"
import Topbar from "./components/Topbar"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
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
      <Hero />
    </>
  )
}

export default App
