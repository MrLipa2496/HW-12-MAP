const arr = [
  [1, "first"],
  [3, "third"],
];

// 1
const map = new Map(arr);
// 2
console.log(map.size);
// 3
map.set(2, "second");
console.log(map);
map.delete(1);
console.log(map);
// 4
console.log(map.get(2));
// 5
console.log(map.has(3));
// 6
const keys = [...map.keys()];
console.log(keys);
const values = [...map.values()];
console.log(values);

// Ex *

const ordinalsMap = new Map([
  [1, "first"],
  [2, "second"],
  [3, "third"],
]);

function replaceNumbersWithOrdinals(text) {
  return text.replace(
    /\b\d+\b/g,
    match => ordinalsMap.get(Number(match)) || match
  );
}

const text =
  "This year I will enter the 1 grade. I have two brothers. I am the 3 child of my parents.";
const result = replaceNumbersWithOrdinals(text);
console.log(result);
