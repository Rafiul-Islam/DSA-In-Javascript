function BubbleSort(list) {
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length - i; j++) {
      if (list[j] > list[j + 1]) {
        const temp = list[j + 1];
        list[j + 1] = list[j];
        list[j] = temp;
      }
    }
  }
  return list;
}

const list = [4, 5, 6, 89, 4, 13, 5, 85, 2];
BubbleSort(list);
