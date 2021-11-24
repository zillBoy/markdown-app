import { createSlice } from '@reduxjs/toolkit'

const resultSlice = createSlice({
    name: 'result',
    initialState: {
        visible: 'preview',
        selectedValue: ''
    },
    reducers: {
        updateVisible: (state, action) => {
            state.visible = action.payload
        },
        updateSelectedValue: (state, action) => {
            state.selectedValue = action.payload
        }
    }
})

export const { updateVisible, updateSelectedValue } = resultSlice.actions
export default resultSlice.reducer