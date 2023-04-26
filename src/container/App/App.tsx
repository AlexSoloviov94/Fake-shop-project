import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'

import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'

import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home/Home'
import { Container } from '@mui/material'
import CartPage from 'pages/Cart/CartPage'
import CheckoutPage from 'pages/Checkout/CheckoutPage'
import ProductPage from 'pages/Product/ProductPage'

type Props = {}

const App = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />

            <Container
                sx={{
                    padding: '60px 0',
                }}
            >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="cart" element={<CartPage />} />
                    <Route path="checkout" element={<CheckoutPage />} />
                    <Route path="/products/:id" element={<ProductPage />} />
                </Routes>
            </Container>

            <Footer />
        </StyledEngineProvider>
    )
}
export default App
