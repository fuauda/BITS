import React from 'react';
import Sidebar from './components/Sidebar';
import '@fortawesome/fontawesome-free/css/all.css';

import './index.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        {/* <Header />
        <OverviewCards />
        <ActionButtons /> */}
        <Outlet />
      </div>
    </div>
  );
}

export default App;
