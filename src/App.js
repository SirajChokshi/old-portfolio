import React from 'react';
import './css/skeleton.css';
import './css/main.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// Pages
import Home from './views/Home';
import Work from './views/Work';
import About from './views/About';
import Resume from './views/Resume';
import FileManager from './views/FileManager';
import Finance from "./views/Finance";

// Components
import Nav from './components/Nav';
import Footer from './components/Footer';
import CatchError from "./views/CatchError";
import StartupMatch from "./views/StartupMatch";

function App() {
  return (
      <div className="container" >
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Nav />
          <Switch>
            <Route exact={true} path='/' render={() => (
                <Home />
            )}/>
            <Route exact={true} path='/work' render={({ match }) => (
                <Work filter={match.params.tag} />
            )}/>
            <Route exact={true} path='/work/fileviewer' render={() => (
                <FileManager />
            )}/>
            <Route exact={true} path='/work/startupmatch' render={() => (
                <StartupMatch />
            )}/>
            <Route exact={true} path='/work/finance' render={() => (
                <Finance />
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
      </div>
  );
}

export default App;
