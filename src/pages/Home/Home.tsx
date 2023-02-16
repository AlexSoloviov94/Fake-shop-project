import ProductsList from 'components/ProductsList/ProductsList'

type Props = {
    addProductToCart: (count: number, price: number) => void
}
const Home = ({ addProductToCart }: Props) => {
    return (
        <div>
            <ProductsList addProductToCart={addProductToCart} />
        </div>
    )
}
export default Home
