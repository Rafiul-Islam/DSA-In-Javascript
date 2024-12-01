function insertionSort(list) {
  for (let i = 1; i < list.length; i++) {
    let current = list[i];
    var j = i - 1;
    while (j >= 0 && list[j] > current) {
      list[j + 1] = list[j];
      j--;
    }
    list[j + 1] = current;
  }
  return list;
}

const list = [8, 2, 4, 1, 3];
console.log(insertionSort(list));
