export type TQueryType = {
  // token?: string
  [prop: string]: TAny
}

export type TRequestType = 'get' | 'post'

export type TParams = TDict<TAny> | undefined | null