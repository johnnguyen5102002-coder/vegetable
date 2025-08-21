import { useDispatch, useSelector } from "react-redux"
import {
  removeFromCart,
  decCart,
  incCart,
} from "../../features/products/productSlice"

const Cart = () => {
  const dispatch = useDispatch()
  const carts = useSelector(state => state.products.cart)
  function removeCart(id) {
    dispatch(removeFromCart(id))
  }
  const totalBill = carts
    .map(cart => parseInt(cart.price) * cart.quantity)
    .reduce((pre, curr) => pre + curr, 0)

  function handleChange() {}

  return (
    <>
      <div className="cart-container">
        <h1>🛒 Giỏ hàng của bạn</h1>

        <table className="cart-table">
          <thead>
            <tr>
              <th>Sản phẩm</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Tổng</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {carts.map((cart, index) => {
              return (
                <tr key={index}>
                  <td className="product-info">
                    <img src={`/images/${cart.image}`} alt={cart.name} />
                    <span>{cart.name}</span>
                  </td>
                  <td>{cart.price.toLocaleString()}</td>
                  <td>
                    <div className="quantity">
                      <button onClick={() => dispatch(decCart(cart.id))}>-</button>
                      <input
                        type="text"
                        value={cart.quantity}
                        onChange={handleChange}
                      />
                      <button onClick={() => dispatch(incCart(cart.id))}>+</button>
                    </div>
                  </td>
                  <td>
                    {(parseInt(cart.price) * cart.quantity).toLocaleString()}
                  </td>
                  <td>
                    <button
                      className="remove-btn"
                      onClick={() => removeCart(cart.id)}
                    >
                      Xoá
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>

        <div className="cart-summary">
          <h2>
            Tổng cộng: <span>{totalBill.toLocaleString()} VNĐ</span>
          </h2>
          <button className="checkout-btn">Thanh toán</button>
        </div>
      </div>

      <div></div>
    </>
  )
}

export default Cart
