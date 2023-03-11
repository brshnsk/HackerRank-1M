/*There is a collection of input strings and a collection of query strings. For each 
query string, determine how many times it occurs in the list of input strings. 
Return an array of the results.*/

function matchingStrings(strings: string[], queries: string[]): number[] {
  let repeat = {} as any;
  let array: number[] = [];

  strings.forEach((s) => {
    if (!repeat.hasOwnProperty(s)) {
      repeat[s] = 1;
    } else {
      repeat[s] += 1;
    }
  });

  queries.forEach((q) => {
    if (repeat.hasOwnProperty(q)) {
      array.push(repeat[q]);
    } else {
      repeat[q] = 0;
      array.push(repeat[q]);
    }
  });

  return array;
}
