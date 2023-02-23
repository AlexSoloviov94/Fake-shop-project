import { Card, CardActions, CardContent, Grid, Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { Product } from 'utils/productsArray'
type Props = {
    product: Product
    productCount: number
}
const CartProductListItemExtended = ({ product, productCount }: Props) => {
    return (
        <Grid item>
            <Card>
                <CardContent>
                    <div className="product-image">
                        <img src={product.image} alt="" />
                    </div>
                    <div>{product.title}</div>
                    <p>Price for one item: {product.price}</p>
                    <p>Count: {productCount}</p>
                </CardContent>
                <CardActions>
                    <Button variant="outlined">
                        <DeleteIcon />
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}
export default CartProductListItemExtended
