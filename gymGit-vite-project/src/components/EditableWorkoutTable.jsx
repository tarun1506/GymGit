import React, { Component } from "react";

class EditableWorkoutTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.initialData,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.initialData !== this.props.initialData) {
      this.setState({ data: this.props.initialData });
    }
  }

  handleEdit = (index, field, value) => {
    const updatedData = [...this.state.data];
    updatedData[index][field] = value;
    this.setState({ data: updatedData });
  };

  render() {
    console.log('EditableWorkoutTable', this.state);
    const { data } = this.state;
    return (
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Workout</th>
            <th scope="col">Reps / Count</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>
                <input
                  type="text"
                  value={item.workout}
                  onChange={(e) => this.handleEdit(index, "workout", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.reps}
                  onChange={(e) => this.handleEdit(index, "reps", e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default EditableWorkoutTable;
