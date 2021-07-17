import react, { Component } from "react";

class App extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    const url =
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*";
    fetch(url)
      .then((result) => result.json())
      .then((result) => this.setState({ data: result }));
  }

  render() {
    const { data } = this.state;
    const results = data.map((data, index) => {
      return <li key={index}>{data}</li>;
    });

    return <ul>{results}</ul>;
  }
}

export default App;
