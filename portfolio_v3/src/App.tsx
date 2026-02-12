import "./App.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import { useState } from "react";

function App() {
  const [sliderPercentage, setSliderPercentage] = useState(0);

  return (
    <>
      <Header onSliderChange={setSliderPercentage} />
      <Main />
      <Footer />
    </>
  );
}

export default App;
