import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { CartProvider } from './providers/CartContext'
import { UserProvider } from './providers/UserContext'
import Router from './routes'
import { GlobalStyles } from './styles/global'

const App = () => (
  <>
    <GlobalStyles />
    <ToastContainer
      position='top-right'
      autoClose={400}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='light'
    />
    <Router />
  </>
)

export default App
