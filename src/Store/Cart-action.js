import { uiActions } from "./uiSlice";

import { CartActions } from "./CartSlice";


export const fetchCartData = () => {
    return async (dispatch) => {
      const fetchData = async () => {
        const response = await fetch(
          'https://redux-cart-16422-default-rtdb.firebaseio.com/cart.json'
        );
  
        if (!response.ok) {
          throw new Error('Could not fetch cart data!');
        }
  
        const data = await response.json();
        console.log(data)
  
        return data;
      };
  
      try {
        const cartData = await fetchData();
        dispatch(
          CartActions.replaceCart({
            items: cartData.items || [],
            totalAmount: cartData.totalAmount,
          })
        );
      } catch (error) {
        dispatch(
          uiActions.showNotification({
            status: 'error',
            title: 'Error!',
            message: 'Fetching cart data failed!',
          })
        );
      }
    };
  };


// create an action creator to manage async code

export const sendCardData = (cart) => {
    return async (dispatch) => {
      // everything goes here
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "sending...",
          message: "sending data",
        })
      );
  
      const sendRequest = async () => {
        const response = await fetch(
          `https://redux-cart-16422-default-rtdb.firebaseio.com/cart.json`,
          {
            method: "PUT",
            body: JSON.stringify(cart),
          }
        );
  
        if (!response.ok) {
          throw new Error("something went wrong");
        }
      };
      try {
        await sendRequest();
        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "sent",
            message: "sending data success",
          })
        );
      } catch (err) {
        dispatch(
          uiActions.showNotification({
            status: "failed",
            title: "sending failed",
            message: "sending data failed",
          })
        );
      }
    };
  };
  
  