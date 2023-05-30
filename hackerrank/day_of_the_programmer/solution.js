function dayOfProgrammer(year) {
  // sum of all days from Jan - Aug, except Feb
  let months = 215;
  let feb = 0;
  
  if (year === 1918) {
    months -= 13; // The day after Jan 31st was Feb 14th
  }
  
  if (year < 1919) { // Julian calendar
    if (year % 4 === 0) {
      feb = 29;
    } else {
      feb = 28;
    }
  } else { // Gregorian calendar
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      feb = 29;
    } else {
      feb = 28;
    }
  }
  
  let day_of_programmer = 256 - (months + feb);
  return `${day_of_programmer}.09.${year}`;
}

console.log(dayOfProgrammer(2017))
// 13.09.2017

console.log(dayOfProgrammer(2016))
// 12.09.2016

console.log(dayOfProgrammer(1800))
// 12.09.1800
