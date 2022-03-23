import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { ProductType } from './types/Product'
import { Route, Routes } from 'react-router-dom'
import ProductManager from './pages/ProductManager'
import axios from 'axios'

function App() {
  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get('http://localhost:3002/products')
    }
  }, [])

  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductManager />} />
      </Routes>
    </div>
  )
}

export default App
