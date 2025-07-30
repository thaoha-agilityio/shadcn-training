export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0, // Removes cents if not needed
  }).format(amount);
};

export const formatCardNumber = (cardNumber: string) => {
  const clean = cardNumber.replace(/\D/g, ''); // remove non-digits

  if (clean.length !== 16) {
    throw new Error('Card number must be 16 digits');
  }

  return [clean.slice(0, 4), '****', '****', clean.slice(12)].join(' ');
};

export const removeLeadingSlash = (path: string): string => {
  return path.startsWith('/') ? path.slice(1) : path;
};
