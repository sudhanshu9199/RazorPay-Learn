//
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductCard from './page/Product/ProductCard';

const App = () => {
  // 1. Initialize state (camelCase convention)
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // 2. Fetch data
    axios.get('http://localhost:3000/api/products/get-item')
      .then(response => {
        // 3. Set the specific product object from your API response
        setProduct(response.data.product);
        console.log("Fetched Data:", response.data.product);
      })
      .catch(err => {
        console.error("Error fetching product:", err);
      });
  }, []);

  return (
    // 4. Center the card on the screen for better visibility
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      
      {/* 5. Conditional Rendering: Only show Card if product exists */}
      {product ? (
        <ProductCard data={{ product }} />
      ) : (
        <p>Loading product...</p>
      )}
      
    </div>
  );
}

export default App;