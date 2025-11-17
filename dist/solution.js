"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Problem-1
function formatValue(value) {
    if (typeof value === "string") {
        return value.toLocaleUpperCase();
    }
    if (typeof value === "number") {
        return value * 10;
    }
    if (typeof value === "boolean") {
        return !value;
    }
}
;
console.log(formatValue('hello'));
console.log(formatValue(5));
console.log(formatValue(true));
//# sourceMappingURL=solution.js.map