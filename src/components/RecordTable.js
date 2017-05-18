import React, { Component } from "react";
import Record from "./Record";
import "../css/Records.css";

class RecordTable extends Component {
  render() {
    let { records, title } = this.props;
    let doNotNeedHeader = false;
    // console.log(records);
    if (records.length === 0) {
      title = "";
      doNotNeedHeader = true;
    }

    return (
      <div className="table">
        <h2>{title}</h2>
        <table>
          <tbody>
            <tr hidden={doNotNeedHeader} className="tableHeader">
              <th>DISTANCE</th>
              <th>TIME</th>
              <th>SKATER</th>
              <th>COUNTRY</th>
              <th>LOCATION</th>
              <th>DATE</th>
            </tr>
            {records.map((record, i) => <Record key={i} record={record} />)}
          </tbody>
        </table>
      </div>
    );
  }
}

module.exports = RecordTable;
