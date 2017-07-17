// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {
  constructor(props) {
    super(props)
  }

  getCoords = (event) => {
    this.props.onReceiveCoordinates([event.screenX, event.screenY])
  }

  render() {
    return (
      <button onClick={this.getCoords}>Get Dem Coords</button>
    )
  }
}

export default CoordinatesButton
