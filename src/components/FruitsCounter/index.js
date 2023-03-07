// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mcount: 0, ncount: 0}

  mangoecount = () => {
    this.setState(prevState => ({mcount: prevState.mcount + 1}))
  }

  bananacount = () => {
    this.setState(prevState => ({ncount: prevState.ncount + 1}))
  }

  render() {
    const {mcount, ncount} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">
            Bob ate <span className="count">{mcount}</span> mangoes
            <span className="count">{ncount}</span>bananas
          </h1>
          <div className="image-container">
            <div className="mangoe">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <button
                className="button"
                type="button"
                onClick={this.mangoecount}
              >
                Eat Mango
              </button>
            </div>
            <div className="banana">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <button
                className="button"
                type="button"
                onClick={this.bananacount}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
