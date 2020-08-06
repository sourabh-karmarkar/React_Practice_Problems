const tableArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
const firstElement = tableArray[0][0];
const lastElement = tableArray[tableArray.length - 1][tableArray[tableArray.length - 1].length - 1];

export const tableObj = {
  tableArray,
  firstElement,
  lastElement
}