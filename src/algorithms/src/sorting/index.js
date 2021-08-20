// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let indexOfMin = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[indexOfMin]) indexOfMin = j;
    }

    if (indexOfMin !== i) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }
  return arr;
}

function mergeSort(arr) {
  const n = arr.length;

  if (n === 1) return arr;

  const center = Math.floor(n / 2);

  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const res = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) res.push(left.shift());
    else res.push(right.shift());
  }

  return [...res, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
