import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Import Provider
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store'; // Import your Redux store

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap your App with Provider */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// Other code remains the same
reportWebVitals();
