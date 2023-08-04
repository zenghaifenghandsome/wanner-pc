import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "@arco-design/web-react/dist/css/arco.css";
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import store from './tools/redux/index';
import './theme/theme.less';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
)
