// index.js
import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import App from './App.jsx';
import * as ReactDOM from "react-dom/client";
import 'tailwindcss/tailwind.css'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
