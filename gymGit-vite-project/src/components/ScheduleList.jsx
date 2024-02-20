import React from "react";

const ScheduleList = ({ scheduleCount, handleScheduleClick }) => {
  const scheduleButtons = [];
  for (let i = 1; i <= scheduleCount; i++) {
    scheduleButtons.push(
      <button
        key={i}
        onClick={() => handleScheduleClick(i)}
        className="btn btn-primary"
        style={{ display: "block", marginBottom: "10px", alignSelf: "flex-start" }}
      >
        Schedule {i}
      </button>
    );
  }

  return (
    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasRightLabel">
          Schedule Lists
        </h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>
      <div className="offcanvas-body">
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
          {scheduleButtons}
        </div>
      </div>
    </div>
  );
};

export default ScheduleList;
