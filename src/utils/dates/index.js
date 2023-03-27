export const getFormattedDate = (
  date,
  locale = 'en-GB',
  localeDateOptions = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  },
) => {
  if (!date) {
    return '-';
  }

  try {
    const dateUTC = new Date(date);
    const formattedDate = dateUTC.toLocaleDateString(locale, localeDateOptions);
    return formattedDate === 'Invalid Date' ? '-' : formattedDate;
  } catch (error) {
    return '-';
  }
};

export const getSubtractedDays = (daysNumber) => {
  if (isNaN(daysNumber)) {
    return {
      endDate: null,
      startDate: null,
    };
  }

  const d = new Date();
  d.setDate(d.getDate() - daysNumber);

  return {
    endDate: new Date().toLocaleDateString('en-CA').split('/').join('-'),
    startDate: d.toLocaleDateString('en-CA').split('/').join('-'),
  };
};
