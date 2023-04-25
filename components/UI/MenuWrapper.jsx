import classes from './MenuWrapper.module.css';

const MenuWrapper = (props) => {
    return (
        <div className={classes.wrapper}>
            {props.children}
        </div>
    )
}

export default MenuWrapper;