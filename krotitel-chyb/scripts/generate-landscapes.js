const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "../public/krajina");

const topics = {
  procenta: { accent: "#2F9E6A", flower: "#7BC47F", name: "p" },
  vyrazy: { accent: "#E85A7A", flower: "#F4A0B4", name: "v" },
  neznama: { accent: "#7B4CDB", flower: "#C9A0FF", name: "n" },
  geometrie: { accent: "#E8942A", flower: "#F0C36A", name: "g" },
};

const stages = [
  { sky: "#5C4A38", sky2: "#C9A882", ground: "#6B5340", hill: "#4A382C", grass: "#5A4A38", thorns: 5, flowers: 0, trees: 0 },
  { sky: "#E8C99A", sky2: "#F7E6C8", ground: "#8A6E4A", hill: "#6E8B52", grass: "#7A9A55", thorns: 2, flowers: 1, trees: 1 },
  { sky: "#B8D4F0", sky2: "#EEF6FF", ground: "#5FA86A", hill: "#4C9A62", grass: "#3D9B58", thorns: 0, flowers: 3, trees: 2 },
  { sky: "#8EC8F0", sky2: "#FFF8DC", ground: "#2FB88A", hill: "#1FA06E", grass: "#14A05A", thorns: 0, flowers: 6, trees: 3 },
];

function svg(stageIdx, pal) {
  const s = stages[stageIdx];
  let extras = "";
  for (let k = 0; k < s.thorns; k++) {
    const x = 22 + k * 34;
    extras += `<polygon points="${x},102 ${x + 5},82 ${x + 10},102" fill="#2C1E12"/>`;
  }
  for (let k = 0; k < s.trees; k++) {
    const x = 40 + k * 55;
    extras += `<rect x="${x - 3}" y="78" width="6" height="18" fill="#5A3A22"/><circle cx="${x}" cy="72" r="14" fill="${pal.accent}"/>`;
  }
  for (let k = 0; k < s.flowers; k++) {
    const x = 18 + k * 28;
    const y = 96 - (k % 2) * 6;
    extras += `<circle cx="${x}" cy="${y}" r="4" fill="${pal.flower}"/><circle cx="${x}" cy="${y}" r="1.6" fill="#FFF8EC"/>`;
  }
  const gid = `s${pal.name}${stageIdx}`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="${gid}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${s.sky}"/>
      <stop offset="100%" stop-color="${s.sky2}"/>
    </linearGradient>
  </defs>
  <rect width="200" height="150" fill="url(#${gid})"/>
  <ellipse cx="160" cy="38" rx="18" ry="18" fill="#FFF4C8" opacity="0.85"/>
  <path d="M0 88 Q50 62 100 82 T200 70 V150 H0Z" fill="${s.hill}"/>
  <path d="M0 108 Q70 92 140 110 T200 100 V150 H0Z" fill="${s.ground}"/>
  <path d="M0 128 H200 V150 H0Z" fill="${s.grass}"/>
  ${extras}
</svg>`;
}

for (const [id, pal] of Object.entries(topics)) {
  const dir = path.join(root, id);
  fs.mkdirSync(dir, { recursive: true });
  for (let i = 0; i < 4; i++) {
    fs.writeFileSync(path.join(dir, `${i + 1}.svg`), svg(i, pal));
  }
}

console.log("landscapes written");
