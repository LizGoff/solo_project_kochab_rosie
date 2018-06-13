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
import ResourcePage from './components/Resource/Resource';


// ------------- Topics Pages --------------

import PoliticsPage from './components/Topics/PoliticsPage/PoliticsPage'
import WomensHistoryPage from './components/Topics/WomensHistoryPage/WomensHistoryPage'
import WomenLivingHerstory from './components/Topics/WomenLivingHerstory/WomenLivingHerstory'
import TechPage from './components/Topics/Technology/Technology'
import EducationPage from './components/Topics/Education/Education'
import HealthPage from './components/Topics/WomensHealth/WomensHealth'
import SciencePage from './components/Topics/Science/Science'
import ArtsPage from './components/Topics/WomenInArts/WomenInArts'
import LgbtqiPage from './components/Topics/LGBTQAI_Community/LGBTQAI_Community'
import EndingViolencePage from './components/Topics/EndingViolence/EndingViolence'
import WageGapPage from './components/Topics/WageGap/WageGap'

import EducationSub from './components/SubTopics/EducationSub/EducationSub';
import EndingViolenceSub from './components/SubTopics/EndingViolenceSub/EndingViolenceSub';
import LgbtqiSub from './components/SubTopics/LBGTQAI_CommunitySub/LBGTQAI_CommunitySub';
import PoliticsSub from './components/SubTopics/PoliticsSub/PoliticsSub';
import ScienceSub from './components/SubTopics/ScienceSub/ScienceSub';
import TechSub from './components/SubTopics/TechnologySub/TechnologySub';
import WageGapSub from './components/SubTopics/WageGapSub/WageGapSub';
import ArtsSub from './components/SubTopics/WomenInArtsSub/WomenInArtsSub';
import WomenLivingHerstorySub from './components/SubTopics/WomenLivingHerstorySub/WomenLivingHerstorySub';
import WomensHistorySub from './components/SubTopics/WomensHistorySub/WomensHistorySub';
import HealthSub from './components/SubTopics/WomensHealthSub/WomensHealthSub';


import './styles/main.css';


const App = () => (
  <div>
    <div id="header">
      <Header title="Rosie's Resistance" id="header" />
    </div>
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
          path="/resource"
          component={ResourcePage}
        />

        {/* ------------- Topics Pages -------------- */}

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
          path="/lgbtqi"
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

        {/* ------------- Convo Pages -------------- */}

        <Route
          path="/politics_convo/:id"
          component={PoliticsSub}
        />

        <Route
          path="/women_in_history_convo/:id"
          component={WomensHistorySub}
        />

        <Route
          path="/herstory_convo/:id"
          component={WomenLivingHerstorySub}
        />

        <Route
          path="/technology_convo/:id"
          component={TechSub}
        />

        <Route
          path="/education_convo/:id"
          component={EducationSub}
        />

        <Route
          path="/health_convo/:id"
          component={HealthSub}
        />

        <Route
          path="/science_convo/:id"
          component={ScienceSub}
        />

        <Route
          path="/arts_convo/:id"
          component={ArtsSub}
        />

        <Route
          path="/lgbtqi_convo/:id"
          component={LgbtqiSub}
        />

        <Route
          path="/wage_gap_convo/:id"
          component={WageGapSub}
        />

        <Route
          path="/ending_violence_convo/:id"
          component={EndingViolenceSub}
        />

        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />

      </Switch>
    </Router>
  </div>
);

export default App;