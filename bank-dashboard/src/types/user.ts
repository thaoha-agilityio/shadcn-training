import { CardInfo } from './card';

export interface UserInfo {
  name: string;
  email: string;
  password?: string;
  avatar?: string;
  card: CardInfo;
  permanentAddress?: string;
  presentAddress?: string;
  postalCode?: number;
  country?: string;
  city?: string;
}

export type LoginPayload = Pick<UserInfo, 'email' | 'password'>;

export interface LoginResponse {
  accessToken: string;
  user: Omit<UserInfo, 'password'>;
}

export type UserPayload = Omit<UserInfo, 'password' | 'email ' | 'id'>;
