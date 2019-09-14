import React from 'react';
import axios from 'axios';
import Card from './Card';
export default class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wemon: [],
      darkMode: this.props.darkMode
    }

  }
  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        this.setState({
          wemon: res.data
        })
        console.log(this.state.wemon)
      })
      .catch(err => console.error(err));

  }

  render() {
    return (
      <div className="App">
        <button onClick={this.props.toggleMode}>{`${this.props.darkMode ? 'too dark' : 'too light'}`}</button>
        {this.state.wemon.map(w => {
          return <Card key={Math.random(1000)} wemon={w} />
        })}

      </div>
    );
  }
}

