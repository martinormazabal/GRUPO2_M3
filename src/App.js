import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PostulantPage from './pages/PostulantPage';
import SecretaryPage from './pages/SecretaryPage';
import PostulantMoreInfoPage from './pages/PostulantMoreInfoPage';
import DiplomatePage from './pages/DiplomatePage';
import Header from './components/app/Header';
import Footer from './components/app/Footer';
import ScrollToTop from './components/app/ScrollToTop';
import LoginPage from './pages/LoginPage';
import DashboardSecretary from './pages/DashboardSecretary';
import DashboardResponsable from './pages/DashboardResponsable';
import HomePage from './pages/HomePage';

function App() {
  /* const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', '1');
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  }; */

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <div style={{ minHeight: 'calc(100vh - 230px)' }}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/tablero/secretaria" component={DashboardSecretary} />
          <Route exact path="/tablero/consejo" component={DashboardResponsable} />
          <Route path="/iniciar-sesion" component={LoginPage} />
          <Route path="/postular" component={PostulantPage} />
          <Route path="/secretaria" component={SecretaryPage} />
          <Route path="/diplomado/:diplomadoId" component={DiplomatePage} />
          <Route path="/postular" component={PostulantMoreInfoPage} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
