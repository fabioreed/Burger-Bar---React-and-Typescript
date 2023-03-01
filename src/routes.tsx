import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ShopPage from './pages/ShopPage'
import { CartProvider } from './providers/CartContext'
import { UserProvider } from './providers/UserContext'

const Router = () => {
  return (
    <UserProvider>
      <Routes>
        <Route path='/' element={ <LoginPage /> } />
        <Route path='/register' element={ <RegisterPage /> } />
        <Route path='*' element={ <LoginPage /> } />

          <Route
            path='/shop' element={
              <CartProvider>
                <ShopPage />
              </CartProvider>
            } />
      </Routes>
    </UserProvider>
  )
}

export default Router
