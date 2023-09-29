import React from 'react'
import "./style.css";

const Textarea = ({ onChange, label, placeholder, value, alternative, text}) => {

  return (
    <div className='baseTextarea'>
      <label className='baseTextarea-label'>{label}</label>
      {text ? (
        <textarea
          className= {alternative ? 'baseTextarea-textarea-alternative' : text ? 'baseTextarea-textarea-text' : 'baseTextarea-textarea'}
          value={text}
          disabled
        />
      ) : (
        <textarea
          className= {alternative ? 'baseTextarea-textarea-alternative' : 'base-Textarea'}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}  
        />
      )}
    </div>
  )
}

export default Textarea