import { Grid, Typography } from '@mui/material'
import ProductsListItem from './ProductsListItem'

type Props = {}

const ProductsList = (props: Props) => {
    return (
        <>
            <Typography variant="h4" align="center" component="h2">
                Products List
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    {''}
                    <ProductsListItem
                        title="IPhone 14 Pro"
                        description="This IPhone 14 Pro"
                        type="phone"
                        capacity="256 "
                        price={1200}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    {''}
                    <ProductsListItem
                        title="IPhone 12 Pro"
                        description="This IPhone 12 Pro"
                        type="phone"
                        capacity="128 "
                        price={900}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    {''}
                    <ProductsListItem
                        title="IPhone 13"
                        description="This IPhone 13"
                        type="phone"
                        capacity="512 "
                        price={1000}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default ProductsList
