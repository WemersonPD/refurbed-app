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

export enum Category {
    Smartphones = 'smartphones',
    Tablets = 'tablets',
    Laptops = 'laptops',
    Accessories = 'accessories',
}

export enum Brand {
    Apple = 'apple',
    Samsung = 'samsung',
    Google = 'google',
    Xiaomi = 'xiaomi',
}

export enum Condition {
    New = 'new',
    Refurbished = 'refurbished',
    Used = 'used',
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
    categories?: Category[]
    brands?: Brand[]
    conditions?: Condition[]
}

