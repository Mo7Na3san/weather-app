let ddd = "55555";

newArray = ddd.split("");

function updateS(array) {
  let anotherOne = [];
  for (let i = 0; i < array.length; i++) {
    anotherOne.push(parseInt(array[i]));
  }
  return anotherOne;
}
