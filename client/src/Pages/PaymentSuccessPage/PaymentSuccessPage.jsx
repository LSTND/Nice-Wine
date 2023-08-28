/* eslint-disable no-console */
import React, { useState, useEffect } from 'react'
import { useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import './PaymentSuccessPage.scss'
import Button from '../../Components/Button/Button'
import MayLike from '../../Components/MayLike'


function PaymentSuccessPage() {
  const [cartItems, setCartItems] = useState([])
  const [paymentDate, setPaymentDate] = useState(null);
  const street = useSelector((state) => state.user.dataUser)
  const email = useSelector((state) => state.user.dataUser)
  const city = useSelector((state) => state.user.dataUser)
  const card = useSelector((state => state.card.bankCard))
  console.log(street)
  console.log(email)
  console.log(city)
  console.log(card)

  useEffect(() => {
    const cartItemsFromStorage = localStorage.getItem('cart')
    if (cartItemsFromStorage) {
      setCartItems(JSON.parse(cartItemsFromStorage))
    }
     const now = new Date();
    const formattedDate = now.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    setPaymentDate(formattedDate);
  }, [])
  
  const CartList = cartItems.map((el) => (
    <div className="cart-list__item" key={el.id}>
      <span className="cart-list__item-img">
        <img src={`http://localhost:4000${el.image}`} alt="" />
      </span>
      <span className="cart-list__item-info">
        <span className="cart-list__item-quantity">
          <p>{el.name}</p>
        </span>
      </span>
    </div>
  ))
 const subtotal = cartItems.reduce(
    (total, item) =>
      total +
      (item.currentPrice || 0) * (item.quantity || 1),
   
    0
  )
  const randomOrderNumber = Math.floor(Math.random() * 100000000)
  return (
    <section className="success-page">
      
        <h1 className="success-title">THANK YOU!</h1>
        <p className="success-info">
          We received your order and will start preparing your package right away. <br /> You will receive a
          confirmation email in a moment.
        </p>
      <h3 className="success-order-title">Order details - {randomOrderNumber}</h3>
      <div className="success">
        <div className="success-order">
          <div className="success-card">
            {CartList}
          </div>
          <div className='success-order__info-container'>
          <div className="success-order__delivery">
            <h4 className="success-order__title">Delivery Details</h4>
            <div className="success-order__info">
              <h4 className="success-order__info-title">Shipping address</h4>
              <p className="success-order__info-text">
                3 Falahi St , Falahi Ave, Pasdaran Blvd, Fars Province , Shiraz 71856-95159 Iran
              </p>
            </div>
            <div className="success-order__address">
              <h4 className="success-order__info-title">Billing addresss</h4>
              <p className="success-order__info-text">Same as shipping address</p>
            </div>
            <div className="success-order__address">
              <h4 className="success-order__info-title">Contact information</h4>
              <p className="success-order__info-text">amoopur@gmail.com</p>
            </div>
            </div>
            
          <div className="success-order__payment">
            <h4 className="success-order__title">Payment method</h4>
            <div className="success-address">
              <h4 className="success-order__info-title">Master card</h4>
              <p className="success-order__info-text">  </p>
              <h4 className="success-order__info-title">Estimated shipping</h4>
              <p className="success-order__inf-text"> {paymentDate}</p>
            </div>
            </div>
            </div>
        </div>
        <div className="success-summery">
          <div className="success-summery_recipe">
            <hr className="success-summery-line" />
            <div className="success-summery__order">
              <p className="success-summery__order-position">Subtotal</p>
              <span className="success-summery__order-price">${subtotal}</span>
            </div>
            <div className="success-summery__order">
              <p className="success-summery__order-position">Delivery</p>
              <span className="success-summery__order-price">$15</span>
            </div>
            <hr className="success-summery-line" />
            <div className="success-summery__order">
              <p className="success-summery__order-total">Total</p>
              <span className="success-summery__order-price-total">$7.85</span>
            </div>
          </div>
          <Link to="/">
            <Button text="keep shopping" btnStyles="success-btn" />
          </Link>
        </div>
      </div>
      <div>
        <MayLike/>
      </div>
    </section>
  )
}

export default PaymentSuccessPage
