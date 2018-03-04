let total = 0

function Day(){
  this.day = 1;
  this.month = 1;
  this.year = 1900;
  this.count = 1 //for days of the week
}

let myDay = new Day()

//year loop
for(let y = myDay.year; y<2001; y++){
  //reset to january 1st
  myDay.year = y
  myDay.month = 1
  myDay.day = 1
  //month loop
  for(m = myDay.month; m<=12; m++){
    //reset to first of current month
    myDay.month = m
    myDay.day = 1

    for(d = myDay.day; d <= maxDateOfMonth(m, y); d++){

      //add one day of the week
      let currentDay = dayOfTheWeek(myDay.count)

      if(d==1 && currentDay=="Sn" && y>1900){
        // console.log(m +"/"+d+"/"+y+" "+currentDay)

        total++
      }
      myDay.count++
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
