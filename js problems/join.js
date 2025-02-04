/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  const hash = {};

  arr1.concat(arr2).forEach((item) => {
    if (hash[item.id]) {
      Object.assign(hash[item.id], item);
    } else {
      hash[item.id] = item;
    }
  });

  const res = Object.values(hash);
  return res;
};

const res = join(
  [
    { id: 1, x: 2, y: 3 },
    { id: 2, x: 3, y: 6 },
  ],
  [
    { id: 2, x: 10, y: 20 },
    { id: 3, x: 0, y: 0 },
  ]
);
console.log(res);
