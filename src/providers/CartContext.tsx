import { createContext, ReactNode, useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { IDefaultProviderProps, IProducts } from './@types'

export const CartContext = createContext({} as ICartContext)

interface ICartContext {
  prod: IProducts[]
  setProd: (products: IProducts[]) => void
  setSearch: (products: string) => void
  filteredProducts: IProducts[]
  search: string
  addToCart: (item: IProducts) => void
  modal: boolean
  setModal: React.Dispatch<React.SetStateAction<boolean>>
  currentSale: ICartProduct[]
  setCurrentSale: React.Dispatch<React.SetStateAction<ICartProduct[]>>
  removeToCart: (idProduct: any) => void
  cartTotal: number
  setCartTotal: React.Dispatch<React.SetStateAction<number>>
}

interface ICartProduct {
  id: number
  name: string
  price: number
  img: string
  target: string
}

interface IAddToCart {
  id: number
  name: string
  img: string
}

export const CartProvider = ({ children }: IDefaultProviderProps) => {
  const [prod, setProd] = useState<IProducts[]>([])
  const [currentSale, setCurrentSale] = useState<ICartProduct[]>([])
  const [filteredProducts, setFilteredProducts] = useState<IProducts[]>([])
  const [search, setSearch] = useState('')
  const [modal, setModal] = useState(false)
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    setFilteredProducts(prod.filter(item => item.name.toLowerCase().includes(search.toLowerCase())))
  }, [prod, search])

  const addToCart = (item: ICartProduct) => {
    if (!currentSale.includes(item)) {
      setCurrentSale([...currentSale, item])

      toast.success('Adicionado!')
    } else {
      toast.warning('Produto já adicionado no carrinho!')
    }
  }

  const removeToCart = (idProduct: number) => {
    const remove = currentSale.filter((item) => {
      return item.id !== idProduct
    })
    
    setCurrentSale(remove)

    toast.success('Produto removido!')
  }

  useEffect(() => {
    setCartTotal(currentSale.reduce((acc, current) => {
      return acc + current.price
    }, 0))
  }, [currentSale])

  return (
    <CartContext.Provider
      value={{
        prod,
        setProd,
        setSearch,
        filteredProducts,
        search,
        modal,
        setModal,
        addToCart,
        currentSale,
        setCurrentSale,
        removeToCart,
        cartTotal,
        setCartTotal
      }}>
      {children}
    </CartContext.Provider>
  )
}