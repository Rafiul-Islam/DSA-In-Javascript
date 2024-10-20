function SelectionSort(list) {
  const listSize = list.length;
  for (let i = 0; i < listSize - 1; i++) {
    let minItemIndex = i;
    for (let j = i + 1; j < listSize; j++) {
      if (list[minItemIndex] > list[j]) {
        minItemIndex = j;
      }
    }
    if (minItemIndex !== i) {
      const temp = list[i];
      list[i] = list[minItemIndex];
      list[minItemIndex] = temp;
    }
  }
  return list;
}

const list = [4, 5, 6, 89, 4, 13, 5, 85, 2];
console.log(SelectionSort(list));
