export interface ApiResponse<T> {
    ok: boolean
    data: T
}


export type PaginatedResponse<T> = {
    offset: number;
    limit: number;
    total: number;
    data: T[];
}