import { useEffect } from 'react';
import useTheme from '../../hooks/useTheme';

// styles
import './Contact.css';

import Linkedin from '../../assets/linkedin-logo.png';
import Github from '../../assets/github.png';
import Codepen from '../../assets/codepen.png';

export default function Contact() {
  const { changeColor } = useTheme();

  useEffect(() => {
    return () => changeColor('#A200FF');
  }, []);

  return (
    <div className="contact">
      <div className="card linkedin">
        <h2>LinkedIn</h2>
        <p>
          To reach me via{' '}
          <a href="https://www.linkedin.com/in/muratcan-baba/" target="_blank" rel="noreferrer">
            <img src={Linkedin} alt="linkedin" />
          </a>
        </p>
      </div>
      <div className="card github">
        <h2>Github</h2>
        <p>
          To reach me via{' '}
          <a href="https://github.com/mrtcnbb" target="blank">
            <img src={Github} alt="linkedin" />
          </a>
        </p>
      </div>
      <div className="card codepen">
        <h2>Codepen</h2>
        <p>
          To reach me via{' '}
          <a href="https://codepen.io/nctrm" target="_blank" rel="noreferrer">
            <img src={Codepen} alt="linkedin" />
          </a>
        </p>
      </div>
    </div>
  );
}
