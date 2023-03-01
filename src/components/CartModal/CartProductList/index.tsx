import {useContext} from 'react'
import CartProductCard from './CartProductCard'
import { StyledCartProductList } from './style'
import { StyledButton } from '../../../styles/button'
import { StyledParagraph } from '../../../styles/typography'
import { CartContext } from '../../../providers/CartContext'
import { toast } from 'react-toastify'

const CartProductList = () => {

  const { setCurrentSale, cartTotal } = useContext(CartContext)

  const removeAll = () => {
    setCurrentSale([])

    toast.success('Carrinho vazio!')
  }

  return (
    <StyledCartProductList>
      <ul>
        <CartProductCard />
      </ul>

      <div className='totalBox'>
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className='total'>R$ {cartTotal.toFixed(2)}</StyledParagraph>
      </div>
      <StyledButton $buttonSize='default' $buttonStyle='gray' onClick={() => {removeAll()}}>
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  )
}

export default CartProductList
