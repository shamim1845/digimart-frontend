import {createSlice, } from "@reduxjs/toolkit";


const initialState = {
    orderedItem: [],
    totalPayAmount: 0,
    shippingInformation: [],
}


const orderSlice = createSlice({
    name: "ordered item",
    initialState,
    reducers: {
        addOrderItem: (state, {payload}) => {
       
            const ExistOrdertItem = state.orderedItem && state.orderedItem.find((item) =>  (
                item.product._id === payload.Item.product._id )  )  
                
                if(ExistOrdertItem) {
                   state.orderedItem = state.orderedItem.map((item) => {
                       if(item.product._id === payload.Item.product._id) {
                           item=payload.Item;
                       }
                       return item
                   })
                }else{
                   state.orderedItem = [...state.orderedItem, payload.Item];
                }

        
        },
        removeOrderItem: (state, {payload}) => {
            const deleteOrderItem = state.orderedItem.filter((item) => (
                item.product._id !== payload.Item.product._id 
            ))

            state.orderedItem = deleteOrderItem;

    
        },
        resetOrderItem: (state) => {
            state.orderedItem = [];
        },
        totalPayAmount: (state, {payload}) => {
                    state.totalPayAmount = payload.amount;
        },
        shippingInformation: (state, {payload}) => {
                    state.shippingInformation = payload.shippingInfo;
        }
    }
})


export const {addOrderItem, removeOrderItem, resetOrderItem, totalPayAmount, shippingInformation} = orderSlice.actions;
export default orderSlice.reducer;
export const getAllOrders = (state) => state.order.orderedItem;
export const getTotalPayAmount = (state) => state.order.totalPayAmount;
export const getShippingInformation = (state) => state.order.shippingInformation;