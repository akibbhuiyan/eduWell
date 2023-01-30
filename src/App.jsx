import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./component/AboutUs/AboutUs";
import ContactUs from "./component/ContactUs/Contact";
import Home from "./component/Home/Home";
import OurService from "./component/OurServices/OurService";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/ourServices" element={<OurService />} />
      <Route path="/contactUs" element={<ContactUs />} />
    </Routes>
  );
}

export default App;
