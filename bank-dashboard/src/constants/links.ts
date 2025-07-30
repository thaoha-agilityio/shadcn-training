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
    isActive: true,
  },
  {
    name: 'Transactions',
    href: '#',
    icon: TransferIcon,
  },
  {
    name: 'Accounts',
    href: API_ENDPOINT.ACCOUNTS,
    icon: AccountIcon,
  },
  { name: 'Investments', href: API_ENDPOINT.INVESTMENTS, icon: InvestIcon },
  {
    name: 'Credit Cards',
    href: API_ENDPOINT.CREDIT_CARDS,
    icon: CreditCardIcon,
  },
  { name: 'Loans', href: API_ENDPOINT.LOANS, icon: LoansIcon },
  { name: 'Services', href: API_ENDPOINT.SERVICES, icon: ServicesIcon },
  {
    name: 'My Privileges',
    href: API_ENDPOINT.PRIVILEGES,
    icon: PrivilegesIcon,
  },
  { name: 'Setting', href: API_ENDPOINT.SETTING, icon: SettingHeaderIcon },
];
