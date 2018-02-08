// Code your solution in this file!
function distanceFromHqInBlocks (destination) {
  const blocks = Math.abs(destination - 42)
  return blocks
}

function distanceFromHqInFeet (destination) {
  const feet = distanceFromHqInBlocks(destination) * 264
  return feet
}

function distanceTravelledInFeet (start, destination) {
  const feet = Math.abs(destination - start)*264
  return feet
}
