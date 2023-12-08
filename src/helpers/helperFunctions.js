export const getIndex = date => {
  const dateT = new Date();
  //   const dateYesterday = getDateToNumber(-1);
  const dateToday = getDateToNumber();
  const dateTomorrow = getDateToNumber(1);

  //se Obtiene fecha del parametro
  const dateT2 = getDateToNumberP(date);

  if (dateT2 === dateToday) return 1;
  else if (dateT2 >= dateTomorrow) return 2;
  else return 0;
};

const getDateToNumber = (index = 0) => {
  const dateT = new Date();
  dateT.setDate(dateT.getDate() + index);

  return Number(
    dateT.getFullYear().toString() +
      (dateT.getMonth() + 1 < 10
        ? '0' + (dateT.getMonth() + 1)
        : dateT.getMonth() + 1
      ).toString() +
      (dateT.getDate() < 10
        ? '0' + dateT.getDate()
        : dateT.getDate()
      ).toString(),
  );
};

export const getDateToNumberP = date => {
  return Number(
    date.getFullYear().toString() +
      (date.getMonth() + 1 < 10
        ? '0' + (date.getMonth() + 1)
        : date.getMonth() + 1
      ).toString() +
      (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()).toString(),
  );
};

export const dateUTC = date => {
  return date.getUTCDate() + '/' + date.getMonth() + '/' + date.getFullYear();
};

export const getTime = date => {
  return date.getHours() + ':' + date.getMinutes();
};
