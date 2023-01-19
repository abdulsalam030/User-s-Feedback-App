import React from 'react'
import Feedbackitem from './Feedbackitem'

function Feedbacklist({feedback,handleDelete}) {
  return (
    <div className='feedback-list'>
        {feedback.map((item)=> (
          <Feedbackitem key={item.id}
           item={item}
           handleDelete={handleDelete}
          
          />
        ))}
      
    </div>
  )
}

export default Feedbacklist