import { getProductsObject, Product } from 'utils/productsArray'
import CartProductListItem from './CartProductListItem'
import { useAppSelector } from 'redux/hooks'

type ProductsObject = {
    [id: number]: Product
}

type Props = {
    productsInCart: {
        [id: number]: number
    }

    CartItem?: any
}
const CartProductList = ({
    productsInCart,

    CartItem = CartProductListItem,
}: Props) => {
    const productsArray = useAppSelector((state) => state.products)
    const productsObject: ProductsObject = getProductsObject(productsArray)

    return (
        <>
            {Object.keys(productsInCart).map((productId) => (
                <CartItem
                    key={productId}
                    product={productsObject[parseInt(productId)]}
                    productCount={productsInCart[parseInt(productId)]}
                />
            ))}
        </>
    )
}
export default CartProductList
