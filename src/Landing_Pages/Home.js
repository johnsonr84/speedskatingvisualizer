import React, { Component } from "react";
import "../css/Home.css";
import axios from "axios";

class Competition extends Component {
  render() {
    let { competition } = this.props;
    return (
      <tr>
        <td>{competition.name}</td>
      </tr>
    );
  }
}

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      competitions: []
    };

    this.handleTrackChange = this.handleTrackChange.bind(this);
  }

  componentWillMount() {
    this.getCompetitions("99");
  }

  handleTrackChange(event) {
    let track = event.target.value;
    this.setState({ ...track });
    this.getCompetitions(track);
  }

  getCompetitions(track) {
    axios
      .get(
        `http://speedskatingresults.com/api/json/track_competitions?track=${track}`
      )
      .then(response => {
        console.log(response.data.competitions);
        this.setState({ competitions: response.data.competitions });
      });
  }

  render() {
    let { competitions } = this.state;
    return (
      <div className="pageHome">
        <h1>Competition</h1>
        <h2>Tracks</h2>
        <select onChange={this.handleTrackChange}>
          <option value="99">Adavere</option>
          <option value="125">Akan</option>
        </select>
        <table className="ListOfCompetitions">
          <thead />
          <tbody>
            {competitions.map((competition, i) => (
              <Competition key={i} competition={competition} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

module.exports = Home;
