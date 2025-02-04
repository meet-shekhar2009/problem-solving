async function MixedQueue(arr) {
  let preres = 0;
  while (arr.length > 0) {
    const item = arr.shift();
    if (item(preres) instanceof Promise) {
      preres = await item(preres);
    } else {
      preres = item(preres);
    }
  }
  return preres;
}
MixedQueue([
  (x) => x + 1,
  async (x) => x + 2,
  (x) => x + 3,
  (x) => x + 4,
  async (x) => x + 5,
]).then((res) => {
  console.log(res);
});
