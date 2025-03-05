/* ------------------------------ TASK 4 -----------------------------------
Parašykite TS funkciją, kuri priima tekstą ir grąžina skaičių susidedantį iš vienetų ir nulių tokio ilgio, kokio yra pats žodis. Skaičius visada prasideda vienetu.

Pvz.:
  "labas"   --> 10101
  "kebabas" --> 1010101
  "a"       --> 1
-------------------------------------------------------------------------- */

function textToNumber(text: string): number {
  if (text.length === 0) return 0;
  let num = 1;
  for (let i = 1; i < text.length; i++) {
    num = num * 10 + (i % 2 === 0 ? 1 : 0);
  }
  return num;
}
console.log(textToNumber("labas"));   // 10101
console.log(textToNumber("kebabas")); // 1010101
console.log(textToNumber("a"));       // 1