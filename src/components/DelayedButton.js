// Code DelayedButton Component Here
import React, {Component} from 'react'

class DelayedButton extends Component {
  constructor(props) {
    super(props)
  }

  delayThings = (event) => {
    event.persist()
    setTimeout(() => {
      this.props.onDelayedClick(event)
    }, this.props.delay)
  }

  render() {
    return (
      <button onClick={this.delayThings}>Get Dem Delayed Things</button>
    )
  }
}

export default DelayedButton
