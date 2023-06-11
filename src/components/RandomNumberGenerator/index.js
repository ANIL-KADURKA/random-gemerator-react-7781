// Write your code here

import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onButton = () => {
    const a = Math.ceil(Math.random() * 100)
    this.setState({
      count: a,
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="head">Random Number</h1>
          <p className="para">
            Generate a Random Number in the range of 0 to 100
          </p>
          <button type="button" className="button" onClick={this.onButton}>
            Generate
          </button>
          <p className="pa">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
