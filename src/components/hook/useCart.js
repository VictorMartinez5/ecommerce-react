import { useContext } from 'react'
import { CartContext } from '../../context/cart'

export const useCart = () => {
  const context = useContext(CartContext)

  if (context === undefined) {
    throw new Error('useCart no esta envuelto en un provaider0')
  }

  return context
}