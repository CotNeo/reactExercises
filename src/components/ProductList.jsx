const Product = ({ product }) => (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem' }}>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
    </div>
  )
  
  const ProductList = ({ products }) => (
    <div>
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  )
  
  export default ProductList
  