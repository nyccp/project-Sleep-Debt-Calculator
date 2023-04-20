function getSleepHours(day) {
  switch (day) {
    case "monday":
      return 8;
      break;
    case "tuesday":
      return 7;
      break;
    case "wednesday":
      return 6;
      break;
    case "thursday":
      return 8;
      break;
    case "friday":
      return 9;
      break;
    case "saturday":
      return 10;
      break;
    case "sunday":
      return 9;
      break;
    default:
      return 6;
      break;
  }
}

function getActualSleepHours() {
  let res =
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday");
  return res;
}

function getIdealSleepHours() {
  let idealHours = 9 * 7;
  return idealHours;
}

function calculateSleepDebt(
  actualSleepHours = getActualSleepHours(),
  idealSleepHours = getIdealSleepHours()
) {
  let diff = getActualSleepHours - getIdealSleepHours;
  if (actualSleepHours == idealSleepHours) {
    return "perfect amount of sleep: " + diff;
  } else if (actualSleepHours > idealSleepHours) {
    return "more sleep than needed: " + diff;
  } else {
    return "you need to get more rest: " + diff;
  }
}

console.log("Actual Sleep Hours: " + getActualSleepHours());
console.log("Ideal Sleep Hours: " + getIdealSleepHours());
console.log(calculateSleepDebt());
