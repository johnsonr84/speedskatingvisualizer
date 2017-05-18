import React, { Component } from "react";
import "../css/Contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="pageContact">
        <h1>CONTACT</h1>
        <p>Please send any questions you may have to:</p>
        <a title="Email Rob Johnson" href="mailto:robertcjohnson1984@gmail.com">
          robertcjohnson1984@gmail.com
        </a><p>or contact us on social media!</p>
        <p>
          Before submitting any questions, you may want to check the FAQ Page to see if they have already been answered.
        </p>
      </div>
    );
  }
}

module.exports = Contact;
