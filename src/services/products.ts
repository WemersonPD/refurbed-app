import type { Product, ProductQuery } from "@/types/product";
import type { ApiResponse, PaginatedResponse } from "@/types/types";

const API_BASE = import.meta.env.VITE_API_BASE;

const formatQueryParams = (params: ProductQuery): URLSearchParams => {
	const query = new URLSearchParams();

	// Always required
	query.set("limit", String(params.limit));
	query.set("offset", String(params.offset));

	// Optional filters — only append when set
	if (params.search) query.set("search", params.search);
	if (params.color) query.set("color", params.color);
	if (params.bestseller !== undefined)
		query.set("bestseller", String(params.bestseller));
	if (params.minPrice !== undefined)
		query.set("minPrice", String(params.minPrice));
	if (params.maxPrice !== undefined)
		query.set("maxPrice", String(params.maxPrice));
	if (params.sortBy) query.set("sortBy", params.sortBy);
	if (params.categories?.length) {
		for (const category of params.categories) {
			query.append("category", category);
		}
	}
	if (params.brands?.length) {
		for (const brand of params.brands) {
			query.append("brand", brand);
		}
	}
	if (params.conditions?.length) {
		for (const condition of params.conditions) {
			query.append("condition", condition);
		}
	}

	return query;
};

export async function fetchProducts(
	params: ProductQuery,
): Promise<PaginatedResponse<Product>> {
	const queryParams = formatQueryParams(params);

	const res = await fetch(`${API_BASE}/products?${queryParams}`);

	if (!res.ok) {
		throw new Error(`Failed to fetch products: ${res.status}`);
	}

	const json: ApiResponse<PaginatedResponse<Product>> = await res.json();

	if (!json.ok) {
		throw new Error("API returned an error");
	}

	return json.data;
}
