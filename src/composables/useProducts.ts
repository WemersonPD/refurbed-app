import { ref, watch, type Ref } from 'vue'
import { fetchProducts } from '@/services/products'
import type { Product, ProductQuery } from '@/types/product'

export function useProducts(query: Ref<ProductQuery>) {
    const products = ref<Product[]>([])
    const loading = ref(false)
    const error = ref<string | null>(null)

    async function load() {
        loading.value = true
        error.value = null

        try {
            products.value = await fetchProducts(query.value)
        } catch (e) {
            error.value = e instanceof Error ? e.message : 'Unknown error'
        } finally {
            loading.value = false
        }
    }

    // Re-fetch whenever query params change (deep watch for nested object changes)
    watch(query, load, { deep: true, immediate: true })

    return { products, loading, error }
}
