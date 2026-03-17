export const renderDate = (date) => {
  if (Array.isArray(date)) {
    return date.map((d, i) => <div key={`date-${i}`}>{d}</div>);
  }
  return date;
};

export const formatPhoneLink = (phone) => {
  return `tel:${phone.replace(/\s+/g, '')}`;
};

export const formatMailLink = (email) => {
  return `mailto:${email}`;
};
