import classes from './WelcomeCard.module.css';
import Card from '../UI/Card';

const WelcomeCard = (props) => {
    return (
    <Card>
        <article className={classes.container}>
            <div className={classes.heading}>
                <h2>Welcome To Jimmy's Pizzeria</h2>
            </div>
            <div className={classes.info}>
                <p>Est. 1922, Jimmy's Pizzeria has been making delicious wood fire oven pizza for over 100 years</p>
                <p>Our dough is made from premium ingredients and goes through a 72 hour fermentation process before being topped
                    with our delicious topping and finished in our wood fire oven. </p>
                <p>Please ask our friendly staff if you have any dietary requirements</p>
            </div>
            <button className={classes.button} onClick={props.onClose}>Close</button>
        </article>
    </Card>
    );
}
export default WelcomeCard;