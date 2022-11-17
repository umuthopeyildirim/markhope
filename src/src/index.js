import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { datadogRum } from '@datadog/browser-rum'

import './index.css';

// Routes
/* Landing Pages */
import Landing from './views/Landing';
import Download from './views/Download';

/* Auth Pages */
import Login from './views/Login';
import Register from './views/Register';

/* Dashboard Pages */
import Dashboard from './views/Dashboard';
import Activity from './views/Activity';
import New from './views/New';
import Deployment from './views/Deployment';

const root = ReactDOM.createRoot(document.getElementById('root'));

datadogRum.init({
  applicationId: '62cf36c0ff101e7285a44053e8b0a901cd4ca14a',
  clientToken: 'pube60c04adf0bb612f3572af4cdef498e5',
  site: 'datadoghq.com',
   service: 'markhope',
   env: 'production',
   version: '1.0.0',
  sampleRate: 100,
  sessionReplaySampleRate: 100, // if not included, the default is 100
  trackResources: true,
  trackLongTasks: true,
  trackInteractions: true,
})

root.render(
  <BrowserRouter>
    <Routes>
      {/* Landing Pages */}
      <Route path="/" element={<Landing />} />
      <Route path="download" element={<Download />} />

      {/* Auth Pages */}
      <Route path="login" element={<Login /> } />
      <Route path="register" element={<Register />} />

      {/* Dashboard Pages */}
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="activity" element={<Activity />} />
      <Route path="new" element={<New />} />
      <Route path="deployment/:id" element={<Deployment />} />
    </Routes>
  </BrowserRouter>
);