export interface Product {
    id: string
    name: string
    base_price: number
    image_url: string
    discounted_price: number
    discount_percent: number
    bestseller: boolean
    colors: string[]
    stock: number
}

export interface ProductQuery {
    limit: number
    offset: number
    search?: string
    color?: string
    bestseller?: boolean
    minPrice?: number
    maxPrice?: number
    sortBy?: 'price_asc' | 'price_desc' | 'bestseller'
}

