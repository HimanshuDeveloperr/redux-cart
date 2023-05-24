import { uiActions } from '../../Store/uiSlice';
import classes from './CartButton.module.css';
import { useDispatch, useSelector} from 'react-redux'

const CartButton = (props) => {

  const dispatch=useDispatch()
  const quantity=useSelector(state=>state.cart.totalAmount)

  const toggler=()=>{
    dispatch(uiActions.toggle())
  }
  return (
    <button className={classes.button} onClick={toggler}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
