import React from 'react'
import { motion,AnimatePresence } from "framer-motion"
import Feedbackitem from './Feedbackitem'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function Feedbacklist() {
  const {feedback} = useContext(FeedbackContext);

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item)=> (
          <motion.div 
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
          key={item.id} >
          <Feedbackitem key={item.id}
           item={item}
          />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )



  // return (
  //   <div className='feedback-list'>
  //       {feedback.map((item)=> (
  //         <Feedbackitem key={item.id}
  //          item={item}
  //          handleDelete={handleDelete}
  //         />
  //       ))}
      
  //   </div>
  // )
}

export default Feedbacklist