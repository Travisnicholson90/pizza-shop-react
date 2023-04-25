import React, {Fragment, useState} from 'react';
import Header from './components/Layouts/Header';
import WelcomeCard from './components/Layouts/WelcomeCard';
import MenuItems from './components/Menu/MenuItems';
import Cart from './components/Cart/Cart';


function App() {
 const [welcomeInfo, setWelcomeInfo ] = useState(true);
 const [ displayCart, setDisplayCart ] = useState(false)

const showWelcomeHandler = () => {
      setWelcomeInfo(true);
};
const hideWelcomeHandler = () => {
    setWelcomeInfo(false);
};

const showCartHandler = () => {
      setDisplayCart(true);
}

const closeCartHandler = () => {
  setDisplayCart(false)
}

  return (
    <Fragment>
      <Header onShowCart={showCartHandler}/>
      {/* show and hide welcome card */}
      {welcomeInfo && <WelcomeCard onClose={hideWelcomeHandler} />}
      <MenuItems />
      {displayCart && <Cart onClose={closeCartHandler} />}
    </Fragment>
  );
}

export default App
