import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addItem } from './store/cartSlice';
import './ProductList.css'; // استيراد ملف CSS

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('https://678504061ec630ca33a6cc51.mockapi.io/products')
      .then(response => {
        console.log("Data from API:", response.data); // ✅ طباعة البيانات في الكونسول
        setProducts(response.data);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="container">
      <h2 className="title">Product List</h2>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            
            <h3 className="product-name">{product.Title}</h3>
            <p className="product-price">${product.Price}</p>
            
            <button 
              className="add-to-cart-btn"
              onClick={() => dispatch(addItem(product))}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
