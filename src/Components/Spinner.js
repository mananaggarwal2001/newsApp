import React  from 'react'
import loading from './Spinner-Without-Background.gif'
const Spinner = () => {
  return (
    <div className='text-center'>
      <img src={loading} alt="LOADING" />
    </div>
  )

}

export default Spinner;