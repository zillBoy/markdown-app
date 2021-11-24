import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateVisible } from '../redux/features/resultSlice'
import "../styles/Result.css"
import MarkdownDetail from './MarkdownDetail'
import MarkdownPreview from './MarkdownPreview'

const Result = () => {
    
    const dispatch = useDispatch()
    const { visible } = useSelector(state => state.result)
    
    const toPreviewHandler = () => dispatch(updateVisible("preview"))
    const toShowDetailHandler = () => dispatch(updateVisible("detail"))

    return (
        <div className='resultMainContainer'>
            <div className='inputHeadingContainer'>
                <h3>Visible: {visible}</h3>
                <button className='clearButton' onClick={toPreviewHandler}>Preview</button>
                <button className='clearButton' onClick={toShowDetailHandler}>Show Details</button>
            </div>
            <>
                {visible === 'preview' ? <MarkdownPreview /> : <MarkdownDetail />}
            </>
        </div>
    )
}

export default Result
