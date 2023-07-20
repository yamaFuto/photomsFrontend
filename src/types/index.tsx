export type photo = {
  created_at: string,
  updated_at: string,
  id: number,
  goods:number,
  sum: number,
  url: string,
  detail_id: number
}

export type glob = {
  genre: string, 
  search: string,
  word: string
}

export type detail = {
  created_at: string
  explanation: string
  genre: string
  id: number
  name: string
  photoname: string
  updated_at: string
}

export type comment = {
  created_at: string
  name: string
  id: number
  goods: number
  detail_id: number
  comment: string
  updated_at: string
}

export type PhotoDetail = [
  detail[],
  photo[],
  comment[]
]