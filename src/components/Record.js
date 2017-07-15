import React, { Component } from "react";
import "../css/Records.css";

class Record extends Component {
  render() {
    let { record } = this.props;
    return (
      <div className="recordData">
        <tr>
          <td>{record.date}</td>
          <td>{record.location}</td>
          <td>{record.skater.country}</td>
          <td>{record.skater.givenname} {record.skater.familyname}</td>
          <td>{record.time}</td>
          <td>{record.distance}</td>
        </tr>
      </div>
    );
  }
}

module.exports = Record;
