import "./App.css";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Works from "./Components/Works";
import Community from "./Components/Community";
import Pixelgrade from "./Components/Pixelgrade";
import Helping from "./Components/Helping";
import Site from "./Components/Site";
import Customers from './Components/Customers';


function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Works />
      <Community />
      <Pixelgrade />
      <Helping />
      <Site />
      <Customers />
    </>
  );
}

export default App;
