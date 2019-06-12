function solve(arr) {
    let limitValues = [];
    limitValues['motorway'] = 130;
    limitValues['interstate'] = 90;
    limitValues['city'] = 50;
    limitValues['residential'] = 20;

    let speed = +arr[0];
    let typeOfDriving = arr[1];
    let limit = limitValues[typeOfDriving];

    function getMessage(limit, speed) {

         if (speed <= limit ){
             return '';
         }

         if (speed - limit <= 20){
             return  'speeding';
         }

         if (speed - limit <= 40){
             return 'excessive speeding';
         }

         return  'reckless driving';
    }

    let speedMessage = getMessage(limit, speed);
    console.log(speedMessage);
}

solve([200, 'motorway'])