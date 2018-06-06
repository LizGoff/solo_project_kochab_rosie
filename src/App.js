import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import UserPage from './components/UserPage/UserPage';
import InfoPage from './components/InfoPage/InfoPage';
import PoliticsPage from './components/PoliticsPage/PoliticsPage'
import WomensHistoryPage from './components/WomensHistoryPage/WomensHistoryPage'
import WomenLivingHerstory from './components/WomenLivingHerstory/WomenLivingHerstory'
import OurStoryPage from './components/OurStory/OurStory'
import TechPage from './components/Technology/Technology'
import EducationPage from './components/Education/Education'
import HealthPage from './components/WomensHealth/WomensHealth'
import SciencePage from './components/Science/Science'
import ArtsPage from './components/WomenInArts/WomenInArts'
import LgbtqiPage from './components/LBGTQAI_Community/LBGTQAI_Community'
import EndingViolencePage from './components/EndingViolence/EndingViolence'
import WageGapPage from './components/WageGap/WageGap'


import './styles/main.css';

const App = () => (
  <div>
    <Header title="Rosie's Resistance" />
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route
          path="/home"
          component={LoginPage}
        />
        <Route
          path="/register"
          component={RegisterPage}
        />
        <Route
          path="/user"
          component={UserPage}
        />
        <Route
          path="/info"
          component={InfoPage}
        />
        <Route
          path="/politics"
          component={PoliticsPage}
        />
        <Route
          path="/women_in_history"
          component={WomensHistoryPage}
        />
        <Route
          path="/women_in_herstory"
          component={WomenLivingHerstory}
        />
        <Route
          path="/our_story"
          component={OurStoryPage}
        />
        <Route
          path="/technology"
          component={TechPage}
        />
        <Route
          path="/education"
          component={EducationPage}
        />
        <Route
          path="/health"
          component={HealthPage}
        />
        <Route
          path="/science"
          component={SciencePage}
        />
        <Route
          path="/arts"
          component={ArtsPage}
        />
        <Route
          path="/lbgtqi"
          component={LgbtqiPage}
        />
          <Route
          path="/wage_gap"
          component={WageGapPage}
        />
          <Route
          path="/ending_violence"
          component={EndingViolencePage}
        />
        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />

      </Switch>
    </Router>
  </div>
);

export default App;

/* <Route
path="/"
component={Page}
/> */

