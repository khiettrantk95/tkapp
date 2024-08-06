import React from 'react';

const ApplicationComponent = ({ application }) => {
  if (!application) {
    return <div className="application-component">Select an application to display</div>;
  }

  return (
    <div className="application-component">
      <h2>{application}</h2>
      <p>Details about {application}...</p>
    </div>
  );
};

export default ApplicationComponent;
