import React, { Component } from 'react'
import loading from './Spinner-Without-Background.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="LOADING" />
      </div>
    )
  }
}

export default Spinner