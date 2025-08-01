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

export const maskCardNumber = (cardNumber: string) => {
  if (!cardNumber) return '';

  const str = cardNumber.toString();
  return str.slice(0, 4) + ' ****';
};

export const getInitials = (name: string): string =>
  name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase();

export const formatDate = (isoString: string): string => {
  const date = new Date(isoString);

  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const month = date.toLocaleString('en-US', { month: 'short' });
  const time = date.toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  return `${day} ${month}, ${time.replace(':', '.')}`;
};

export const formatDateShort = (dateStr: string): string => {
  const date = new Date(dateStr);

  const day = date.toLocaleString('en-GB', { day: '2-digit' });
  const month = date.toLocaleString('en-GB', { month: 'short' });
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};
