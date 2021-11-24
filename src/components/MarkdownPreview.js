import React from 'react'
import ReactMarkdown from 'react-markdown'
import { useDispatch, useSelector } from 'react-redux'
import { updateVisible, updateSelectedValue } from '../redux/features/resultSlice'

const MarkdownPreview = () => {
    
    const dispatch = useDispatch()
    const { userInput } = useSelector(state => state.markdown)
    const { visible } = useSelector(state => state.result)
    
    const onMarkdownDetailHandler = () => {
        let parsedInput = userInput.replace(/[^a-zA-Z 1-9]+/g, '');
        const visibleResult = visible === "preview" ? "detail" : "preview"
        dispatch(updateSelectedValue(parsedInput.trim()))
        dispatch(updateVisible(visibleResult))
    }

    return (
        <div onDoubleClick={onMarkdownDetailHandler}>
            <ReactMarkdown children={userInput} />
        </div>
    )
}

export default MarkdownPreview
