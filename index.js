// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
    const ourlocation = 42
    return Math.abs(ourlocation - pickupLocation)
    
    }
function distanceFromHqInFeet(pickupLocation){
    return distanceFromHqInBlocks(pickupLocation)*264;
}
function distanceTravelledInFeet(start, destination) {
const distance = Math.abs(start - destination)*264
return distance
}
function calculatesFarePrice(start, destination){
  const distanceInFeet = distanceTravelledInFeet(start, destination)
  if (distanceInFeet>2500){
  return 'cannot travel that far'
  }
  if(distanceInFeet > 2500){
    return "cannot travel that far";
}

if(distanceInFeet > 0 && distanceInFeet < 400){
        return 0;
}

if(distanceInFeet > 2000 && distanceInFeet < 2500){
    return 25;
}

if(distanceInFeet >= 400 && distanceInFeet <= 2000){
    return ((distanceInFeet-400) * 2) / 100;
}

}