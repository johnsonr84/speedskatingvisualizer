import React, { Component } from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { EventEmitter } from "events";
import Home from "./Landing_Pages/Home";
import Results from "./Landing_Pages/Results";
import Skaters from "./Landing_Pages/Skaters";
import Records from "./Landing_Pages/Records";
import Season from "./Landing_Pages/Season";
import Contact from "./Landing_Pages/Contact";
import FAQ from "./Landing_Pages/FAQ";
import "./css/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Page: "home"
    };
  }

  componentWillMount() {
    this.eventEmitter = new EventEmitter();

    this.eventEmitter.addListener("navigateLandingPage", ({ Page }) => {
      this.updatePage({ newLandingPage: Page });
    });
  }

  updatePage({ newLandingPage }) {
    this.setState({ Page: newLandingPage });
  }

  render() {
    let currentPage;

    if (this.state.Page === "home") {
      currentPage = <Home />;
    }
    if (this.state.Page === "results") {
      currentPage = <Results />;
    }
    if (this.state.Page === "skaters") {
      currentPage = <Skaters />;
    }
    if (this.state.Page === "records") {
      currentPage = <Records />;
    }
    if (this.state.Page === "season") {
      currentPage = <Season />;
    }
    if (this.state.Page === "contact") {
      currentPage = <Contact />;
    }
    if (this.state.Page === "faq") {
      currentPage = <FAQ />;
    }

    return (
      <div className="App">
        <div className="Header">
          <Header
            eventEmmiter={this.eventEmmiter}
            landingPage={this.state.Page}
          />
        </div>
        <div className="Main">
          <div className="Sidebar">
            <Sidebar
              eventEmitter={this.eventEmitter}
              landingPage={this.state.Page}
            />
          </div>
          <div className="Data">
            {currentPage}
          </div>
        </div>
        <div className="Bottom">
          <Footer
            eventEmmiter={this.eventEmmiter}
            pageIndex={this.state.Page}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
