import { configureStore } from '@reduxjs/toolkit'
import markdownReducer from '../features/markdownSlice'
import resultReducer from '../features/resultSlice'

export const store = configureStore({
    reducer: {
        markdown: markdownReducer,
        result: resultReducer
    }
})