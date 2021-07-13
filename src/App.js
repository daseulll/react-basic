import React, { Component } from "react";
import Table from "./Table";

class App extends Component {
  render() {
    state = {
      charaters: [
        {
          name: "Charlie",
          job: "Janitor",
        },
        {
          name: "Mac",
          job: "Bouncer",
        },
        {
          name: "Dee",
          job: "Aspring actress",
        },
        {
          name: "Dennis",
          job: "Bartender",
        },
      ],
    };
    return (
      <div className='App'>
        <Table characterData={characters} />
      </div>
    );
  }
}

export default App;
