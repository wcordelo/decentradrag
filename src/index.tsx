import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { RecoilRoot } from 'recoil';
import GlobalStyles from './styles/GlobalStyles';

ReactDOM.render(
  <RecoilRoot>
    <React.StrictMode>
      <App />
      <GlobalStyles />
    </React.StrictMode>
  </RecoilRoot>,
  document.getElementById('root')
);
