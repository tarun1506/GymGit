import React, { Component } from "react";
import NavBar from "../fragments/Navbar";
import Footer from "../fragments/Footer";
import EditableWorkoutTable from "../components/EditableWorkoutTable";
import workoutData from "../model/workoutData";

class ForkPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forkedData: workoutData.map((day) => ({ ...day })),
      activeTab: "Monday", // Set the default active tab
    };
  }

  handleTabClick = (day) => {
    this.setState({ activeTab: day });
  };

  renderTabContent() {
    const selectedDayData = this.state.forkedData.find(
      (item) => item.day === this.state.activeTab
    );
    console.log("selectedDayData", selectedDayData);
    return selectedDayData ? (
      <EditableWorkoutTable initialData={selectedDayData.data} />
    ) : null;
  }

  handleSubmit = () => {
    // Load existing schedules count
    let scheduleCount = parseInt(localStorage.getItem("scheduleCount") || "0");

    scheduleCount++;

    localStorage.setItem(
      `schedule${scheduleCount}`,
      JSON.stringify(this.state.forkedData)
    );

    localStorage.setItem("scheduleCount", scheduleCount.toString());

    alert(`Data saved as schedule${scheduleCount}!`);
  };

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
                onClick={() => this.handleTabClick(day.day)}
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
          class="btn btn-primary"
          type="submit"
          onClick={this.handleSubmit}
        >
          Save
        </button>

        <br></br>
        <br></br>
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          Toggle right offcanvas
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasRightLabel">
              Offcanvas right
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">Schedule Lists</div>
        </div>
        <Footer />
      </>
    );
  }
}

export default ForkPage;
