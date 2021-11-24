import { createSlice } from '@reduxjs/toolkit'

const markdownSlice = createSlice({
    name: 'markdown',
    initialState: {
        userInput: '',
        markdownDetail: {}
    },
    reducers: {
        setUserInput: (state, action) => {
            state.userInput = action.payload
        },
        clearUserInput: (state) => {
            state.userInput = ""
        },
        setMarkdownDetail: (state, action) => {
            state.markdownDetail = action.payload
        }
    }
})

export const { setUserInput, clearUserInput, setMarkdownDetail } = markdownSlice.actions
export default markdownSlice.reducer