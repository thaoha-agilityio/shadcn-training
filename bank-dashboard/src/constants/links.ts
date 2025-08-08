import {
  AccountIcon,
  CreditCardIcon,
  HomeIcon,
  InvestIcon,
  LoansIcon,
  PrivilegesIcon,
  ServicesIcon,
  SettingHeaderIcon,
  TransferIcon,
} from '@/components/icons';
import { API_ENDPOINT } from './api';

export const LINKS = [
  {
    name: 'Dashboard',
    href: API_ENDPOINT.DASHBOARD,
    icon: HomeIcon,
  },
  {
    name: 'Transactions',
    href: '#',
    icon: TransferIcon,
    disable: true,
  },
  {
    name: 'Accounts',
    href: API_ENDPOINT.ACCOUNTS,
    icon: AccountIcon,
  },
  {
    name: 'Investments',
    href: '#',
    icon: InvestIcon,
    disable: true,
  },
  {
    name: 'Credit Cards',
    href: '#',
    icon: CreditCardIcon,
    disable: true,
  },
  { name: 'Loans', href: '#', icon: LoansIcon, disable: true },
  {
    name: 'Services',
    href: '#',
    icon: ServicesIcon,
    disable: true,
  },
  {
    name: 'My Privileges',
    href: '#',
    icon: PrivilegesIcon,
    disable: true,
  },
  { name: 'Setting', href: API_ENDPOINT.SETTING, icon: SettingHeaderIcon },
];
