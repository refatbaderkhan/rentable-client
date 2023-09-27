import React, {useEffect, useState} from 'react'
import './style.css'

const Alert = ({body}) => {

  const [alert, setAlert] = useState(false)

  useEffect(() => {
    setAlert(true)
  }, [body])

  return (
    <div>
      {alert &&
      <div className='alert-container'>
        <div className='alert'>
          <div className='alert-body'>
            {body}
          </div>
          <div className='alert-close'>
            <button
            onClick={()=> setAlert(false)}>
              x
            </button>
          </div>
        </div>
      </div>
      }
    </div>
  )
}

export default Alert