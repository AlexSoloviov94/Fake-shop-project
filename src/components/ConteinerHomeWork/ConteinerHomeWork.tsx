import { Grid, Typography } from '@mui/material'
import Currency from '../Currency/Currency'
import productsHomeArray from 'utils/productsHomeArray'
import ProductHomeWork from '../ProductHomeWork/ProductHomeWork'
import './ContainerHomeWork.scss'
import TotalHomeWork from '../TotalHomeWork/TotalHomeWork'

type Props = {
    totalAdd: (price: number) => any
    total: number
    exchangeRate: number
    currencyType: string
    onChangeCurrencyToUAH: () => void
    onChangeCurrencyToUSD: () => void
    onChangeCurrencyToEUR: () => void
}

const ConteinerHomeWork = ({
    totalAdd,
    total,
    exchangeRate,
    currencyType,
    onChangeCurrencyToUAH,
    onChangeCurrencyToUSD,
    onChangeCurrencyToEUR,
}: Props) => {
    return (
        <>
            <Typography
                component={'h1'}
                variant={'h4'}
                sx={{
                    margin: '0px 0 40px 0',
                }}
            >
                Our shop page
            </Typography>
            <div className="center">
                <Currency
                    onChangeCurrencyToUAH={onChangeCurrencyToUAH}
                    onChangeCurrencyToUSD={onChangeCurrencyToUSD}
                    onChangeCurrencyToEUR={onChangeCurrencyToEUR}
                />
            </div>

            <Grid container spacing={3}>
                {productsHomeArray.map(({ title, description, price, id }) => (
                    <Grid item xs={12} sm={6} md={4} key={id}>
                        {' '}
                        <ProductHomeWork
                            totalAdd={totalAdd}
                            exchangeRate={exchangeRate}
                            currencyType={currencyType}
                            id={id}
                            description={description}
                            title={title}
                            price={price}
                        />
                    </Grid>
                ))}
            </Grid>
            <div className="center">
                <TotalHomeWork
                    exchangeRate={exchangeRate}
                    total={total}
                    currencyType={currencyType}
                />
            </div>
        </>
    )
}
export default ConteinerHomeWork
