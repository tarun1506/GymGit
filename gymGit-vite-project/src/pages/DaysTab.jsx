import React, { Component } from "react";
import NavBar from "../fragments/Navbar";
import Footer from "../fragments/Footer";
import workoutData from "../model/workoutData";
import WorkoutTable from "../components/WorkoutTable";

class DaysTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "Monday",
    };
  }

  handleTabClick = (day) => {
    this.setState({ activeTab: day });
  };

  renderTabContent = () => {
    const { activeTab } = this.state;
    const selectedDay = workoutData.find((day) => day.day === activeTab);
    return <WorkoutTable data={selectedDay.data} />;
  };

  render() {
    return (
      <>
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            {workoutData.map((day) => (
              <button
                key={day.day}
                className={`nav-link ${
                  this.state.activeTab === day.day ? "active" : ""
                }`}
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
      </>
    );
  }
}

export default DaysTab;


