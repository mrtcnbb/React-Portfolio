import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

import './ThemeSelector.css';

const colors = ['#16ffb2', '#a200ff'];

export default function ThemeSelector() {
  const { changeColor } = useContext(ThemeContext);

  return (
    <div className="theme-selector">
      <div className="theme-buttons">
        {colors.map((color) => (
          <div key={color} onClick={() => changeColor(color)} style={{ background: color }} />
        ))}
      </div>
    </div>
  );
}
