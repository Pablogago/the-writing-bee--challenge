import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PastWritingBees from './pages/PastWritingBees';
import './styles/App.css';

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <Router>
      <main className="app">
        <header className={`app-header ${toggleMenu ? 'open' : ''}`}>
          <img className="app-header--logo" src={`${process.env.PUBLIC_URL}/images/menu-logo.png`} alt="The Writing Bee logo"/>
          <nav className="app-header--navigation">
            <Link to="/">Home</Link>
            <Link to="/past_writing_bees">Past Writing Bees</Link>
          </nav>
          <button
              className="menu"
              onClick={_ => setToggleMenu(!toggleMenu)}
              id="nav-icon">
            <img className="menu-button" width="20" height="20" alt="menu" src={`${process.env.PUBLIC_URL}/images/menu.svg`} alt="Menu"/>
          </button>
        </header>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route exact path="/past_writing_bees">
            <PastWritingBees/>
          </Route>
        </Switch>
        <footer className="app-footer">
          <div className="app-footer--wrapper">
            <img src={`${process.env.PUBLIC_URL}/images/boomwriter_logo.png`} alt="BoomWriter Logo"/>
            <img src={`${process.env.PUBLIC_URL}/images/footer_logo.png`} alt="The Writing Bee Logo"/>
            <img src={`${process.env.PUBLIC_URL}/images/google_partner_logo.png`} alt="Google partner"/>
          </div>
          <p>The Writing Bee is powered by BoomWriter<br/>
            To find out more visit <a href="http://boomwriter.com">www.boomwriter.com</a>
				</p>
        </footer>
      </main>
    </Router>
  );
}

export default App;
