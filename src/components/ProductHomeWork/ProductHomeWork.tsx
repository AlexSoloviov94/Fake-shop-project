import {
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
} from '@mui/material'

type Props = {
    totalAdd: any
    description: string
    id: number
    title: string
    price: number
    currencyType: string
    exchangeRate: number
}
const ProductHomeWork = ({
    totalAdd,
    exchangeRate,
    title,
    price,
    description,
    currencyType,
}: Props) => {
    const newPrice = (price * exchangeRate).toFixed(2)

    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="h3" align="center" component="h2">
                    <div className="product-title">{title}</div>
                </Typography>

                <div className="product-desc">This is {description}... </div>
                <div className="product-price">
                    {currencyType} {newPrice}
                </div>
            </CardContent>
            <CardActions className="product-btn-wrap">
                <Button variant="outlined" onClick={() => totalAdd(price)}>
                    Buy
                </Button>
            </CardActions>
        </Card>
    )
}
export default ProductHomeWork
