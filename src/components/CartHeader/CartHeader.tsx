import { useAppSelector } from 'redux/hooks'
import CartProductList from '../CartProductList/CartProductList'
import CartTotal from '../CartTotal/CartTotal'
type Props = {
    productsInCart?: {
        [id: number]: number
    }
}

const CartHeader = () => {
    const productsInCart = useAppSelector((state) => state.productsInCart)
    return (
        <div>
            <CartProductList productsInCart={productsInCart} />
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}
export default CartHeader
