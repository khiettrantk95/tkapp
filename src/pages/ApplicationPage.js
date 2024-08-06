import React, { useState } from 'react';
import { TbLayoutSidebarLeftCollapse, TbLayoutSidebarRightCollapse } from "react-icons/tb";
import NavBar from '../components/NavBar';
import ApplicationList from '../components/ApplicationList';
import ApplicationComponent from '../components/ApplicationComponent';
import './ApplicationPage.css';

const ApplicationPage = () => {
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [isMinimized, setIsMinimized] = useState(false);

  const onSelectApplication = (app) => {
    setSelectedApplication(app);
    setIsMinimized(true);
  }

  return (
    <div>
      <NavBar />
      <div className="application-page">
        <button className="toggle-button" onClick={() => setIsMinimized(!isMinimized)}>
          {isMinimized ? <TbLayoutSidebarRightCollapse /> : <TbLayoutSidebarLeftCollapse />}
        </button>
        <ApplicationList onSelect={onSelectApplication} isMinimized={isMinimized} setIsMinimized={setIsMinimized} />
        {isMinimized && <ApplicationComponent application={selectedApplication}/>}
      </div>
    </div>
  );
};

export default ApplicationPage;
