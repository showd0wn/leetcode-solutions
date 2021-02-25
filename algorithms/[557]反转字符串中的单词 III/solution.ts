// topics = ["字符串"]

function reverseWords(s: string): string {
  let t = s.split('').reverse().join('');
  return t.split(' ').reverse().join(' ');
}
