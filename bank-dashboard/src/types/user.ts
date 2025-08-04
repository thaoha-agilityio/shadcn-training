import { CardInfo } from './card';

export interface UserInfo {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  avatar?: string;
  card: CardInfo;
  permanentAddress?: string;
  presentAddress?: string;
  postalCode?: string;
  country?: string;
  city?: string;
  dateOfBirth?: string;
}

export type LoginPayload = Pick<UserInfo, 'email' | 'password'>;

export interface LoginResponse {
  user: Omit<UserInfo, 'password'>;
  accessToken: string;
}

export type UserPayload = Omit<UserInfo, 'password' | 'email ' | 'id' | 'card'>;
