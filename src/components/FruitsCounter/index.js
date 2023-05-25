// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  eatMango = () => {
    // const {mango} = this.state
    this.setState(prevState => {
      console.log(prevState)
      return {mango: prevState.mango + 1}
    })
  }

  eatBanana = () => {
    // const {mango} = this.state
    this.setState(prevState => {
      console.log(prevState)
      return {banana: prevState.banana + 1}
    })
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="bg-container">
        <div className="fruits-container">
          <h1 className="heading">
            Bob ate <span className="spanEl">{mango}</span> mangoes{' '}
            <span className="spanEl">{banana}</span> bananas
          </h1>
          <div className="img-container">
            <div className="fruit-btn-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
                alt="mango"
                className="img"
              />
              <button onClick={this.eatMango} className="btn" type="button">
                Eat Mango
              </button>
            </div>
            <div className="fruit-btn-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="img"
              />
              <button onClick={this.eatBanana} className="btn" type="button">
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
