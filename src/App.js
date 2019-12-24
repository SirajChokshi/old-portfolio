import React from 'react';
import './css/skeleton.css';
import './css/main.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// Pages
import Home from './views/Home';
import Work from './views/Work';
import About from './views/About';
import Resume from './views/Resume';
import CaseStudy from './views/CaseStudy';

// Components
import Nav from './components/Nav';
import Footer from './components/Footer';
import CatchError from "./views/CatchError";

function App() {
  return (
      <>
        <a id="top" />
      <div className="container" >
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route exact={true} path='/' render={() => (
                <Home />
            )}/>
            <Route exact={true} path='/work' render={() => (
                <Work />
            )}/>
            <Route exact={true} path='/work/:wid' render={({ match }) => (
                <CaseStudy workID={match.params.wid} />
            )}/>
            <Route exact={true} path='/about' render={() => (
                <About />
            )}/>
            <Route exact={true} path='/resume' render={() => (
                <Resume />
            )}/>
            <Route component={CatchError} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div></>
  );
}

export default App;
