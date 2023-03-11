/*Given a list of integers, count and return the number of times each value 
appears as an array of integers.*/

function countingSort(arr: number[]): number[] {
  const result = Array.from(Array(100)).fill(0);

  arr.forEach((num) => result[num]++);
  return result;
}
