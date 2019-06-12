function solve(dayOfWeek){
    let weekDays = [
     "Monday",
     "Tuesday",
     "Wednesday",
     "Thursday",
     "Friday",
     "Saturday",
     "Sunday"
    ];

    for (let i = 0; i < weekDays.length; i++) {
        if (dayOfWeek === weekDays[i]) {
            console.log(i + 1);
            return;
        }        
    }

    console.log('error');
}

solve("Sunday");