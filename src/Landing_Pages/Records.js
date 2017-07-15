import React, { Component } from "react";
import "../css/Records.css";
import axios from "axios";
import RecordTable from "../components/RecordTable";

class Records extends Component {
  constructor(props) {
    super(props);

    this.state = {
      records: []
    };
    this.handleRecordChange = this.handleRecordChange.bind(this);
  }

  componentWillMount() {
    this.getRecords("world_records");
  }

  handleRecordChange(event) {
    let record = event.target.value;
    this.setState({ ...record });
    this.getRecords(record);
  }

  getRecords(records) {
    axios
      .get(`http://speedskatingresults.com/api/json/${records}.php`)
      .then(response => {
        // console.log(response.data.records);
        this.setState({ records: response.data.records });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const { records } = this.state;
    const ladiesRecords = records.filter(record => {
      return record.gender === "f" && record.age === "sr";
    });
    const juniorLadiesRecords = records.filter(record => {
      return record.gender === "f" && record.age === "jr";
    });
    const mensRecords = records.filter(record => {
      return record.gender === "m" && record.age === "sr";
    });
    const juniorMensRecords = records.filter(record => {
      return record.gender === "m" && record.age === "jr";
    });

    return (
      <div className="pageRecords">
        <h1>RECORDS</h1>
        <select onChange={this.handleRecordChange}>
          <option value="world_records">World Records</option>
          <option value="olympic_records">Olympic Records</option>
        </select>
        <RecordTable title="WOMEN" records={ladiesRecords} />
        <RecordTable title="MEN" records={mensRecords} />
        <RecordTable title="JUNIOR WOMEN" records={juniorLadiesRecords} />
        <RecordTable title="JUNIOR MEN" records={juniorMensRecords} />
      </div>
    );
  }
}

module.exports = Records;
