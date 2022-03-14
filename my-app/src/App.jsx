import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ShowInfo from './components/ShowInfo';
import Item from './components/Item';

function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState([
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
    { id: 3, name: "Product C" }
  ])
  const removeItem = (id) => {
    const newsProducts = products.filter(item => item.id !== id);
    setProducts(newsProducts);
  }
  return (
    <div className="App">
      {products.map((item, index) => <div>{item.name}
        <button onClick={() => removeItem(item.id)}>Remove</button></div>
      )}
      <ShowInfo name="Giang" age={20} />
    </div>
  )
}

export default App
