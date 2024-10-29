export interface GetListResponse<T> {
  data: T[]
  page: number
  limit: number
  totalCount: number
}
