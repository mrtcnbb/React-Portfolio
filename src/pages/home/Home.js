import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

import SelfPic from '../../assets/self-picture.jpg';

// styles
import './Home.css';

export default function Home() {
  const { changeColor } = useContext(ThemeContext);

  useEffect(() => {
    return () => changeColor('#16ffb2');
  }, []);

  return (
    <div className="home">
      <div className="pic">
        <img src={SelfPic} alt="pic" />
      </div>
      <div className="text">
        <h2>Hey there! This is Muratcan Baba</h2>
        <p>
          I am an aspiring frontend developer and currently studying <em>ReactJS</em> which is a JavaScript library.
        </p>
        <Link className="about-me" to="/about">
          More About Me
        </Link>
      </div>
    </div>
  );
}
