import React  from 'react'
import loading from './Spinner.gif'
const Spinner = () => {
  return (
    <div className='text-center'>
      <img style={{width:'90px'}} src={loading} alt="LOADING" />
    </div>
  )

}

export default Spinner;