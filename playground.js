function bubbleSort(list) {
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length - i - 1; j++) {
      if (list[j] > list[j + 1]) {
        const temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }
  }
  console.log(list);
}

function selectionSort(list) {
  for (let i = 0; i < list.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < list.length; j++) {
      if (list[minIndex] > list[j]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      const temp = list[i];
      list[i] = list[minIndex];
      list[minIndex] = temp;
    }
  }
  console.log(list);
}

function insertionSort(list) {
  for (let i = 1; i < list.length; i++) {
    let current = list[i];
    let j = i - 1;
    while (j >= 0 && list[j] > current) {
      list[j + 1] = list[j];
      j--;
    }
    list[j + 1] = current;
  }
  console.log(list);
}

// const list = [4, 2, 6, 5, 1, 3];
// bubbleSort(list);
// selectionSort(list);

// const list = [1, 2, 4, 3, 5, 6];
// insertionSort(list);
