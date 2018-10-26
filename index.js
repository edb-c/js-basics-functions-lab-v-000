//distanceFromHqInBlocks()
//returns a distance in blocks ‣
//returns a distance in blocks ‣
//calculates distances below 42nd street

function distanceFromHqInBlocks (blockNumber) {
  if (blockNumber > 42) {
    return blockNumber - 42;
  } else {
    return 42 - blockNumber;
  }
}

//distanceFromHqInFeet()
//returns a distance in feet ‣
//returns a distance in feet ‣
//calculates distances below 42nd street
function distanceFromHqInFeet (blockNumber) {
  return distanceFromHqInBlocks(blockNumber) * 264;
}

//distanceTravelledInFeet()
//returns the distance travelled in feet ‣
//returns a distance in feet ‣
//returns distance when destination is below distance

function distanceTravelledInFeet (start, destination) {
  if (start < destination) {
    return (destination - start) * 264;
  } else {
    return (start - destination) * 264;
  }
}


function calculatesFarePrice (start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
