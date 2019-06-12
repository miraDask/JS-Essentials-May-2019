function solve(steps, footprintInMeters, speedInKmPerHour) {
    const breakOffset = 500;
    let distanceToUniversityInMeters = steps * footprintInMeters;
    let minutesForBreak = Math.floor(distanceToUniversityInMeters / breakOffset);
    let speedInMetersPerSec = speedInKmPerHour / 3.6;
    let timeToWalkInSec = distanceToUniversityInMeters / speedInMetersPerSec + minutesForBreak * 60;

    let hours = Math.floor(timeToWalkInSec / 3600);
    let minutes = Math.floor(timeToWalkInSec / 60 ) ;
    let seconds = Math.round(timeToWalkInSec - (minutes * 60));

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    console.log(`${hours}:${minutes}:${seconds}`);
}

solve(2564, 0.70, 5.5);

