import classes from './PizzaCard.module.css';
import addIcon from '../../assets/images/plus.svg';
import minusIcon from '../../assets/images/minus.svg';
import AddItemsForm from '../Cart/AddItemsForm';

const PizzaCard = (props) => {
    return (
        <div className={classes.container}>
            <h2 className={classes.pizza}>{props.pizza}</h2>
            <div className={classes.toppings}>{props.toppings}</div>
            <div className={classes.price}>$ {props.price}</div>
            <div className={classes['add-cart']}>
               <AddItemsForm />
            </div>
        </div>
    )
}

export default PizzaCard;