function swap(array, firstIndex, secondIndex) {
  const temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

function pivot(array, pivotIndex = 0, endIndex = array.length - 1) {
  let swapIndex = pivotIndex;
  for (let i = pivotIndex; i <= endIndex; i++) {
    if (array[i] < array[pivotIndex]) {
      swapIndex++;
      swap(array, i, swapIndex);
    }
  }
  swap(array, pivotIndex, swapIndex);
  return swapIndex;
}

function QuickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    const pivotIndex = pivot(array, left, right);
    QuickSort(array, left, pivotIndex - 1);
    QuickSort(array, pivotIndex + 1, right);
  }

  return array;
}

const array = [4, 6, 1, 7, 3, 2, 5];
console.log(QuickSort(array));
