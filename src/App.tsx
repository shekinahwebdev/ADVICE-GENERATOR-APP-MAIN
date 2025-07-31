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
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet="/images/pattern-divider-desktop.svg"
        />
        <source
          media="(max-width: 767px)"
          srcSet="/images/pattern-divider-mobile.svg"
        />
        <button className="switch_button">
          <img src={diceIcon} alt="dice icon" className="dice_button_icon" />
        </button>
      </picture>
    </main>
  );
};

export default App;
