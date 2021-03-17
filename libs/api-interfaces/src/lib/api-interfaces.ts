export interface Message {
  message: string;
}
export interface BaseEntity {
  Id: string | null;
}
export interface Widget extends BaseEntity{
  title: string;
  description: string;
}
export interface Person extends BaseEntity{
  name: string;
  gender: string;
  age: number;
}

