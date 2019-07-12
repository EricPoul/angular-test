export interface UserInterface {
  readonly id: string;
  first_name: string;
  last_name: string;
  avatar: string;
  email: string;
}

export interface UserList {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserInterface[];
}
