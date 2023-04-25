import Card from '../UI/Card';
import classes from './Cart.module.css';


const Cart = props => {

    return (
        <div className={classes['cart-container']}>
            <h2 className={classes.cart}>Cart</h2>
            <div className={classes['cart']}>
                <div className={classes['cart-items']}>
                <h3 className={classes.item}>Pepperoni</h3>
                    <button className={classes.remove}>-</button>
                    <span className={classes.qty}>1</span>
                    <button className={classes.add}>+</button>
                </div>
                <div className={classes.price}>
                    <p>$15.99</p>
                </div>
            </div>
            <div className={classes.total}>
                <p>Total</p>
                <p>$55.70</p>
            </div>
            <div className={classes['finalise-cart']}>
                <button className={classes.close} onClick={props.onClose}>Close</button>
                <button className={classes.checkout}>Checkout</button>
            </div>
        </div>
    )
}

export default Cart;