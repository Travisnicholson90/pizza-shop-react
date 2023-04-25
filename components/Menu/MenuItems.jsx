import classes from './MenuItems.module.css';
import MenuWrapper from '../UI/MenuWrapper';
import PizzaCard from '../UI/pizzaCard';

const PIZZA_ARRAY = [
    {
        id: 'p1',
        pizza: 'Pepperoni',
        toppings: 'Tomato sauce mozzarella cheese pepperoni',
        price: '18.99' 
    },
    {
        id: 'p2',
        pizza: 'Hawaiian',
        toppings: 'Tomato sauce mozzarella cheese pineapple ham',
        price: '18.99'
    },
    {
        id: 'p3',
        pizza: 'BBQ Chicken',
        toppings: 'BBQ sauce mozzarella cheese chicken',
        price: '18.99'
    },
    {
        id: 'p4',
        pizza: 'Sicilian',
        toppings: 'Tomato sauce mozzarella cheese olives artichoke anchovies',
        price: '20.99'
    },
    {
        id: 'p5',
        pizza: 'Meat lovers',
        toppings: 'BBQ sauce mozzarella cheese Chicken ham pepperoni sausage',
        price: '21.50'
    },
    {
        id: 'p6',
        pizza: 'Margarita',
        toppings: 'Tomato sauce mozzarella cheese oregano',
        price: '16.99'
    }
]


const MenuItems = () => {
    const pizzas = PIZZA_ARRAY.map((pizza) => (
        <PizzaCard 
        key={pizza.id}
        pizza={pizza.pizza}
        toppings={pizza.toppings}
        price={pizza.price}
        />
    ))
    return (
        <MenuWrapper>
            {pizzas}
        </MenuWrapper>
    )
}
export default MenuItems;