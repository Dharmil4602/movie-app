import React from 'react'
import './spinner.scss'
function Spinner(props) {
  return (
    <div className={`loadingSpinner ${props.initial ? "initial" : ""}`}>
        <svg className='spinner' viewBox='0 0 50 50'>
            <circle className='path' cx="25" cy="25" r="20" fill='none' strokeWidth="5"></circle>
        </svg>
    </div>
  )
}

export default Spinner