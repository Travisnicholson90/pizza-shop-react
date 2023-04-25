import classes from './Header.module.css';
import pizza from '../../assets/images/pizza.png';
import HeaderCartButton from './HeaderCartButton';


const Header = (props) => {
    return (
        <div className={classes.Header}>
            <nav className={classes.navbar}>
                <ul className={classes['header-list']}>
                <li className={classes['pizza-img']}>
                    <img src={pizza} className={classes.pizza} />
                </li>
                    <li>Home</li>
                    <li>Menu</li>
                    <li className={classes.icon}><HeaderCartButton onClick={props.onShowCart} /></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;