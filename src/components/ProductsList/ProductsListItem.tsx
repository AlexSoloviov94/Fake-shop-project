import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductsListItem.scss'
type Props = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
}

const ProductsListItem = (props: Props) => {
    return (
        <Card variant="outlined" className="product">
            <CardContent>
                <div className="product-title">{props.title}</div>
                <div className="product-desc">{props.description}</div>
                <div className="product-features">Type: {props.type}</div>
                <div className="product-features">
                    Capacity: {props.capacity} Gb
                </div>
                <div className="product-price">{props.price}$</div>
            </CardContent>
            <CardActions className="prodect-btn-wrap">
                <Button variant="outlined">Add to cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductsListItem
