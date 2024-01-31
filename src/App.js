import './App.css';
import React, {useState} from "react"
import data from './data';
import {nanoid} from "nanoid"
import MenuItem from './MenuItem';
import CartItem from './CartItem';

function App() {
  const [menuData, setMenuData] = useState(data.map(el => ({
    ...el,
    id: nanoid(),
    qwt: 0,
    totalPrice: function() {
      return this.price * this.qwt
    }
  })))
  const totalPrice = menuData.map(el => el.totalPrice()).reduce((a,b) => a + b)
  console.log(totalPrice)
  const addedItems = menuData.filter(el => el.qwt > 0)
  const addItems = (id) => {
    setMenuData(prevMenuData => prevMenuData.map(el => ({
      ...el,
      qwt: el.id === id ? el.qwt + 1 : el.qwt
    })))
  }
  const removeItems = (id) => {
    setMenuData(prevMenuData => prevMenuData.map(el => ({
      ...el,
      qwt: el.id === id ? el.qwt - 1 : el.qwt
    })))
  }
  const menuItems = menuData.map(el => <MenuItem 
    addItems={addItems} 
    key={el.id} 
    id={el.id} 
    name={el.name} 
    price={el.price}  
    />)
    const cartItems = addedItems.map(el => <CartItem
      removeItems={removeItems}
      key={el.id} 
      id={el.id} 
      name={el.name}
      price={el.price}
      qwt={el.qwt}
      totalPrice={el.totalPrice()}
      />)
  return (
    <div className="App">
      <h1>MENU</h1>
      <div className='menu'>
        {menuItems}
      </div>
      <h1>CART</h1>
      <div className='cart'>
        {addedItems.length ? cartItems : "The cart is empty..yet"}
        <h3>Total price: {totalPrice} USD</h3>
      </div>
    </div>
  );
}

export default App;
