//distanceFromHqInBlocks()
//calculates distances below 42nd street

function distanceFromHqInBlocks (blockNumber) {
  if (blockNumber > 42) {
    return blockNumber - 42;
  } else {
    return 42 - blockNumber;
  }
}

//distanceFromHqInFeet()
//calculates distances below 42nd street

function distanceFromHqInFeet (blockNumber) {
  return distanceFromHqInBlocks(blockNumber) * 264;
}

