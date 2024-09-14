import dayjs from 'dayjs';
import fr from 'dayjs/locale/fr.js';
import LocalizedFormat from 'dayjs/plugin/localizedFormat.js';

dayjs.locale(fr);
dayjs.extend(LocalizedFormat);

export const formatDate = (date, format = 'dddd D MMMM YYYY') => {
  return dayjs(date).format(format);
};
