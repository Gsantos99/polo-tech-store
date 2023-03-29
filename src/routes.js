import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Details from './components/Details'
import { loader } from './components/Details'
import CartPage from './components/CartPage'
import { CartProvider } from './contexts/cart-context'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: 'details/:productId',
    element: (
      <CartProvider>
        <Details />
      </CartProvider>
    ),
    loader: loader
  },
  {
    path: 'cart/',
    element: (
      <CartProvider>
        <CartPage />
      </CartProvider>
    )
  }
])

export default router
