//distanceFromHqInBlocks()
//returns a distance in blocks 
function distanceFromHqInBlocks (blockNumber) {
  if (blockNumber > 42) {
    return blockNumber - 42;
  } else {
    return 42 - blockNumber;
  }
}

//returns a distance in blocks 
return distanceFromHqInBlocks(blockNumber) * 264;

//calculates distances below 42nd street 
distanceFromHqInBlocks
