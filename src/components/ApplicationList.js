import React, { useState } from 'react'
import { GrPrevious, GrNext } from "react-icons/gr";

import './ApplicationList.css';

// Todo: Get real apps from Application Service later
const applications = [
  'App1', 'App2', 'App3', 'App4', 'App5',
  'App6', 'App7', 'App8', 'App9', 'App10', 
  'App11', 'App12', 'App13', 'App14', 
  // 'App15', 'App16', 'App17', 'App18'
];
const applicationsPerPage = 12;

const ApplicationList = ({ onSelect, isMinimized }) => {
  const totalPages = Math.ceil(applications.length/applicationsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const getPagination = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++ ) {
      buttons.push(<button key={i} onClick={() => setCurrentPage(i)} disabled={currentPage === i}>{i}</button>);
    }
    return buttons;
  }

  const getPagingApp = (currentPage) => {
    let startIndex = (currentPage - 1) * applicationsPerPage;
    // Get the elements for the current page
    const pageElements = applications.slice(startIndex, startIndex + applicationsPerPage);
    return pageElements;
  }

  return (  
    <div className={`application-list ${isMinimized ? 'minimized' : 'fullscreen'}`}>
      <div className={`application-grid`}>
        {isMinimized ? 
          (applications.map(app => (
            <div className={`application-icon`} key={app} onClick={() => onSelect(app)}>
              {app}
            </div>
          ))) : 
          (
            getPagingApp(currentPage).map(app => (
              <div className={`application-icon`} key={app} onClick={() => onSelect(app)}>
                <img
                  src="/images/location.png"
                  alt="location"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            ))
            
          )
        }
      </div>
      {!isMinimized && 
        (<div className="pagination">
          <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
            <GrPrevious />
          </button>
          {!isMinimized && (getPagination())}
          <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
            <GrNext />
          </button>
        </div>)
      }
    </div>
  );
};

export default ApplicationList;
