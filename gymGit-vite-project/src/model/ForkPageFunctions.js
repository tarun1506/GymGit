class ForkPageFunctions {
  constructor(component) {
    this.component = component;
  }

  handleTabClick = (day) => {
    this.component.setState({ activeTab: day });
  };

  handleSave = () => {
    // If there's no current schedule index
    if (this.component.state.currentScheduleIndex === null) {
      alert("No schedule selected!");
      return;
    }

    // Get the index of the current schedule
    const index = this.component.state.currentScheduleIndex;

    // Update the existing schedule in localStorage with the current forked data
    localStorage.setItem(
      `schedule${index}`,
      JSON.stringify(this.component.state.forkedData)
    );

    alert(`Data saved as schedule${index}!`);
  };

  handleScheduleClick = (index) => {
    // Load the corresponding data from localStorage
    const scheduleData = JSON.parse(localStorage.getItem(`schedule${index}`));
    // Update the state to display the fetched data
    this.component.setState({
      forkedData: scheduleData,
      currentScheduleIndex: index,
    });
  };

  handleSubmit = () => {
    // Increment schedule count
    const newScheduleCount = this.component.state.scheduleCount + 1;
    // Save the updated schedule count to localStorage
    localStorage.setItem("scheduleCount", newScheduleCount.toString());
    // Save the current forked data as schedule(i+1)
    localStorage.setItem(
      `schedule${newScheduleCount}`,
      JSON.stringify(this.component.state.forkedData)
    );
    // Update the state with the new schedule count
    this.component.setState({ scheduleCount: newScheduleCount });
    alert(`Data saved as schedule${newScheduleCount}!`);
  };
}

export default ForkPageFunctions;
