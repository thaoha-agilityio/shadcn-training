import { CardInfo } from './card';

export interface UserModal {
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
