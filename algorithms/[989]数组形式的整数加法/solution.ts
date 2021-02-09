// topics = ["数学"]

function addToArrayForm(A: number[], K: number): number[] {
  return (BigInt(A.join('')) + BigInt(K)).toString().split('').map(Number);
}
