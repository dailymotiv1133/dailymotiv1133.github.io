const phrases = [
  "Commence avant d’être prêt.",
  "Tu avances même quand tu doutes.",
  "La discipline crée la liberté.",
  "Chaque jour compte."
  // 👉 ajoute ici jusqu’à 365 phrases
];

// 🔔 Date de lancement (JOUR 1 à 7h30)
const launchDate = new Date("2026-01-01T07:30:00");
const now = new Date();

// Aujourd’hui à 7h30
const today730 = new Date(
  now.getFullYear(),
  now.getMonth(),
  now.getDate(),
  7, 30, 0
);

// Calcul de l’index du jour
let dayIndex;

// Avant 7h30 → phrase de la veille
if (now < today730) {
  dayIndex = Math.floor((today730 - launchDate) / 86400000) - 1;
} 
// Après 7h30 → phrase du jour
else {
  dayIndex = Math.floor((now - launchDate) / 86400000);
}

// Sécurité minimum
dayIndex = Math.max(0, dayIndex);

// 🔒 ANTI-TRICHE : empêche l’accès aux jours futurs
const maxDayAllowed = Math.floor(
  (Date.now() - launchDate.getTime()) / 86400000
);

dayIndex = Math.min(dayIndex, maxDayAllowed);

// Affichage final
const phraseElement = document.getElementById("phrase");
if (phraseElement) {
  phraseElement.innerText = phrases[dayIndex % phrases.length];
}
