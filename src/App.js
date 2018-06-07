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
import PoliticsPage from './components/Topics/PoliticsPage/PoliticsPage'
import WomensHistoryPage from './components/Topics/WomensHistoryPage/WomensHistoryPage'
import WomenLivingHerstory from './components/Topics/WomenLivingHerstory/WomenLivingHerstory'
import OurStoryPage from './components/Topics/OurStory/OurStory'
import TechPage from './components/Topics/Technology/Technology'
import EducationPage from './components/Topics/Education/Education'
import HealthPage from './components/Topics/WomensHealth/WomensHealth'
import SciencePage from './components/Topics/Science/Science'
import ArtsPage from './components/Topics/WomenInArts/WomenInArts'
import LgbtqiPage from './components/Topics/LBGTQAI_Community/LBGTQAI_Community'
import EndingViolencePage from './components/Topics/EndingViolence/EndingViolence'
import WageGapPage from './components/Topics/WageGap/WageGap'


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

