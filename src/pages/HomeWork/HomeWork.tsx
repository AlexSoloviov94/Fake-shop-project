import { useState } from 'react'
import { HomeProduct } from 'utils/productsHomeArray'
import { useCallback } from 'react'

import ContainerHomeWork from '../../components/ConteinerHomeWork/ConteinerHomeWork'

type Props = {
    productsObject?: {
        [id: number]: HomeProduct
    }
}
const HomeWork = (props: Props) => {
    const [currencyType, setCurrencyType] = useState<string>('USD')

    const [exchangeRate, setExchangeRate] = useState<number>(1)

    const [total, setTotal] = useState<number>(0)

    const totalAdd = useCallback((price: number) => {
        setTotal((prevTotal) => prevTotal + price)
    }, [])

    const onChangeCurrencyToUSD = useCallback(() => {
        setCurrencyType('USD')
        setExchangeRate(1)
    }, [])

    const onChangeCurrencyToUAH = useCallback(() => {
        setCurrencyType('UAH')
        setExchangeRate(40)
    }, [])

    const onChangeCurrencyToEUR = useCallback(() => {
        setCurrencyType('EUR')
        setExchangeRate(0.94)
    }, [])

    return (
        <>
            <ContainerHomeWork
                total={total}
                totalAdd={totalAdd}
                exchangeRate={exchangeRate}
                currencyType={currencyType}
                onChangeCurrencyToUSD={onChangeCurrencyToUSD}
                onChangeCurrencyToEUR={onChangeCurrencyToEUR}
                onChangeCurrencyToUAH={onChangeCurrencyToUAH}
            />
        </>
    )
}
export default HomeWork
