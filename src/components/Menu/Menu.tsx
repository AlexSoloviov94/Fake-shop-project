import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

type Props = {}

const Menu = (props: Props) => {
    return (
        <>
            <Button color="inherit">
                <Link to="/">Home</Link>
            </Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Payment</Button>
            <Button color="inherit">Shipping</Button>
            <Button color="inherit">
                <Link to="/cart">Cart</Link>
            </Button>
        </>
    )
}
export default Menu
