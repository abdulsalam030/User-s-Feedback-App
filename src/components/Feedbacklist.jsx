import React from 'react'
import Feedbackitem from './Feedbackitem'

function Feedbacklist({feedback}) {
  return (
    <div className='feedback-list'>
        {feedback.map((item)=> (
          <Feedbackitem key={item.id} item={item} />
        ))}
      
    </div>
  )
}

export default Feedbacklist