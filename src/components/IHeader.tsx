export interface IUsers{
  ad: IAd
  data: IUsersData[]
  page: number
  per_page: number
  total: number
  total_pages: number
}

interface IUsersData{
  avatar: string
  email: string
  first_name: string
  last_name:string
  id: number
}

interface IAd{
  company: string
  text: string
  url: string
}