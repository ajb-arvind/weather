// Today's Date
const longDate = new Date();
export const getDate = () =>
  longDate.toLocaleString('default', { month: 'long' }) +
  ' ' +
  longDate.getDate();

export const getWeekDay = () =>
  longDate.toLocaleString('default', { weekday: 'long' });

export const formatDateToDDMM = (date) => {
  const month = String(date.toLocaleString('default', { month: 'short' }));
  const day = String(date.getDate()).padStart(2, '0');
  return `${day} ${month}`;
};

// AM and PM

export function formatAMPM(date) {
  return date.toLocaleString('default', { hour: 'numeric', hour12: true });
}
