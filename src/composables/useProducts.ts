import { ref, watch, type Ref } from 'vue'
import { fetchProducts } from '@/services/products'
import type { Product, ProductQuery } from '@/types/product'

export function useProducts(query: Ref<ProductQuery>) {
    const limit = ref(5)
    const offset = ref(0)
    const total = ref(0)

    const products = ref<Product[]>([])

    const loading = ref(false)
    const error = ref<string | null>(null)

    async function load() {
        loading.value = true
        error.value = null

        try {
           const response = await fetchProducts(query.value)

           products.value = response.data
           limit.value = response.limit
           offset.value = response.offset
           total.value = response.total
        } catch (e) {
            error.value = e instanceof Error ? e.message : 'Unknown error'
        } finally {
            loading.value = false
        }
    }

    // Re-fetch whenever query params change (deep watch for nested object changes)
    watch(query, load, { deep: true, immediate: true })

    return { products, limit, offset, total, loading, error }
}
