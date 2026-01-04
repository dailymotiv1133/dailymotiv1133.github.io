const phrases = [
  "Commence avant d’être prêt.",
  "Tu avances même quand tu doutes.",
  "La discipline crée la liberté.",
  "Chaque jour compte."
];

// 🔔 CHANGE LA DATE si tu veux
const launchDate = new Date("2026-01-01T07:30:00");
const now = new Date();

const today730 = new Date(
  now.getFullYear(),
  now.getMonth(),
  now.getDate(),
  7, 30, 0
);

let dayIndex;
if (now < today730) {
  dayIndex = Math.floor((today730 - launchDate) / (1000 * 60 * 60 * 24)) - 1;
} else {
  dayIndex = Math.floor((now - launchDate) / (1000 * 60 * 60 * 24));
}

dayIndex = Math.max(0, dayIndex);
document.getElementById("phrase").innerText =
  phrases[dayIndex % phrases.length];
