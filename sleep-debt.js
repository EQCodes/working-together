const getSleepHours = day => {
    if (day === 'monday') {
      return 8;
    } 
    else if (day === 'tuesday') {
      return 7;
    }
    else if (day === 'wednesday') {
      return 6;
    }
    else if (day === 'thursday') {
      return 7;
    }
    else if (day === 'friday') {
      return 8;
    }
    else if (day === 'saturday') {
      return 9;
    }
    else if (day === 'sunday') {
      return 9;
    }  
  };
  
  const getActualSleepHours = () =>
    getSleepHours('monday') + 
    getSleepHours('tuesday') + 
    getSleepHours('wednesday') + 
    getSleepHours('thursday') + 
    getSleepHours('friday') + 
    getSleepHours('saturday') + 
    getSleepHours('sunday');
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  }
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log(`Happy days you slept the ideal amount of time`);
  }
  else if (actualSleepHours > idealSleepHours) {
    console.log(`You slept too long dude - you had an extra ${actualSleepHours - idealSleepHours} hours`);
  }
  else if (actualSleepHours < idealSleepHours) {
    console.log(`Rest up chum - you're missing ${idealSleepHours - actualSleepHours} hours of sleep`);
  }
  }
  
  calculateSleepDebt();
  