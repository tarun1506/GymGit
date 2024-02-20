import React, { Component } from "react";
import NavBar from "../fragments/Navbar";
import Footer from "../fragments/Footer";
import EditableWorkoutTable from "../components/EditableWorkoutTable";
import workoutData from "../model/workoutData";
import ScheduleList from "../components/ScheduleList";
import ForkPageFunctions from "../model/ForkPageFunctions";

class ForkPage extends Component {
  constructor(props) {
    super(props);
    // Load schedule count from localStorage
    const scheduleCount = parseInt(
      localStorage.getItem("scheduleCount") || "0"
    );

    let originalSchedule = JSON.parse(localStorage.getItem("originalSchedule"));

    // If original schedule is not found, set it from workoutData
    if (!originalSchedule) {
      originalSchedule = workoutData.map((day) => ({ ...day }));
      localStorage.setItem("originalSchedule", JSON.stringify(originalSchedule));
    }

    this.state = {
      forkedData: originalSchedule,
      originalData: originalSchedule, // Store original workout data
      activeTab: "Monday",
      scheduleCount: scheduleCount,
      currentScheduleIndex: null, // Index of the currently displayed schedule
    };

    // Create an instance of ForkPageFunctions and pass the component reference
    this.forkPageFunctions = new ForkPageFunctions(this);
  }

  renderTabContent() {
    const { forkedData, activeTab } = this.state;
  
    if (!forkedData) {
      return null; // Return null if forkedData is not yet initialized
    }
  
    const selectedDayData = forkedData.find(
      (item) => item.day === activeTab
    );
  
    return selectedDayData ? (
      <EditableWorkoutTable initialData={selectedDayData.data} />
    ) : null;
  }

  render() {
    return (
      <>
        <NavBar />
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            {workoutData.map((day) => (
              <button
                key={day.day}
                className={`nav-link ${this.state.activeTab === day.day ? "active" : ""}`}
                onClick={() => this.forkPageFunctions.handleTabClick(day.day)}
              >
                {day.day}
              </button>
            ))}
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          {this.renderTabContent()}
        </div>

        <button
          className="btn btn-success me-2"
          type="button"
          onClick={this.forkPageFunctions.handleSave}
        >
          Save
        </button>
        <button
          className="btn btn-outline-success"
          type="button"
          onClick={this.forkPageFunctions.handleSubmit}
        >
          Save As New Schedule
        </button>

        <br />
        <br />
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          View Schedule
        </button>
        <ScheduleList
          scheduleCount={this.state.scheduleCount}
          handleScheduleClick={this.forkPageFunctions.handleScheduleClick}
        />
        <Footer />
      </>
    );
  }
}

export default ForkPage;
