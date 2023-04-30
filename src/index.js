import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { GithubProvider } from './components/context/github/githubContext';
import { AlartProvider } from './components/context/alart/alart.context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GithubProvider>
    <AlartProvider>
      <Router>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Router>
    </AlartProvider>
  </GithubProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
