

import { createSlice} from '@reduxjs/toolkit'

const uiSlice=createSlice({
    name:'ui',
    initialState:{
        cartVisibile:false,
        notificationState:null
    },
    reducers:{
        toggle(state){
            state.cartVisibile=!state.cartVisibile
        },
         showNotification(state,action){
             state.notificationState={
                status:action.payload.status,
                title:action.payload.title,
                message:action.payload.message
             }
         }
    }

})

export const uiActions=uiSlice.actions
export default uiSlice