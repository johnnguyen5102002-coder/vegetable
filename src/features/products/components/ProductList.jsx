import { useDispatch, useSelector } from "react-redux"
import {addToCart} from '../productSlice'
import ProductCard from "./productCard"

const ProductList = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products.products)

  function AddToCart(id){
    dispatch(addToCart(id));
  }

  return (
    <div className="grid">
      {products.map(product => {
        return (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            handleClick={() => AddToCart(product.id)}
          />
        )
      })}
    </div>
  )
}

export default ProductList
