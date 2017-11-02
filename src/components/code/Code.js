// React
import React, { Component } from "react";

class Code extends Component {
  render() {
    return (
      <div>
      <div className="ui container">
    <h1 className="ui dividing header center">
      Portfolio
    </h1>
     <div className="ui two stackable cards">
      // Localhost
      <div className="ui card">
        <div className="ui slide masked reveal image">
          <img src="../assets/home.png" className="visible content">
          <img src="../assets/booking.png" className="hidden content">
        </div>
        <div className="content">
          <a className="header" href="https://mysterious-badlands-77198.herokuapp.com/" target="_blank">LocalHost</a>
          <div className="meta">
            <span className="date">LocalHost connects area hosts, who specialize in categories like "Art", "Music", or "Food & Drink", to visitors looking for someone to show them around.</span>
          </div>
        </div>
        <div className="extra content">
          <a href="https://github.com/vernistage/localhost" target="_blank">
            <i className="github icon"></i>
            View on Github
          </a>
        </div>
      </div>
      // End Localhost
      // Do512
      <div className="ui card">
        <div className="ui slide masked reveal big image">
          <img src="../assets/today.png" className="visible content">
          <img src="../assets/tomorrow.png" className="hidden content">
        </div>
        <div className="content">
          <p className="header">Austin Events</p>
          <div className="meta">
            <span className="date">Displays today"s and tomorrow"s events in Austin, Texas, using the Do512 API.</span>
          </div>
        </div>
        <div className="extra content">
          <a href="https://github.com/vernistage/do512" target="_blank">
            <i className="github icon"></i>
            View on Github
          </a>
        </div>
      </div>
      // End Do512
      // Bounce
      <div className="ui card">
        <div className="ui slide masked reveal big image">
          <img src="../assets/input.png" className="visible content">
          <img src="../assets/blocked.png" className="hidden content">
        </div>
        <div className="content">
          <p className="header">Bounce</p>
          <div className="meta">
            <span className="date">App monitors a users Twitter mentions and automatically mutes accounts based on words or phrases blacklisted by user.</span>
          </div>
        </div>
        <div className="extra content">
          <a href="https://github.com/vernistage/bounce" target="_blank">
            <i className="github icon"></i>
            View on Github
          </a>
        </div>
      </div>
      // End Bounce
      // Link Modify
      <div className="ui card">
        <div className="ui slide masked reveal big image">
          <img src="../assets/linker.png" className="visible content">
          <img src="../assets/text.png" className="hidden content">
        </div>
        <div className="content">
          <a className="header" href="https://link-modify.herokuapp.com/" target="_blank">Linker</a>
          <div className="meta">
            <span className="date">Users can modify links and text them to themselves. For instructions, see Github below.</span>
          </div>
        </div>
        <div className="extra content">
          <a href="https://github.com/vernistage/link-modify" target="_blank">
            <i className="github icon"></i>
            View on Github
          </a>
        </div>
      </div>
      // End Link Modify
    </div>
  </div>
      </div>
    );
  }
}

export default Code
