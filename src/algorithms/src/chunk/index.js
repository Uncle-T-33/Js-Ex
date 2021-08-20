// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  //#1
  //   const chunked = [];
  //   for (const ele of array) {
  //     const last = chunked[chunked.length - 1];
  //     console.log(last, chunked.length);
  //     if (!last || last.length == size) {
  //       //   console.log("f", ele);
  //       chunked.push([ele]);
  //     } else {
  //       last.push(ele);
  //       //   console.log(last);
  //     }
  //   }
  //   return chunked;

  //#2
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}

// chunk([1, 5, 6, 7, 8, 9, 2, 3, 4, 10], 2);

module.exports = chunk;
