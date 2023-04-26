import { Button } from '@mui/material'

type Props = {
    onChangeCurrencyToUSD: any
    onChangeCurrencyToEUR: any
    onChangeCurrencyToUAH: any
}

const Currency = ({
    onChangeCurrencyToUSD,
    onChangeCurrencyToEUR,
    onChangeCurrencyToUAH,
}: Props) => {
    return (
        <>
            <Button variant="outlined" onClick={onChangeCurrencyToUSD}>
                {' '}
                USD{' '}
            </Button>
            <Button variant="outlined" onClick={onChangeCurrencyToEUR}>
                {' '}
                EUR{' '}
            </Button>
            <Button variant="outlined" onClick={onChangeCurrencyToUAH}>
                {' '}
                UAH{' '}
            </Button>
        </>
    )
}
export default Currency
