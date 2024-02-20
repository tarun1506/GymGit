import React, { Component } from "react";

class WorkoutTable extends Component {
  render() {
    const { data } = this.props;
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
              <td>{item.workout}</td>
              <td>{item.reps}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default WorkoutTable;
