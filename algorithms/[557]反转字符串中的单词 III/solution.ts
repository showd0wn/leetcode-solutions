// topics = ["字符串"]

function reverseWords(s: string): string {
  const t = s.split('').reverse().join('');
  return t.split(' ').reverse().join(' ');
}
