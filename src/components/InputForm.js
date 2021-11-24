import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserInput, clearUserInput } from '../redux/features/markdownSlice'
import "../styles/InputForm.css"

const InputForm = () => {    
    
    const dispatch = useDispatch()
    const { userInput } = useSelector(state => state.markdown)

    const changeInputHandler = e => dispatch(setUserInput(e.target.value))
    
    const clearInputHandler = () => dispatch(clearUserInput())

    return (
        <div className='inputMainContainer'>
            <div className='inputHeadingContainer'>
                <h3>Enter markdown</h3>
                <button className='clearButton' onClick={clearInputHandler}>Clear</button>
            </div>

            <div className='textAreaContainer'>
                <textarea className='textArea' value={userInput} onChange={changeInputHandler} />
            </div>
        </div>
    )
}

export default InputForm
