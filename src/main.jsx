import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css";

import App from './App.jsx'
import UserContext from './ContextApi/UserContext.jsx';
import { Provider } from 'react-redux'
import { Store } from './Redux/store,.js';

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <UserContext>
      <App />
    </UserContext>
  </Provider>
)
