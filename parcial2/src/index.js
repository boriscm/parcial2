import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {FormattedMessage, IntlProvider} from 'react-intl';


import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

import reportWebVitals from './reportWebVitals';

import Form from './components/componente';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


var lang = navigator.language;



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <IntlProvider locale= {lang} messages = { {"en": localeEnMessages, "es-ES": localeEsMessages}[""+lang]}>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Bandas Musicales
          </Navbar.Brand>
        </Container>
      </Navbar>
    <Form/>
  </IntlProvider>, document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



ServiceWorkerRegistration.register();