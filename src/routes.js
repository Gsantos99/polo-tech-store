import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Details from './components/Details'
import { loader } from './components/Details'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: 'details/:productId',
    element: <Details />,
    loader: loader
  }
])

export default router