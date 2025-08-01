import diceIcon from "/assets/images/icon-dice.svg";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [clicked, setClicked] = useState(false);
  const [adviceapi, setAdviceApi] = useState(
    "It is easy to sit up and take notice, what's difficult is getting up and taking action."
  );

  const fetchApi = async () => {
    setClicked(true);
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdviceApi(data.slip.advice);
    } catch (error) {
      console.error("Failed to fetch api:", error);
    }
    setClicked(false);
  };

  return (
    <main className="main_app">
      <h1 className="main_title">Advice #117</h1>
      <p className="main_subtitle">
        {clicked ? "Loading advice..." : `"${adviceapi}"`}
      </p>
      <div className="divider">
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet="/assets/images/pattern-divider-desktop.svg"
          />
          <source
            media="(max-width: 767px)"
            srcSet="/assets/images/pattern-divider-mobile.svg"
          />
          <img
            src="/assets/images/pattern-divider-desktop.svg"
            alt="divider pattern"
            className="divider_pattern"
          />
        </picture>
      </div>
      <button className="switch_button" onClick={fetchApi}>
        <img src={diceIcon} alt="dice icon" className="dice_button_icon" />
      </button>
    </main>
  );
};

export default App;
