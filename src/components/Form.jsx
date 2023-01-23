import React,{useState} from 'react'
import Card from './shared/Card'
import Button from './shared/Button';
import Rating from './Rating';

function Form() {
    const [text,setText] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [rating,setRating] = useState(10);
    const [message,setMessage] = useState(" ");

    const handleText = (e) => {
        if(text === '' ) {
            setBtnDisabled(true)
            setMessage(null)
        } else if(text !== ' ' && text.trim().length <=9 ) {
            setMessage("Text must be at least 10 characters")
            setBtnDisabled(true)
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)

    }
  return (
    <Card>
        <form>
            <h2>
                How would you Rate our Services
            </h2>
            <Rating select = {(rating) => setRating(rating) } />
            <div className='input-group'>
                <input type="text" placeholder="Write a review for us" onChange={handleText} value={text} />
                 <Button type='submit' isDisabled={btnDisabled}>Send</Button> 
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default Form