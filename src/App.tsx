import diceIcon from "/assets/images/icon-dice.svg";
import "./App.css";

const App = () => {
  return (
    <main className="main_app">
      <h1 className="main_title">Advice #117</h1>
      <p className="main_subtitle">
        "It is easy to sit up and take notice, what's difficult is getting up
        and taking action."
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
      <button className="switch_button">
        <img src={diceIcon} alt="dice icon" className="dice_button_icon" />
      </button>
    </main>
  );
};

export default App;
