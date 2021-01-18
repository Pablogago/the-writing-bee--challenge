import React from 'react';
import Logo from './images/menu-logo.png';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './styles/App.css';
import HomePage from './pages/HomePage';
import PastWritingBees from './pages/PastWritingBees';
import BoomWriterLogo from './images/boomwriter_logo.png';
import LogoRev from './images/footer_logo.png';
import GooglePartnerLogo from './images/google_partner_logo.png';
import { ReactComponent as Menu } from './images/menu.svg';

function App() {
  return (
    <Router>
      <main className="app">
        <header className="app-header">
          <img className="app-header--logo" src={Logo} alt="The Writing Bee logo"/>
          <nav className="app-header--navigation">
            <Link to="/">Home</Link>
            <Link to="/past_writing_bees">Past Writing Bees</Link>
          </nav>
          <button
              className="menu"
              id="nav-icon">
            <Menu className="menu-button" width="20" height="20" title="menu"/>
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
            <img src={BoomWriterLogo} alt="BoomWriter Logo"/>
            <img src={LogoRev} alt="The Writing Bee Logo"/>
            <img src={GooglePartnerLogo} alt="Google partner"/>
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
