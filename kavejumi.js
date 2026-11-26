// Bibliotēkas kavējumu maksa. Autors: iepriekšējais izstrādātājs.
const DIENAS_MAKSA_CENTI = 15;
const MAX_MAKSA_CENTI = 500;

// 2026. gada svētku dienas (likums „Par svētku, atceres un atzīmējamām dienām”)
// un pārceltās brīvdienas; dienu numuri pēc N4 (1 = 1. janvāris).
const SVETKI_2026 = [
  1,   // 1. janv. Jaungada diena
  2,   // 2. janv. pārceltā brīvdiena (atstrādā 17. janv.)
  93,  // 3. apr. Lielā Piektdiena
  95,  // 5. apr. Lieldienas (svētdiena)
  96,  // 6. apr. Otrās Lieldienas
  121, // 1. maijs Darba svētki
  124, // 4. maijs Neatkarības atjaunošanas diena
  130, // 10. maijs Mātes diena (svētdiena)
  144, // 24. maijs Vasarsvētki (svētdiena)
  173, // 22. jūn. pārceltā brīvdiena (atstrādā 27. jūn.)
  174, // 23. jūn. Līgo diena
  175, // 24. jūn. Jāņu diena
  322, // 18. nov. Latvijas Republikas proklamēšanas diena
  358, // 24. dec. Ziemassvētku vakars
  359, // 25. dec. Pirmie Ziemassvētki
  360, // 26. dec. Otrie Ziemassvētki
  365, // 31. dec. Vecgada diena
];

function kavetasDienas(termins, atdots) {
  return Math.max(0, atdots - termins);
}

function maksaCenti(dienas, students = false) {
  let maksa = dienas * DIENAS_MAKSA_CENTI;
  if (students) {
    maksa = Math.floor(maksa / 2);
  }
  return Math.min(maksa, MAX_MAKSA_CENTI);
}

function nedelasDiena(diena, pirmaDiena = 3) {
  return (((pirmaDiena + diena - 1) % 7) + 7) % 7;
}

// Kavētās bibliotēkas darba dienas: d, kur termins < d ≤ atdots,
// neskaitot svētdienas un dienas no saraksta svetki. Viens 2026. gads.
function kavetasDarbaDienas(termins, atdots, pirmaDiena = 3, svetki = []) {
  const brivas = new Set(svetki);
  let skaits = 0;
  for (let d = termins + 1; d <= atdots; d++) {
    if (nedelasDiena(d, pirmaDiena) === 6) continue;
    if (brivas.has(d)) continue;
    skaits++;
  }
  return skaits;
}

function topKavetaji(maksas) {
  return [...maksas].sort((a, b) => b - a).slice(0, 3);
}

function formatetEur(centi) {
  const zime = centi < 0 ? "-" : "";
  const absCenti = Math.abs(centi);
  const eiro = Math.floor(absCenti / 100);
  const c = String(absCenti % 100).padStart(2, "0");
  return `${zime}${eiro},${c} €`;
}

function kopsavilkums(maksas) {
  if (!maksas || maksas.length === 0) {
    return "Nav kavējumu";
  }
  const kopa = maksas.reduce((a, b) => a + b, 0);
  if (kopa === 0) {
    return "Nav kavējumu";
  }
  return `${maksas.length} kavējumi, kopā ${formatetEur(kopa)}`;
}

module.exports = { kavetasDienas, maksaCenti, nedelasDiena, topKavetaji, formatetEur, kopsavilkums, kavetasDarbaDienas, SVETKI_2026 };