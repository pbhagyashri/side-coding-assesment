import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './bootstrap';

import App from './App';
import NoRouteMatch from './routes/NoRouteMatch';
import reportWebVitals from './reportWebVitals';
import PropertyListing from './routes/property-listing/PropertyListing';
import PropertyDetails from './routes/property-details/PropertyDetails';

render(
  <BrowserRouter>
    <Routes>
      <Route path="/properties" element={<App />}>
        <Route path="/properties" element={<PropertyListing />}>
          <Route path=":propertyId" element={<PropertyDetails />} />
        </Route>
      </Route>
      <Route path="*" element={<NoRouteMatch />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
