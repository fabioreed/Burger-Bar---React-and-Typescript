import { useContext } from 'react'
import { MdDelete } from 'react-icons/md'
import { StyledCartProductCard } from './style'
import { StyledTitle } from '../../../../styles/typography'
import { CartContext } from '../../../../providers/CartContext'

const CartProductCard = () => {
  const { currentSale, removeToCart } = useContext(CartContext)

  return (
    <>
      {currentSale.map((item) => (
        <StyledCartProductCard key={item.id}>
          <div className='imageBox'>
            <img src={item.img} alt={item.name} />
          </div>
          <div className='contentBox'>
            <StyledTitle tag='h3' $fontSize='three'>
              {item.name}
            </StyledTitle>
            <button type='button' aria-label='Remover' onClick={() => removeToCart(item.id)}>
              <MdDelete size={24} />
            </button>
          </div>
        </StyledCartProductCard>
      ))}
    </>
  )
}

export default CartProductCard
