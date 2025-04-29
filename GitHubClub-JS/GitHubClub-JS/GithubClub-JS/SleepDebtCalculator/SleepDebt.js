const getSleepHours = (day) => { 
    day = day.toLowerCase();
    switch(day) {
      case 'monday':
        return 8;
        break;
      case 'tuesday':
        return 7;
        break;
      case 'wednesday':
        return 5;
        break;
      case 'thursday':
        return 6;
        break;
      case 'friday':
        return 8;
        break;
      case 'saturday':
        return 9;
        break;
      case 'sunday':
        return 8;
        break;
       default:
       return 'Error!'
    }
  }
  //testing function
  //console.log(getSleepHours('wednesday'));
  
  const getActualSleepHours = () => 
    getSleepHours('monday') + 
    getSleepHours('tuesday') + 
    getSleepHours('wednesday') + 
    getSleepHours('thursday') + 
    getSleepHours('friday') + 
    getSleepHours('saturday') + 
    getSleepHours('sunday');
    
    //testing function
  //console.log(getActualSleepHours('monday'));
  
  const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
  }
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
  
    if(actualSleepHours === idealSleepHours) {
      console.log('You go the perfect amount of sleep!');
    } else if(actualSleepHours > idealSleepHours) {
      console.log(`You got ${actualSleepHours - idealSleepHours} hours more sleep than needed!`);
    }else if (actualSleepHours < idealSleepHours) {
      console.log(`You got ${idealSleepHours - actualSleepHours} hours less than ideal. Go sleep  buddy!`);
    }
  }
  
  calculateSleepDebt();
  