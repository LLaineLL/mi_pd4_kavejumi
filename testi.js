const assert = require("node:assert");
const k = require("./kavejumi.js");
const testi = [
  ["kavetasDienas(10, 13)", () => k.kavetasDienas(10, 13), 3],
  ["kavetasDienas(10, 8)", () => k.kavetasDienas(10, 8), 0],
  ["maksaCenti(4)", () => k.maksaCenti(4), 60],
  ["maksaCenti(3, true)", () => k.maksaCenti(3, true), 22],
  ["maksaCenti(5, true)", () => k.maksaCenti(5, true), 37],
  ["maksaCenti(7, true)", () => k.maksaCenti(7, true), 52],
  ["maksaCenti(40)", () => k.maksaCenti(40), 500],
  ["nedelasDiena(1)", () => k.nedelasDiena(1), 3],
  ["nedelasDiena(0, 0)", () => k.nedelasDiena(0, 0), 6],
  ["topKavetaji([45, 500, 120, 9])", () => k.topKavetaji([45, 500, 120, 9]), [500, 120, 45]],
  ["formatetEur(1234)", () => k.formatetEur(1234), "12,34 €"],
  ["formatetEur(5)", () => k.formatetEur(5), "0,05 €"],
  ["kopsavilkums([])", () => k.kopsavilkums([]), "Nav kavējumu"],
  ["kopsavilkums([45, 120])", () => k.kopsavilkums([45, 120]), "2 kavējumi, kopā 1,65 €"],
  ["formatetEur(-150)", () => k.formatetEur(-150), "-1,50 €"],
];
let ok = 0;
for (const [nos, f, gaid] of testi) {
  try { assert.deepStrictEqual(f(), gaid); ok++; console.log("OK  ", nos); }
  catch (e) { console.log("KĻŪDA", nos, "gaidīts", JSON.stringify(gaid), "ir", JSON.stringify(f())); }
}
console.log(`${ok}/${testi.length} testi izdevās`);
process.exitCode = ok === testi.length ? 0 : 1;