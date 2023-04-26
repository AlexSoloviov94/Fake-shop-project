export type HomeProduct = {
    description: string
    title: string
    price: number
    id: number
}

const productsHomeArray: HomeProduct[] = [
    {
        title: 'iPhone 12 ',
        description: 'iPhone 12 ',
        price: 750,
        id: 1,
    },
    {
        title: 'iPhone 8',
        description: 'iPhone 8 ',
        price: 850,
        id: 2,
    },
    {
        title: 'iPhone X',
        description: 'iPhone X',
        price: 1250,
        id: 3,
    },
]

export const getHomeProductsObject = (array: HomeProduct[]) =>
    array.reduce(
        (object, product) => ({ ...object, [product.id]: product }),
        {}
    )

export default productsHomeArray
