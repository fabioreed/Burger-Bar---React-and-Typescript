import { StyledProductCard } from './style'
import { StyledButton } from '../../../styles/button'
import { StyledParagraph, StyledTitle } from '../../../styles/typography'
import { useContext } from 'react'
import { CartContext } from '../../../providers/CartContext'

const ProductCard = () => {
  const { prod, filteredProducts, search, addToCart } = useContext(CartContext)

  return (
    <>
       { search.length > 0 ? 
        filteredProducts.map((item) => (
          <StyledProductCard key={item.id}>
            <div className='imageBox'>
              <img src={item.img} alt={item.name} />
            </div>
            <div className='content'>
              <StyledTitle tag='h3' $fontSize='three'>
                {item.name}
              </StyledTitle>
              <StyledParagraph className='category'>{item.category}</StyledParagraph>
              <StyledParagraph className='price'>R$ {item.price}</StyledParagraph>
              <StyledButton onClick={() => addToCart(item)} $buttonSize='medium' $buttonStyle='green'>
                Adicionar
              </StyledButton>
            </div>
          </StyledProductCard>))
          
          :
        
        prod.map((item) => (
          <StyledProductCard key={item.id}>
            <div className='imageBox'>
              <img src={item.img} alt={item.name} />
            </div>
            <div className='content'>
              <StyledTitle tag='h3' $fontSize='three'>
                {item.name}
              </StyledTitle>
              <StyledParagraph className='category'>{item.category}</StyledParagraph>
              <StyledParagraph className='price'>R$ {item.price}</StyledParagraph>
            <StyledButton onClick={() => addToCart(item)} $buttonSize='medium' $buttonStyle='green'>
                Adicionar
              </StyledButton>
            </div>
          </StyledProductCard>
        ))
      }
    </>
  )
}

export default ProductCard
