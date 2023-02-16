import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Container } from '@mui/material'
import Logo from 'components/Logo/Logo'
import Menu from 'components/Menu/Menu'
import './Header.scss'
import CartHeader from 'components/CartHeader/CartHeader'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const Header = ({ productsInCart }: Props) => {
    return (
        <AppBar position="static" className="app-bar">
            <Container>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Logo />
                    <Menu />
                    <CartHeader productsInCart={productsInCart} />
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header
