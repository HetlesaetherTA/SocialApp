const SubmitDate = () => {
  const date = new Date();
  const [month, day, year, hour, minute] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
    date.getHours(),
    date.getMinutes(),
  ];

  let monthName;
  let ampm;
  let hourFormated;
  let minuteFormated;

  switch (month) {
    case 0:
      monthName = "January";
      break;
    case 1:
      monthName = "February";
      break;
    case 2:
      monthName = "March";
      break;
    case 3:
      monthName = "April";
      break;
    case 4:
      monthName = "May";
      break;
    case 5:
      monthName = "June";
      break;
    case 6:
      monthName = "Juny";
      break;
    case 7:
      monthName = "August";
      break;
    case 8:
      monthName = "September";
      break;
    case 9:
      monthName = "October";
      break;
    case 10:
      monthName = "November";
      break;
    case 11:
      monthName = "December";
      break;
    default:
      monthName = "Date Unknown";
  }

  if (minute < 10) {
    minuteFormated = `0${minute}`
  } else {
    minuteFormated = minute
  }

  if (hour - 12 < 0) {
    ampm = "AM";
    hourFormated = hour;
  } else {
    ampm = "PM";
    hourFormated = hour - 12;
  }

  return `${hourFormated}:${minuteFormated} ${ampm} · ${monthName} ${day}, ${year}`;
};

export default SubmitDate;
