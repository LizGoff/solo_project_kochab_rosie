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
import OurStoryPage from './components/Topics/OurStory/OurStory'
import TechPage from './components/Topics/Technology/Technology'
import EducationPage from './components/Topics/Education/Education'
import HealthPage from './components/Topics/WomensHealth/WomensHealth'
import SciencePage from './components/Topics/Science/Science'
import ArtsPage from './components/Topics/WomenInArts/WomenInArts'
import LgbtqiPage from './components/Topics/LBGTQAI_Community/LBGTQAI_Community'
import EndingViolencePage from './components/Topics/EndingViolence/EndingViolence'
import WageGapPage from './components/Topics/WageGap/WageGap'

import EducationSub from './components/SubTopics/EducationSub/EducationSub';
import EndingViolenceSub from './components/SubTopics/EndingViolenceSub/EndingViolenceSub';


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
          path="/politics_convo1"
          component={PoliticsPage}
        />
        <Route
          path="/politics_convo2"
          component={PoliticsPage}
        />
        <Route
          path="/politics_convo3"
          component={PoliticsPage}
        />
        <Route
          path="/politics_convo4"
          component={PoliticsPage}
        />
        <Route
          path="/politics_convo5"
          component={PoliticsPage}
        />
        <Route
          path="/politics_convo6"
          component={PoliticsPage}
        />
        <Route
          path="/politics_convo7"
          component={PoliticsPage}
        />
        <Route
          path="/politics_convo8"
          component={PoliticsPage}
        />
        <Route
          path="/politics_convo9"
          component={PoliticsPage}
        />


        {/* ------------- Women in History Convo -------------- */}

        <Route
          path="/women_in_history_convo1"
          component={WomensHistoryPage}
        />
        <Route
          path="/women_in_history_convo2"
          component={WomensHistoryPage}
        />
        <Route
          path="/women_in_history_convo3"
          component={WomensHistoryPage}
        />
        <Route
          path="/women_in_history_convo4"
          component={WomensHistoryPage}
        />
        <Route
          path="/women_in_history_convo5"
          component={WomensHistoryPage}
        />
        <Route
          path="/women_in_history_convo6"
          component={WomensHistoryPage}
        />
        <Route
          path="/women_in_history_convo7"
          component={WomensHistoryPage}
        />
        <Route
          path="/women_in_history_convo8"
          component={WomensHistoryPage}
        />
        <Route
          path="/women_in_history_convo9"
          component={WomensHistoryPage}
        />


        {/* ------------- Women Living Herstory Convo -------------- */}


        <Route
          path="/herstory_convo1"
          component={WomenLivingHerstory}
        />
        <Route
          path="/herstory_convo2"
          component={WomenLivingHerstory}
        />
        <Route
          path="/herstory_convo3"
          component={WomenLivingHerstory}
        />
        <Route
          path="/herstory_convo4"
          component={WomenLivingHerstory}
        />
        <Route
          path="/herstory_convo5"
          component={WomenLivingHerstory}
        />
        <Route
          path="/herstory_convo6"
          component={WomenLivingHerstory}
        />
        <Route
          path="/herstory_convo7"
          component={WomenLivingHerstory}
        />
        <Route
          path="/herstory_convo8"
          component={WomenLivingHerstory}
        />
        <Route
          path="/herstory_convo9"
          component={WomenLivingHerstory}
        />


        {/* ------------- Technology Convo -------------- */}


        <Route
          path="/technology_convo1"
          component={TechPage}
        />
        <Route
          path="/technology_convo2"
          component={TechPage}
        />
        <Route
          path="/technology_convo3"
          component={TechPage}
        />
        <Route
          path="/technology_convo4"
          component={TechPage}
        />
        <Route
          path="/technology_convo5"
          component={TechPage}
        />
        <Route
          path="/technology_convo6"
          component={TechPage}
        />
        <Route
          path="/technology_convo7"
          component={TechPage}
        />
        <Route
          path="/technology_convo8"
          component={TechPage}
        />
        <Route
          path="/technology_convo9"
          component={TechPage}
        />

        {/* ------------- Education Convo -------------- */}

        <Route
          path="/education_convo1"
          component={EducationSub}
        />
        <Route
          path="/education_convo2"
          component={EducationSub}
        />
        <Route
          path="/education_convo3"
          component={EducationSub}
        />
        <Route
          path="/education_convo4"
          component={EducationSub}
        />
        <Route
          path="/education_convo5"
          component={EducationSub}
        />
        <Route
          path="/education_convo6"
          component={EducationSub}
        />
        <Route
          path="/education_convo7"
          component={EducationSub}
        />
        <Route
          path="/education_convo8"
          component={EducationSub}
        />
        <Route
          path="/education_convo9"
          component={EducationSub}
        />

        {/* ------------- Health Convo -------------- */}

        <Route
          path="/health_convo1"
          component={HealthPage}
        />
        <Route
          path="/health_convo2"
          component={HealthPage}
        />
        <Route
          path="/health_convo3"
          component={HealthPage}
        />
        <Route
          path="/health_convo4"
          component={HealthPage}
        />
        <Route
          path="/health_convo5"
          component={HealthPage}
        />
        <Route
          path="/health_convo6"
          component={HealthPage}
        />
        <Route
          path="/health_convo7"
          component={HealthPage}
        />
        <Route
          path="/health_convo8"
          component={HealthPage}
        />
        <Route
          path="/health_convo9"
          component={HealthPage}
        />

        {/* ------------- Science Convo -------------- */}

        <Route
          path="/science_convo1"
          component={SciencePage}
        />
        <Route
          path="/science_convo2"
          component={SciencePage}
        />
        <Route
          path="/science_convo3"
          component={SciencePage}
        />
        <Route
          path="/science_convo4"
          component={SciencePage}
        />
        <Route
          path="/science_convo5"
          component={SciencePage}
        />
        <Route
          path="/science_convo6"
          component={SciencePage}
        />
        <Route
          path="/science_convo7"
          component={SciencePage}
        />
        <Route
          path="/science_convo8"
          component={SciencePage}
        />
        <Route
          path="/science_convo9"
          component={SciencePage}
        />

        {/* ------------- The Arts Convo -------------- */}

        <Route
          path="/arts_convo1"
          component={ArtsPage}
        />
        <Route
          path="/arts_convo2"
          component={ArtsPage}
        />
        <Route
          path="/arts_convo3"
          component={ArtsPage}
        />
        <Route
          path="/arts_convo4"
          component={ArtsPage}
        />
        <Route
          path="/arts_convo5"
          component={ArtsPage}
        />
        <Route
          path="/arts_convo6"
          component={ArtsPage}
        />
        <Route
          path="/arts_convo7"
          component={ArtsPage}
        />
        <Route
          path="/arts_convo8"
          component={ArtsPage}
        />
        <Route
          path="/arts_convo9"
          component={ArtsPage}
        />

        {/* ------------- LBGTQI Convo -------------- */}

        <Route
          path="/lbgtqi_convo1"
          component={LgbtqiPage}
        />
        <Route
          path="/lbgtqi_convo2"
          component={LgbtqiPage}
        />
        <Route
          path="/lbgtqi_convo3"
          component={LgbtqiPage}
        />
        <Route
          path="/lbgtqi_convo4"
          component={LgbtqiPage}
        />
        <Route
          path="/lbgtqi_convo5"
          component={LgbtqiPage}
        />
        <Route
          path="/lbgtqi_convo6"
          component={LgbtqiPage}
        />
        <Route
          path="/lbgtqi_convo7"
          component={LgbtqiPage}
        />
        <Route
          path="/lbgtqi_convo8"
          component={LgbtqiPage}
        />
        <Route
          path="/lbgtqi_convo9"
          component={LgbtqiPage}
        />

        {/* ------------- Wage Gap Convo -------------- */}

        <Route
          path="/wage_gap_convo1"
          component={WageGapPage}
        />
        <Route
          path="/wage_gap_convo2"
          component={WageGapPage}
        />
        <Route
          path="/wage_gap_convo3"
          component={WageGapPage}
        />
        <Route
          path="/wage_gap_convo4"
          component={WageGapPage}
        />
        <Route
          path="/wage_gap_convo5"
          component={WageGapPage}
        />
        <Route
          path="/wage_gap_convo6"
          component={WageGapPage}
        />
        <Route
          path="/wage_gap_convo7"
          component={WageGapPage}
        />
        <Route
          path="/wage_gap_convo8"
          component={WageGapPage}
        />
        <Route
          path="/wage_gap_convo9"
          component={WageGapPage}
        />

        {/* ------------- Ending Violence Against Women Convo -------------- */}

        <Route
          path="/ending_violence_convo1"
          component={EndingViolenceSub}
        />
        <Route
          path="/ending_violence_convo2"
          component={EndingViolenceSub}
        />
        <Route
          path="/ending_violence_convo3"
          component={EndingViolenceSub}
        />
        <Route
          path="/ending_violence_convo4"
          component={EndingViolenceSub}
        />
        <Route
          path="/ending_violence_convo5"
          component={EndingViolenceSub}
        />
        <Route
          path="/ending_violence_convo6"
          component={EndingViolenceSub}
        />
        <Route
          path="/ending_violence_convo7"
          component={EndingViolenceSub}
        />
        <Route
          path="/ending_violence_convo8"
          component={EndingViolenceSub}
        />
        <Route
          path="/ending_violence_convo9"
          component={EndingViolenceSub}
        />

        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />

      </Switch>
    </Router>
  </div>
);

export default App;