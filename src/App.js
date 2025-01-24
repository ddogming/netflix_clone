import "./App.scss";
import Banner from "./components/Banner";
import FAQ from "./components/FAQ";
import Header from "./components/Header";
import Membership from "./components/Membership";
import Whyjoin from "./components/Whyjoin";
import Footer from "./components/Footer";
import MoveSlider from "./components/MoveSlider";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={
    <div className="app"> 
      <Header />
      <Banner />
      <MoveSlider />
      <Whyjoin/>
      <FAQ/>
      <Membership/>
      <Footer/>
    </div>
    }/>
    <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;