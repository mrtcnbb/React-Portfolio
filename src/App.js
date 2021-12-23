import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//components
import Navbar from './components/Navbar';

// pages
import Home from './pages/home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import ThemeSelector from './components/ThemeSelector';

// styles
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <ThemeSelector />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
