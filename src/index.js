import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PostulantPage from './pages/PostulantPage';
import SecretaryPage from './pages/SecretaryPage';
import PostulantMoreInfoPage from './pages/PostulantMoreInfoPage';
import DiplomatePage from './pages/DiplomatePage';
import App from './App';
import Header from './components/app/Header';
import reportWebVitals from './reportWebVitals';
import Footer from './components/app/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <div style={{ minHeight: 'calc(100vh - 230px)' }}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/postular" component={PostulantPage} />
          <Route path="/secretaria" component={SecretaryPage} />
        </Switch>
      </div>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
