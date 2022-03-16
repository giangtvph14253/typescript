import { useEffect, useState } from 'react'
import axios from 'axios';
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import type { ProductType } from './types/product';
import { list, remove } from './api/product';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import WebsiteLayouts from './pages/layouts/WebsiteLayouts';
import Product from './pages/Product';
import Home from './pages/Home';
import AdminLayouts from './pages/layouts/AdminLayouts';
import Dashboarh from './pages/Dashboard';
function App() {
    const [products, setProducts] = useState<ProductType[]>([]);
    // const [count, setCount] = useState<number>(0);

    useEffect(() => {
        const getProducts = async () => {
            const { data } = await list();
            setProducts(data);
        }
        getProducts();
    }, [])

    const removeItem = async (id: number) => {
        // xoa tren API
        const { data } = await remove(id);
        // reRender
        data && setProducts(products.filter(item => item._id !== data._id));
    }
    return (
        <div className="App">
            {/* <table>
        <thead>
          <th>#</th>
          <th>Name</th>
          <th></th>
        </thead>
        <tbody>
          {products.map((item, index) => {
            return <tr>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>
                      <button onClick={() => removeItem(item._id)}>Remove</button>
                    </td>
                  </tr>
          })}
          
        </tbody>
      </table> */}

            <header>
                <ul>
                    <li><NavLink to="/">Home Page</NavLink></li>
                    <li><NavLink to="/product">Product Page</NavLink></li>
                    <li><NavLink to="/admin/dashboard">Admin Dashboard</NavLink></li>
                </ul>
            </header>
            <main>
                <Routes>
                    {/* <Route path="/" element={<h1>Home Page</h1>} />
                    <Route path="product" element={<h1>Product Page</h1>} />
                    <Route path="about" element={<h1>About</h1>} /> */}

                    <Route path='/' element={<WebsiteLayouts />}>
                        <Route index element={<Home />} />
                        <Route path='product' element={<Product />} />
                    </Route>

                    <Route path='admin' element={<AdminLayouts />}>
                        <Route index element={<Navigate to="dasboard" />} />
                        <Route path='dashboard' element={<Dashboarh />} />
                        <Route path='product' element={<Product />} />
                    </Route>
                </Routes>
            </main>

        </div>
    )
}

export default App