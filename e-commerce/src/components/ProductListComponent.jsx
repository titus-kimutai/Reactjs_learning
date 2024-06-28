/* eslint-disable react/prop-types */
import ProductComponent from "./ProductComponent"


const ProductListComponent = ({products}) => {
  return (
    <div className="product-list">
    {products.map((product) => (
      <ProductComponent key={product.id} product={product} />
    ))}
  </div>
  )
}

export default ProductListComponent