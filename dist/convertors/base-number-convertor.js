"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stack_1 = require("../data-structure/stack");
function baseConverter(decNumber, base) {
    const remStack = new stack_1.Stack();
    const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // {6}
    let num = decNumber;
    let rem;
    let baseString = "";
    if (!(base >= 2 && base <= 36)) {
        return "";
    }
    while (num > 0) {
        rem = Math.floor(num % base);
        remStack.push(rem);
        num = Math.floor(num / base);
    }
    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()]; // {7}
    }
    return baseString;
}
exports.baseConverter = baseConverter;
