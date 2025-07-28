export const formatPrice = (value: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);

export const formatCardNumber = (cardNumber: string) => {
  const clean = cardNumber.replace(/\D/g, ''); // remove non-digits

  if (clean.length !== 16) {
    throw new Error('Card number must be 16 digits');
  }

  return [clean.slice(0, 4), '****', '****', clean.slice(12)].join(' ');
};
