import { useEffect } from 'react';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector} from 'react-redux'
function App() {
  
  const showCart=useSelector(state=>state.ui.cartVisibile)
  const Cart=useSelector(state=>state.cart)
  useEffect(()=>{
    fetch(`https://redux-cart-16422-default-rtdb.firebaseio.com/cart.json`,{
      method:'PUT',
      body:JSON.stringify(Cart)
    })
  },[Cart])
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
