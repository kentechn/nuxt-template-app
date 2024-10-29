import type { GetListResponse } from "./common"

export interface User {
  id: string
  username: string
  email: string
  isAdmin: boolean
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface GetUsersResponse extends GetListResponse<User> { }
