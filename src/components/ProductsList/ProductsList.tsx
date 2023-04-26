import { Grid, Typography } from '@mui/material'
import ProductsListItem from './ProductsListItem'
// import productsArray from 'utils/productsArray'
import { useAppSelector } from 'redux/hooks'

const ProductsList = () => {
    const productsArray = useAppSelector((state) => state.products)

    return (
        <>
            <Typography variant="h4" align="center" component="h2">
                Products List
            </Typography>

            <Grid container spacing={3}>
                {productsArray.map(
                    ({
                        id,
                        title,
                        description,
                        type,
                        capacity,
                        price,
                        image,
                    }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductsListItem
                                id={id}
                                title={title}
                                description={description}
                                type={type}
                                capacity={capacity}
                                price={price}
                                image={image}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}

export default ProductsList
