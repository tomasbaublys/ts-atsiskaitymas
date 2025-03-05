"use strict";
function textToNumber(text) {
    if (text.length === 0)
        return 0;
    let num = 1;
    for (let i = 1; i < text.length; i++) {
        num = num * 10 + (i % 2 === 0 ? 1 : 0);
    }
    return num;
}
console.log(textToNumber("labas"));
console.log(textToNumber("kebabas"));
console.log(textToNumber("a"));
