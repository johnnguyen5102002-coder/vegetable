import { useDispatch, useSelector } from "react-redux"

import ProductCard from "./productCard"

const ProductList = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products.products)

  return (
    <div className="grid">
      {products.map(product => {
        return (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        )
      })}
    </div>
  )
}

export default ProductList
