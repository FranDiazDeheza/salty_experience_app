
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap'
import 'bootstrap/js/dist/dropdown';
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_es from "./translations/es/global.json"
import global_en from "./translations/en/global.json"
import global_it from "./translations/it/global.json"
import global_fr from "./translations/fr/global.json"
import global_cn from "./translations/cn/global.json"




i18next.init({
   
    interpolation: {escapeValue: false},
     lng: "en",
    resources: {
      es:{
        global: global_es
      },
      en:{
        global: global_en
      },
      it:{
        global: global_it
      },
      fr:{
        global: global_fr
      },
      cn:{
        global: global_cn
      },
    },

});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
    <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

