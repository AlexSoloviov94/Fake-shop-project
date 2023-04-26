import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'

import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'

import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home/Home'
import { Container } from '@mui/material'
import CartPage from 'pages/Cart/CartPage'
import CheckoutPage from 'pages/Checkout/CheckoutPage'
import { useAppDispatch } from 'redux/hooks'
import { useEffect } from 'react'
import { fetchProducts } from 'redux/productsReducer'
import HomeWork from 'pages/HomeWork/HomeWork'

type Props = {}

const App = (props: Props) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    })

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
                    <Route path="homeWork" element={<HomeWork />} />
                </Routes>
            </Container>

            <Footer />
        </StyledEngineProvider>
    )
}
export default App
