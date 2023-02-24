import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartItems = cartList.length

      const result = cartList.map(each => each.quantity * each.price)
      const total = result.reduce((sumd, number) => sumd + number)

      console.log(total)
      return (
        <div className="cart-summary-container">
          <h1 className="total-cart">
            Order Total: <span className="price">Rs {total}/-</span>
          </h1>
          <p>{cartItems} Items in cart</p>
          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
