import React, { Component } from "react";
import Record from "./Record";

class RecordTable extends Component {
  render() {
    let { records, title } = this.props;
    return (
      <div>
        <h2>{title}</h2>
        <table>
          <tbody>
            {records.map((record, i) => <Record key={i} record={record} />)}
          </tbody>
        </table>
      </div>
    );
  }
}

module.exports = RecordTable;
