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
    href: API_ENDPOINT.TRANSACTIONS,
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
    href: API_ENDPOINT.INVESTMENTS,
    icon: InvestIcon,
    disable: true,
  },
  {
    name: 'Credit Cards',
    href: API_ENDPOINT.CREDIT_CARDS,
    icon: CreditCardIcon,
    disable: true,
  },
  { name: 'Loans', href: API_ENDPOINT.LOANS, icon: LoansIcon, disable: true },
  {
    name: 'Services',
    href: API_ENDPOINT.SERVICES,
    icon: ServicesIcon,
    disable: true,
  },
  {
    name: 'My Privileges',
    href: API_ENDPOINT.PRIVILEGES,
    icon: PrivilegesIcon,
    disable: true,
  },
  { name: 'Setting', href: API_ENDPOINT.SETTING, icon: SettingHeaderIcon },
];
