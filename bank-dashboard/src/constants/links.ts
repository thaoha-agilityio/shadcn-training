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

export const LINKS = [
  { name: 'Dashboard', href: '#', icon: HomeIcon },
  {
    name: 'Transactions',
    href: '#',
    icon: TransferIcon,
    isActive: true,
  },
  { name: 'Accounts', href: '#', icon: AccountIcon, isActive: true },
  { name: 'Investments', href: '#', icon: InvestIcon },
  { name: 'Credit Cards', href: '#', icon: CreditCardIcon },
  { name: 'Loans', href: '#', icon: LoansIcon },
  { name: 'Services', href: '#', icon: ServicesIcon },
  { name: 'My Privileges', href: '#', icon: PrivilegesIcon },
  { name: 'Setting', href: '#', icon: SettingHeaderIcon },
];
