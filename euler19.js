let total = 0
let count = 1

//year loop
for(let y = 1900; y<2001; y++){
  //month loop
  for(m = 1; m<=12; m++){
    //day loop
    for(d = 1; d <= maxDateOfMonth(m, y); d++){

      //add one day of the week
      let currentDay = dayOfTheWeek(count)

      if(d==1 && currentDay=="Sn" && y>1900){
        // console.log(m +"/"+d+"/"+y+" "+currentDay)
        total++
      }
      count++
    }
  }
}

console.log(total)

//function that returns the day of the week for any number of days
function dayOfTheWeek(x){
  let weekDays = ['M','T','W','Th','F','St','Sn']
  let localX = (x-1)%7
  return weekDays[localX]
}

//function that determines if a year is a leap year
function isLeap(year){

  if (year%4 == 0){

    if (year%100==0){
      if(year%400==0){
        return true
      } else{
        return false
      }
    }
    return true
  }
  return false
}

//function that returns the amount of days in a month given the year
function maxDateOfMonth(month,year){
  let days
  let daysFeb = 28
  if (month == 2 && isLeap(year)){
    daysFeb = 29
  }

  if (month == 4 || month == 6 || month == 9 || month == 11){
    days = 30
  } else if (month == 2){
      if (isLeap(year)){
        days = 29
      } else {
        days = 28
      }
    } else{
      days = 31
    }

  return days
}
