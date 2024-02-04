function findShortestStringRecursive(arr) {
  if (arr.length === 1) {
    return arr[0]
  }
  if (arr.length === 2) {
    return arr[0].length <= arr[1].length ? arr[0] : arr[1]
  }
  else {
    if (arr[1].length < arr[0].length) {
      arr.shift()
      return findShortestStringRecursive(arr)
    }

    if (arr[0].length <= arr[1].length) {
      arr.splice(1, 1)
      return findShortestStringRecursive(arr)
    }
  }
}

let longArr = [];
for (let j = 0; j < 100; j++) {
  longArr.push("hello")
}

let startTime = Date.now();
for (let i = 0; i < 1000; i++) {
  findShortestStringRecursive(longArr)
  findShortestStringRecursive(["a", "bb", "c"])
}
let endTime = Date.now()

console.log("Avg time: " + (endTime - startTime) / 2000)

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));

  console.log("");

  console.log("Expecting: 'cat'");
  console.log("=>", findShortestStringRecursive(['dogbaby', 'cat', 'jammy', 'hamtaro']));


  // console.log("");

  // console.log("Expecting: 'b'");
  // console.log("=>", findShortestStringRecursive(['b']));

  // console.log("");

  // console.log("Expecting: ''");
  // console.log("=>", findShortestStringRecursive([]));
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
