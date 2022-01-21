const getSleepHours = day => {
    day = day.toLowerCase();
      if (day === 'monday') {
      return 8;
    } else if (day === 'tuesday') {
      return 8;
    } else if (day === 'wednesday') {
      return 8;
    } else if (day === 'thursday') {
      return 8;
    } else if (day === 'friday') {
      return 8;
    } else if (day === 'saturday') {
      return 8;
    } else if (day === 'sunday') {
      return 8;
    } else {
      return 'Error!, introduce a correct day'
    }
  }
  ;
  
  const getActualSleepHours = () => 
  getSleepHours('Monday') + getSleepHours('Sunday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday');
  
    const getIdealSleepHours = hours => {
      const idealHours = hours;
      return hours * 7;
    }
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8);
    if (actualSleepHours === idealSleepHours) {
      console.log ('Got perfect amount of sleep');
    } else if (actualSleepHours > idealSleepHours) {
      console.log ('You got ' + (actualSleepHours - idealSleepHours)  + ' hours more than you needed.');
    } else if (actualSleepHours < idealSleepHours) {
      console.log ('You should sleep ' + (idealSleepHours - actualSleepHours) + ' hours more, get some rest');
    }
  } 
  
  calculateSleepDebt();
  