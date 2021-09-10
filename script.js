function getSleepHours(day){
    switch(day){
      case "monday":
        return 8;
        break;
      case "tuesday":
        return 6.5;
        break;
      case "wednesday":
        return 7;
        break;
      case "thursday":
        return 6;
        break;
      case "friday":
        return 9;
        break;
      case "saturday":
        return 8.5;
        break;
      case "sunday":
        return 8.25;
        break;
              }
  }
  
  function getActualSleepHours(){
    return getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours("wednesday") + getSleepHours("thursday") + getSleepHours("friday") + getSleepHours("saturday") + getSleepHours("sunday")
  }
  
  console.log(getActualSleepHours());
  
  function getIdealSleepHours(){
    let idealHours = 8;
    return idealHours * 7;
  }
  
  function calculateSleepDebt(){
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    
    if (actualSleepHours === idealSleepHours){
      console.log('You get a perfect amount of sleep.')
    } else if (actualSleepHours > idealSleepHours){
      console.log(`You got more sleep than needed. You are actually ${actualSleepHours-idealSleepHours} hours ahead of your sleep. No debts today!`)
    } else if (actualSleepHours < idealSleepHours) {
      console.log(`Just go to sleep, bruh! You are behind ${idealSleepHours-actualSleepHours} hours from your regular sleep.`)
    }
  }
  
  calculateSleepDebt();