

import { createSlice} from '@reduxjs/toolkit'

const uiSlice=createSlice({
    name:'ui',
    initialState:{
        cartVisibile:false
    },
    reducers:{
        toggle(state){
            state.cartVisibile=!state.cartVisibile
        }
    }

})

export const uiActions=uiSlice.actions
export default uiSlice