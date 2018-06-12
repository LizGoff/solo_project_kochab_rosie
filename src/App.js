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
import LgbtqiPage from './components/Topics/LBGTQAI_Community/LBGTQAI_Community'
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
          component={PoliticsSub}
        />
        <Route
          path="/politics_convo2"
          component={PoliticsSub}
        />
        <Route
          path="/politics_convo3"
          component={PoliticsSub}
        />
        <Route
          path="/politics_convo4"
          component={PoliticsSub}
        />
        <Route
          path="/politics_convo5"
          component={PoliticsSub}
        />
        <Route
          path="/politics_convo6"
          component={PoliticsSub}
        />
        <Route
          path="/politics_convo7"
          component={PoliticsSub}
        />
        <Route
          path="/politics_convo8"
          component={PoliticsSub}
        />
        <Route
          path="/politics_convo9"
          component={PoliticsSub}
        />


        {/* ------------- Women in History Convo -------------- */}

        <Route
          path="/women_in_history_convo1"
          component={WomensHistorySub}
        />
        <Route
          path="/women_in_history_convo2"
          component={WomensHistorySub}
        />
        <Route
          path="/women_in_history_convo3"
          component={WomensHistorySub}
        />
        <Route
          path="/women_in_history_convo4"
          component={WomensHistorySub}
        />
        <Route
          path="/women_in_history_convo5"
          component={WomensHistorySub}
        />
        <Route
          path="/women_in_history_convo6"
          component={WomensHistorySub}
        />
        <Route
          path="/women_in_history_convo7"
          component={WomensHistorySub}
        />
        <Route
          path="/women_in_history_convo8"
          component={WomensHistorySub}
        />
        <Route
          path="/women_in_history_convo9"
          component={WomensHistorySub}
        />


        {/* ------------- Women Living Herstory Convo -------------- */}


        <Route
          path="/herstory_convo1"
          component={WomenLivingHerstorySub}
        />
        <Route
          path="/herstory_convo2"
          component={WomenLivingHerstorySub}
        />
        <Route
          path="/herstory_convo3"
          component={WomenLivingHerstorySub}
        />
        <Route
          path="/herstory_convo4"
          component={WomenLivingHerstorySub}
        />
        <Route
          path="/herstory_convo5"
          component={WomenLivingHerstorySub}
        />
        <Route
          path="/herstory_convo6"
          component={WomenLivingHerstorySub}
        />
        <Route
          path="/herstory_convo7"
          component={WomenLivingHerstorySub}
        />
        <Route
          path="/herstory_convo8"
          component={WomenLivingHerstorySub}
        />
        <Route
          path="/herstory_convo9"
          component={WomenLivingHerstorySub}
        />


        {/* ------------- Technology Convo -------------- */}


        <Route
          path="/technology_convo1"
          component={TechSub}
        />
        <Route
          path="/technology_convo2"
          component={TechSub}
        />
        <Route
          path="/technology_convo3"
          component={TechSub}
        />
        <Route
          path="/technology_convo4"
          component={TechSub}
        />
        <Route
          path="/technology_convo5"
          component={TechSub}
        />
        <Route
          path="/technology_convo6"
          component={TechSub}
        />
        <Route
          path="/technology_convo7"
          component={TechSub}
        />
        <Route
          path="/technology_convo8"
          component={TechSub}
        />
        <Route
          path="/technology_convo9"
          component={TechSub}
        />

        {/* ------------- Education Convo -------------- */}

        <Route
          path="/education_convo/:id"
          component={EducationSub}
        />

        {/* ------------- Health Convo -------------- */}

        <Route
          path="/health_convo1"
          component={HealthSub}
        />
        <Route
          path="/health_convo2"
          component={HealthSub}
        />
        <Route
          path="/health_convo3"
          component={HealthSub}
        />
        <Route
          path="/health_convo4"
          component={HealthSub}
        />
        <Route
          path="/health_convo5"
          component={HealthSub}
        />
        <Route
          path="/health_convo6"
          component={HealthSub}
        />
        <Route
          path="/health_convo7"
          component={HealthSub}
        />
        <Route
          path="/health_convo8"
          component={HealthSub}
        />
        <Route
          path="/health_convo9"
          component={HealthSub}
        />

        {/* ------------- Science Convo -------------- */}

        <Route
          path="/science_convo1"
          component={ScienceSub}
        />
        <Route
          path="/science_convo2"
          component={ScienceSub}
        />
        <Route
          path="/science_convo3"
          component={ScienceSub}
        />
        <Route
          path="/science_convo4"
          component={ScienceSub}
        />
        <Route
          path="/science_convo5"
          component={ScienceSub}
        />
        <Route
          path="/science_convo6"
          component={ScienceSub}
        />
        <Route
          path="/science_convo7"
          component={ScienceSub}
        />
        <Route
          path="/science_convo8"
          component={ScienceSub}
        />
        <Route
          path="/science_convo9"
          component={ScienceSub}
        />

        {/* ------------- The Arts Convo -------------- */}

        <Route
          path="/arts_convo1"
          component={ArtsSub}
        />
        <Route
          path="/arts_convo2"
          component={ArtsSub}
        />
        <Route
          path="/arts_convo3"
          component={ArtsSub}
        />
        <Route
          path="/arts_convo4"
          component={ArtsSub}
        />
        <Route
          path="/arts_convo5"
          component={ArtsSub}
        />
        <Route
          path="/arts_convo6"
          component={ArtsSub}
        />
        <Route
          path="/arts_convo7"
          component={ArtsSub}
        />
        <Route
          path="/arts_convo8"
          component={ArtsSub}
        />
        <Route
          path="/arts_convo9"
          component={ArtsSub}
        />

        {/* ------------- LBGTQI Convo -------------- */}

        <Route
          path="/lbgtqi_convo/:id"
          component={LgbtqiSub}
        />


        {/* ------------- Wage Gap Convo -------------- */}

        <Route
          path="/wage_gap_convo1"
          component={WageGapSub}
        />
        <Route
          path="/wage_gap_convo2"
          component={WageGapSub}
        />
        <Route
          path="/wage_gap_convo3"
          component={WageGapSub}
        />
        <Route
          path="/wage_gap_convo4"
          component={WageGapSub}
        />
        <Route
          path="/wage_gap_convo5"
          component={WageGapSub}
        />
        <Route
          path="/wage_gap_convo6"
          component={WageGapSub}
        />
        <Route
          path="/wage_gap_convo7"
          component={WageGapSub}
        />
        <Route
          path="/wage_gap_convo8"
          component={WageGapSub}
        />
        <Route
          path="/wage_gap_convo9"
          component={WageGapSub}
        />

        {/* ------------- Ending Violence Against Women Convo -------------- */}

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