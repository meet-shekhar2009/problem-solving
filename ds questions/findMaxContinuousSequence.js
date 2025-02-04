function findMaxContinuousSequence(N, parents) {
  // Step 1: Create a tree structure using an adjacency list
  const tree = Array.from({ length: N }, () => []);

  for (let i = 0; i < N; i++) {
    if (i !== 0) {
      tree[parents[i]].push(i);
    }
  }

  // Step 2: Depth-First Search to collect mangoes at each level
  const levelMangoes = [];

  function dfs(node, level) {
    if (!levelMangoes[level]) {
      levelMangoes[level] = [];
    }
    levelMangoes[level].push(node);

    for (const child of tree[node]) {
      dfs(child, level + 1);
    }
  }

  dfs(0, 0); // Start DFS from root node (0)

  // Step 3: Calculate maximum length of continuous integer sequence
  let maxSequenceLength = -404;

  for (let level = 0; level < levelMangoes.length; level++) {
    const mangoesAtLevel = levelMangoes[level];

    if (mangoesAtLevel.length > 1) {
      let length = 1;
      let maxSeq = 1;
      for (let i = 1; i < mangoesAtLevel.length; i++) {
        if (mangoesAtLevel[i] === mangoesAtLevel[i - 1] + 1) {
          length++;
          maxSeq = Math.max(maxSeq, length);
        } else {
          length = 1;
        }
      }
      maxSequenceLength = Math.max(maxSequenceLength, maxSeq);
    }
  }

  return maxSequenceLength;
}

// Sample Input 1
const N1 = 6;
const parents1 = [0, 0, 0, 1, 1, 2];
console.log(findMaxContinuousSequence(N1, parents1)); // Output: 3

// Sample Input 2
const N2 = 6;
const parents2 = [0, 0, 0, 0, 1, 2];
console.log(findMaxContinuousSequence(N2, parents2)); // Output: 3
