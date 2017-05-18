import React from "react";
import "../css/Sidebar.css";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app-sidebar">
        <div
          className="home-page1"
          onClick={event => {
            this.props.eventEmitter.emit("navigateLandingPage", {
              Page: "home"
            });
          }}
        >
          <p>HOME</p>
        </div>
        <div
          className="results-page1"
          onClick={event => {
            this.props.eventEmitter.emit("navigateLandingPage", {
              Page: "results"
            });
          }}
        >
          <p>RESULTS</p>
        </div>
        <div
          className="skaters-page1"
          onClick={event => {
            this.props.eventEmitter.emit("navigateLandingPage", {
              Page: "skaters"
            });
          }}
        >
          <p>SKATERS</p>
        </div>
        <div
          className="records-page1"
          onClick={event => {
            this.props.eventEmitter.emit("navigateLandingPage", {
              Page: "records"
            });
          }}
        >
          <p>RECORDS</p>
        </div>
        <div
          className="season-page1"
          onClick={event => {
            this.props.eventEmitter.emit("navigateLandingPage", {
              Page: "season"
            });
          }}
        >
          <p>SEASON</p>
        </div>
        <div
          className="contact-page1"
          onClick={event => {
            this.props.eventEmitter.emit("navigateLandingPage", {
              Page: "contact"
            });
          }}
        >
          <p>CONTACT</p>
        </div>
        <div
          className="faq-page1"
          onClick={event => {
            this.props.eventEmitter.emit("navigateLandingPage", {
              Page: "faq"
            });
          }}
        >
          <p>FAQ</p>
        </div>
        <div className="social-media">
          <div
            className="facebook"
            href="https://www.facebook.com/rob.johnson.9615"
          >
            Facebook
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Sidebar;
