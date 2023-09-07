
function getFormattedDate(dateObject) {
  let dayOfMonth = format(dateObject.getDate());
  let month = format(dateObject.getMonth() + 1);
  let year = dateObject.getFullYear();
  let hour = format(dateObject.getHours());
  let minutes = format(dateObject.getMinutes());
  let dayOfWeek = getDayOfWeek(dateObject.getDay());

  function getDayOfWeek(dayNumber) {
    switch (dayNumber) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      default:
        return "";
    }
  }

  function format(partDateValue) {
    partDateValue = partDateValue < 10 ? '0' + partDateValue : partDateValue;
    return partDateValue;
  }

  return String(`${dayOfMonth}.${month}.${year} ${hour}:${minutes} ${dayOfWeek}`);
}
