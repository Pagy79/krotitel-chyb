const sharp = require("sharp");
const src = "C:/Users/Peter/Appka na matiku/krotitel-chyb/public/krotitel.png";
const dest = "C:/Users/Peter/Appka na matiku/krotitel-chyb/public/krotitel.png";

(async () => {
  const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const sat = max - min;
    if (max > 228 && sat < 22) {
      const t = Math.min(1, (max - 228) / 27);
      data[i + 3] = Math.round(data[i + 3] * (1 - t));
    }
  }
  await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png()
    .toFile(dest);
})();
