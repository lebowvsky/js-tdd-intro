

const capitalizeFirstLetters = (input) => {
  let arrTemp = input.split(" ");
  let arrSoluce =[];
  if(arrTemp[0]) {
    input.split(" ").forEach(word => {
      arrSoluce.push(word[0].toUpperCase() + word.slice(1))
    })
  }
  return arrSoluce.join(" ");
}

module.exports = capitalizeFirstLetters;

