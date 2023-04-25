import { useRef, useState } from 'react';
import classes from './AddItemsForm.module.css';

const AddItemsForm = props => {
    const inputRef = useRef('')

    const formHandler = (e) => {
        e.preventDefault()

        const enteredAmountString = inputRef.current.value
        const enteredAmount = +enteredAmountString
        console.log(enteredAmount)
 
    }

    return (
        <form className={classes.form} onSubmit={formHandler}>
            <input className={classes['form-input']}
            id='amount'
            ref={inputRef}
            type='number'
            min='1'
            max='5'
            step='1'
            defaultValue='1'
            />
            <button className={classes.btn}>Add to Cart</button>
        </form>
    )

}

export default AddItemsForm;