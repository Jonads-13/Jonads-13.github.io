import React, {useState, useContext} from "react";
import emoji from "react-easy-emoji";
import StyleContext from "../assets/contexts/StyleContext";
import "../assets/styles/ToggleSwitch.scss";

const ToggleSwitch = () => {
  const {isDark} = useContext(StyleContext);
  const [isChecked, setChecked] = useState(isDark);
  const styleContext = useContext(StyleContext);

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isDark}
        onChange={() => {
          styleContext.changeTheme();
          setChecked(!isChecked);
        }}
      />
      <span className="slider round">
        <span className="emoji">{isChecked ? emoji("🌑") : emoji("☀️")}</span>
      </span>
    </label>
  );
};
export default ToggleSwitch;