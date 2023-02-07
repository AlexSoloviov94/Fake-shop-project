type Product = {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

const productsArray: Product [] = [
    {   
        id: 1,
        title: 'IPhone 14 Pro',
        description: '<p class="red">This is IPhone 14 Pro<p>',
        type: 'phone',
        capacity: '256',
        price: 1200,
        image:"images/IPhone-black.jpg",
    },
    {
        id: 2,
        title: 'IPhone 13 Pro',
        description: 'This is IPhone 13 Pro',
        type: 'phone',
        capacity: '256',
        price: 1000,
        image:"images/IPhone-blue.jpg",
    },
    {
        id: 3,
        title: 'IPhone 12 Pro',
        description: 'This is IPhone 12 Pro',
        type: 'phone',
        capacity: '128',
        price: 900,
        image:"images/IPhone-gold.jpg",
    },
    {
        id: 4,
        title: 'IPhone 11 Pro',
        description: 'This is IPhone 11 Pro',
        type: 'phone',
        capacity: '512',
        price: 850,
        image:"images/IPhone-green.jpg",
    },
    {
        id: 5,
        title: 'IPhone 11 ',
        description: 'This is IPhone 11',
        type: 'phone',
        capacity: '256',
        price: 800,
        image:"images/IPhone-pink.jpg",
    },
    {
        id: 6,
        title: 'IPhone 10 Pro',
        description: 'This is IPhone 10 Pro',
        type: 'phone',
        capacity: '256',
        price: 800,
        image:"images/IPhone-purple.jpg",
    },
    {
        id: 7,
        title: 'IPhone X ',
        description: 'This is IPhone X',
        type: 'phone',
        capacity: '256',
        price: 750,
        image:"images/IPhone-red.jpg",
    },
    {
        id: 8,
        title: 'IPhone 9S',
        description: 'This is IPhone 9S',
        type: 'phone',
        capacity: '128',
        price: 600,
        image:"images/IPhone-silver.jpg",
    },
]

export default productsArray