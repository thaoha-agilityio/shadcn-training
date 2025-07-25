import { JSX } from 'react';

export type TabType = {
  value: string;
  label: string;
  content: JSX.Element;
  onClick?: () => void;
};
