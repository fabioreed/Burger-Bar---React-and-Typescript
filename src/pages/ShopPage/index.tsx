import { StyledShopPage } from './style'
import CartModal from '../../components/CartModal'
import Header from '../../components/Header'
import ProductList from '../../components/ProductList'
import { StyledContainer } from '../../styles/grid'
import { useContext, useEffect } from 'react'
import { api } from '../../services/api'
import { CartContext } from '../../providers/CartContext'
import { useNavigate } from 'react-router-dom'

const ShopPage = () => {
  const navigate = useNavigate()
  const { setProd, modal } = useContext(CartContext)

  useEffect(() => {
    const token = localStorage.getItem('@userToken')
    if (token) {
      const getProducts = async () => {
        try {
          const res = await api.get('/products', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
    
          setProd(res.data)

          navigate('/shop')
    
        } catch (error) {
          console.log(error)
  
          navigate('/')
  
          localStorage.clear()
        }
      }
      getProducts()
    }
  }, [])

    return (
      <StyledShopPage>
        { modal && <CartModal /> }
        <Header />
        <main>
          <StyledContainer containerWidth={1300}>
            <ProductList />
          </StyledContainer>
        </main>
      </StyledShopPage>
  )
}


export default ShopPage
