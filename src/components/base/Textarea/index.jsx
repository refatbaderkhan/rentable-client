import React from 'react'
import "./style.css";

const Textarea = ({ onChange, label, placeholder,value}) => {

  return (
    <div className='baseTextarea'>
      <label className='baseTextarea-label'>{label}</label>
      <textarea
        className='base-Textarea'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}  
      />
    </div>
  )
}

export default Textarea