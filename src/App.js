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

// ------------- Topics Pages --------------

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

// ------------- Convo Pages --------------

import EducationConvo from './components/SubTopics/EducationConvo/EducationConvo'

import EducationConvoPage from './components/Convo/EducationConvo1/EducationConvo1'



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


        {/* ------------- Convo Pages -------------- */}


        {/* ------------- Politics Convo -------------- */}

        <Route
          path="/politics/convo1"
          component={PoliticsPage}
        />
        <Route
          path="/politics/convo2"
          component={PoliticsPage}
        />
        <Route
          path="/politics/convo3"
          component={PoliticsPage}
        />
        <Route
          path="/politics/convo4"
          component={PoliticsPage}
        />
        <Route
          path="/politics/convo5"
          component={PoliticsPage}
        />
        <Route
          path="/politics/convo6"
          component={PoliticsPage}
        />
        <Route
          path="/politics/convo7"
          component={PoliticsPage}
        />
        <Route
          path="/politics/convo"
          component={PoliticsPage}
        />
        <Route
          path="/politics/convo9"
          component={PoliticsPage}
        />


        {/* ------------- Women in History Convo -------------- */}

        <Route
          path="/women_in_history/convo1"
          component={WomensHistoryPage}
        />
                <Route
          path="/women_in_history/convo2"
          component={WomensHistoryPage}
        />
                <Route
          path="/women_in_history/convo3"
          component={WomensHistoryPage}
        />
                <Route
          path="/women_in_history/convo4"
          component={WomensHistoryPage}
        />
                <Route
          path="/women_in_history/convo5"
          component={WomensHistoryPage}
        />
                <Route
          path="/women_in_history/convo6"
          component={WomensHistoryPage}
        />
                <Route
          path="/women_in_history/convo7"
          component={WomensHistoryPage}
        />
                <Route
          path="/women_in_history/convo8"
          component={WomensHistoryPage}
        />
                <Route
          path="/women_in_history/convo9"
          component={WomensHistoryPage}
        />


        {/* ------------- Women Living Herstory Convo -------------- */}


        <Route
          path="/women_in_herstory/convo1"
          component={WomenLivingHerstory}
        />
                <Route
          path="/women_in_herstory/convo2"
          component={WomenLivingHerstory}
        />
                <Route
          path="/women_in_herstory/convo3"
          component={WomenLivingHerstory}
        />
                <Route
          path="/women_in_herstory/convo4"
          component={WomenLivingHerstory}
        />
                <Route
          path="/women_in_herstory/convo5"
          component={WomenLivingHerstory}
        />
                <Route
          path="/women_in_herstory/convo6"
          component={WomenLivingHerstory}
        />
                <Route
          path="/women_in_herstory/convo7"
          component={WomenLivingHerstory}
        />
                <Route
          path="/women_in_herstory/convo8"
          component={WomenLivingHerstory}
        />
                <Route
          path="/women_in_herstory/convo9"
          component={WomenLivingHerstory}
        />

        {/* ------------- Technology Convo -------------- */}


        <Route
          path="/technology/convo1"
          component={TechPage}
        />


        {/* ------------- Education Convo -------------- */}

        <Route
          path="/education/convo1"
          component={EducationPage}
        />
                <Route
          path="/education/convo2"
          component={EducationPage}
        />
                <Route
          path="/education/convo3"
          component={EducationPage}
        />
                <Route
          path="/education/convo4"
          component={EducationPage}
        />
                <Route
          path="/education/convo5"
          component={EducationPage}
        />
                <Route
          path="/education/convo6"
          component={EducationPage}
        />
                <Route
          path="/education/convo7"
          component={EducationPage}
        />
                <Route
          path="/education/convo8"
          component={EducationPage}
        />
                <Route
          path="/education/convo9"
          component={EducationPage}
        />

        {/* ------------- Health Convo -------------- */}

        <Route
          path="/health/convo1"
          component={HealthPage}
        />

        {/* ------------- Science Convo -------------- */}

        <Route
          path="/science/convo1"
          component={SciencePage}
        />

        {/* ------------- The Arts Convo -------------- */}

        <Route
          path="/arts/convo1"
          component={ArtsPage}
        />

        {/* ------------- LBGTQI Convo -------------- */}

        <Route
          path="/lbgtqi/convo1"
          component={LgbtqiPage}
        />

        {/* ------------- Wage Gap Convo -------------- */}

        <Route
          path="/wage_gap/convo1"
          component={WageGapPage}
        />

        {/* ------------- Ending Violence Against Women Convo -------------- */}

        <Route
          path="/ending_violence/convo1"
          component={EndingViolencePage}
        />



        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />

      </Switch>
    </Router>
  </div>
);

export default App;