type Props = {
    cartData: {
        totalCount: number
        totalPrice: number
    }
}

const CartHeader = ({ cartData }: Props) => {
    return (
        <div>
            <div>{cartData.totalCount}</div>
            <div>$ {cartData.totalPrice}</div>
        </div>
    )
}
export default CartHeader
