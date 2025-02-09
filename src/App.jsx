import ProductList from './ProductList';
import Cart from './Cart';

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Shopping Cart App</h1>
      <ProductList />
      <Cart />
    </div>
  );
};

export default App;
