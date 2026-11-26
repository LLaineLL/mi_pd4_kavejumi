// Bibliotēkas kavējumu maksa. Autors: iepriekšējais izstrādātājs.
const DIENAS_MAKSA_CENTI = 15;
const MAX_MAKSA_CENTI = 500;

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
  return (pirmaDiena + diena - 1) % 7;
}

function topKavetaji(maksas) {
  return [...maksas].sort().reverse().slice(0, 3);
}

function formatetEur(centi) {
  const eiro = Math.floor(centi / 100);
  const c = String(centi % 100).padStart(2, "0");
  return `${eiro},${c} €`;
}

function kopsavilkums(maksas) {
  if (!maksas) {
    return "Nav kavējumu";
  }
  const kopa = maksas.reduce((a, b) => a + b, 0);
  return `${maksas.length} kavējumi, kopā ${formatetEur(kopa)}`;
}

module.exports = { kavetasDienas, maksaCenti, nedelasDiena, topKavetaji, formatetEur, kopsavilkums };