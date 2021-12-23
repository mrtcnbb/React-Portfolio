import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';

// styles
import './About.css';

const infinity = '\u221E';

export default function About() {
  const [dbutton, setDbutton] = useState(true);
  const [story, setStory] = useState(false);
  const [abroad, setAbroad] = useState(false);
  const [comeback, setComeback] = useState(false);
  const [fe, setFe] = useState(false);
  const [finish, setFinish] = useState(false);

  const { changeColor } = useContext(ThemeContext);

  useEffect(() => {
    return () => changeColor('#001791');
  }, []);

  return (
    <div className="about">
      <div className="story-button">
        {dbutton && (
          <p
            className="button"
            onClick={() => {
              setStory(true);
              setDbutton(false);
            }}
          >
            Click and Get To Know Me
          </p>
        )}
      </div>
      <ul className="list">
        {story && (
          <li className="card">
            <h2>University Graduation</h2>
            <p>Graduated from the department of Material Science and Engineering in 2017 from Anadolu University.</p>
            <button className="card-button" onClick={() => setAbroad(true)}>
              Go Abroad
            </button>
          </li>
        )}
        {abroad && (
          <li className="card">
            <h2>Qatar Experience (2018 - 2019)</h2>
            <p>Worked as site engineer and company representer in MDD project in</p>
            <button className="card-button" onClick={() => setComeback(true)}>
              Come Back To Homeland
            </button>
          </li>
        )}
        {comeback && (
          <li className="card">
            <h2>Overseas Sales Experience (2020 - 2021)</h2>
            <p>Worked as an Aftersales Services Overseas Responsible at a crane company </p>
            <button className="card-button" onClick={() => setFe(true)}>
              Go for Coding
            </button>
          </li>
        )}
        {fe && (
          <li className="card">
            <h2>Coding Journey (2021 - {infinity})</h2>
            <p>
              Coded my first 'hello world' in 2021 and my coding journey started and this journey is evaluated to
              frontend development path.
            </p>
            <button className="card-button" onClick={() => setFinish(true)}>
              Not Enough?
            </button>
          </li>
        )}
        {finish && (
          <li className="card">
            <h2>That's All Mate</h2>
            <p>
              Now you know some about my career and if you want to get in touch with me and discover more, button is
              down below.
            </p>
            <Link className="card-button" to="/contact">
              Click to Contact Me
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}
