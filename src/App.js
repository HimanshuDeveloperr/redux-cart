import { Fragment, useEffect } from 'react';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useDispatch, useSelector} from 'react-redux'
import { uiActions } from './Store/uiSlice';
import Notification from './components/UI/Notification'


let first=true;

function App() {
  
  const showCart=useSelector(state=>state.ui.cartVisibile)
  const Cart=useSelector(state=>state.cart)
  const dispatch=useDispatch()
 const notify= useSelector(state=>state.ui.notificationState)
  useEffect(()=>{
    const showData=async()=>{

      dispatch(uiActions.showNotification({
        status:'pending',
        title:'sending...',
        message:'sending data'
      }))
     const response=await fetch(`https://redux-cart-16422-default-rtdb.firebaseio.com/cart.json`,{
        method:'PUT',
        body:JSON.stringify(Cart)
      })

      if(!response.ok){
          throw new Error('something went wrong')
      }

      dispatch(uiActions.showNotification({
        status:'success',
        title:'sent',
        message:'sending data success'
      }))

    }
     
    if(first){

      first=false;
      return
    }

    showData().catch((err)=>{
      dispatch(uiActions.showNotification({
        status:'failed',
        title:'sending failed',
        message:'sending data failed'
      }))
    })
  },[Cart,dispatch])
  return (
    <Fragment>
     {notify && <Notification status={notify.status} title={notify.title} message={notify.message} />}
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
