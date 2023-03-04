import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals, getCartItems } from './features/cart/cartSlice';
import Modal from './components/Modal';

function App() {
  const {cartItems, isLoading} = useSelector((store)=> store.cart);
  const {isOpen} = useSelector((store)=> store.modal);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(calculateTotals())
  },[cartItems])

  useEffect(()=>{
    // get external data via fetch API
    dispatch(getCartItems('random'))
  }, [])

  if(isLoading){
    return (
      <div className='loadding'>
        <h1>....Loadding</h1>
      </div>
    )
  }
  return (
  <main>
    <Navbar />
    <CartContainer/>
    {isOpen && <Modal/>}
  </main>
)}
export default App;