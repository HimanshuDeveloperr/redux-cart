import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { sendCardData ,fetchCartData} from './Store/Cart-action';

let first=true;

function App() {
  
  const showCart = useSelector((state) => state.ui.cartVisibile);
  const cart=useSelector(state=>state.cart)
  const dispatch=useDispatch()
 const notification= useSelector(state=>state.ui.notificationState)

 useEffect(() => {
  dispatch(fetchCartData());
}, [dispatch]);

  useEffect(()=>{
    
     
    if(first){

      first=false
      return
    }
 if(cart.changed){

   dispatch(sendCardData(cart))
 }
  },[cart,dispatch])
  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart/>}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
