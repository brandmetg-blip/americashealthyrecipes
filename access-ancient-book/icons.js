/* ==========================================================================
   Ingredient & vessel illustrations for The Ancient Healing Recipe Book.
   Every picture is drawn here as inline SVG, so the book needs no image files.
   ========================================================================== */
(function () {
  const O = '#3b2f22';          // outline colour
  const W = '#fffdf7';          // porcelain / glass white

  const svg = (body, o) => {
    o = o || {};
    const pos = o.x !== undefined ? ` x="${o.x}" y="${o.y}"` : '';
    const size = o.size ? ` width="${o.size}" height="${o.size}"` : '';
    return `<svg viewBox="0 0 64 64"${pos}${size} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${body}</svg>`;
  };

  const shine = (cx, cy, rx, ry) =>
    `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="#fff" opacity=".38" transform="rotate(-30 ${cx} ${cy})"/>`;

  /* ---------- base shapes (64 x 64) ---------- */
  const SHAPES = {
    citrus: (p, f) => {
      let seg = '';
      for (let a = 0; a < 360; a += 45) {
        seg += `<line x1="32" y1="32" x2="${32 + 18 * Math.cos(a * Math.PI / 180)}" y2="${32 + 18 * Math.sin(a * Math.PI / 180)}" stroke="#fff" stroke-width="1.6" opacity=".85"/>`;
      }
      return `<circle cx="32" cy="32" r="25" fill="${p}" stroke="${O}" stroke-width="2"/>
        <circle cx="32" cy="32" r="20" fill="#fffbe8"/>
        <circle cx="32" cy="32" r="18" fill="${f}"/>${seg}
        <circle cx="32" cy="32" r="2.5" fill="#fff"/>`;
    },

    fruit: (c, leaf) => `
      <path d="M32 19 C 20 12, 8 22, 12 38 C 15 52, 26 57, 32 53 C 38 57, 49 52, 52 38 C 56 22, 44 12, 32 19 Z" fill="${c}" stroke="${O}" stroke-width="2"/>
      <path d="M32 19 Q 33 11 37 7" stroke="${O}" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      <path d="M36 12 Q 45 5 52 10 Q 45 17 36 12 Z" fill="${leaf || '#6b9a47'}" stroke="${O}" stroke-width="1.5"/>
      ${shine(22, 30, 4, 7)}`,

    pomegranate: (c) => `
      <circle cx="32" cy="36" r="21" fill="${c}" stroke="${O}" stroke-width="2"/>
      <path d="M26 16 L28 9 L32 14 L36 9 L38 16 Z" fill="${c}" stroke="${O}" stroke-width="1.8" stroke-linejoin="round"/>
      ${shine(24, 32, 4, 7)}`,

    cherry: (c) => `
      <path d="M22 40 Q 26 20 38 8 M42 42 Q 40 22 38 8" stroke="#5c7a33" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      <path d="M38 8 Q 48 4 54 10 Q 46 14 38 8 Z" fill="#6b9a47" stroke="${O}" stroke-width="1.4"/>
      <circle cx="21" cy="44" r="12" fill="${c}" stroke="${O}" stroke-width="2"/>
      <circle cx="43" cy="46" r="12" fill="${c}" stroke="${O}" stroke-width="2"/>
      ${shine(17, 40, 2.5, 4)}${shine(39, 42, 2.5, 4)}`,

    berries: (c) => `
      <path d="M26 14 Q 32 6 40 10 Q 34 16 26 14 Z" fill="#6b9a47" stroke="${O}" stroke-width="1.4"/>
      <circle cx="22" cy="40" r="11" fill="${c}" stroke="${O}" stroke-width="2"/>
      <circle cx="42" cy="40" r="11" fill="${c}" stroke="${O}" stroke-width="2"/>
      <circle cx="32" cy="24" r="11" fill="${c}" stroke="${O}" stroke-width="2"/>
      <path d="M30 22 l2 3 l2 -3 M20 38 l2 3 l2 -3 M40 38 l2 3 l2 -3" stroke="${O}" stroke-width="1.2" fill="none"/>
      ${shine(27, 20, 2, 3.5)}`,

    root: (c, inner) => `
      <path d="M9 38 C 7 30, 15 26, 21 28 C 23 19, 32 17, 36 24 C 42 18, 51 21, 50 30 C 57 32, 57 43, 48 44 C 42 51, 30 49, 26 44 C 18 49, 9 46, 9 38 Z" fill="${c}" stroke="${O}" stroke-width="2"/>
      <path d="M24 33 q 4 -3 8 0 M36 34 q 4 -3 8 0 M28 42 q 3 -2 6 0" stroke="${O}" stroke-width="1.2" fill="none" opacity=".55"/>
      <ellipse cx="13" cy="38" rx="5" ry="6" fill="${inner}" stroke="${O}" stroke-width="1.5"/>`,

    bulb: (c, line) => `
      <path d="M32 9 C 34 18, 51 24, 51 39 C 51 51, 43 57, 32 57 C 21 57, 13 51, 13 39 C 13 24, 30 18, 32 9 Z" fill="${c}" stroke="${O}" stroke-width="2"/>
      <path d="M32 14 C 29 30, 24 44, 27 56 M32 14 C 35 30, 40 44, 37 56 M32 14 L 32 57" stroke="${line}" stroke-width="1.5" fill="none" opacity=".8"/>
      <path d="M26 57 l-2 4 M32 57 v4 M38 57 l2 4" stroke="${O}" stroke-width="1.4"/>`,

    leaf: (c, vein) => `
      <path d="M9 55 C 11 30, 30 9, 55 9 C 55 34, 34 55, 9 55 Z" fill="${c}" stroke="${O}" stroke-width="2"/>
      <path d="M11 53 L 50 14 M22 42 l-6 -10 M30 34 l-4 -12 M38 26 l-2 -10 M22 42 l10 4 M30 34 l12 4 M38 26 l10 2" stroke="${vein || '#2f4f20'}" stroke-width="1.3" fill="none" opacity=".75"/>`,

    sprig: (c) => {
      let leaves = '';
      [14, 22, 30, 38, 46].forEach(y => {
        leaves += `<ellipse cx="24.5" cy="${y}" rx="8" ry="3.8" transform="rotate(-35 24.5 ${y})" fill="${c}" stroke="${O}" stroke-width="1.2"/>`;
        leaves += `<ellipse cx="39.5" cy="${y}" rx="8" ry="3.8" transform="rotate(35 39.5 ${y})" fill="${c}" stroke="${O}" stroke-width="1.2"/>`;
      });
      return `<path d="M32 59 C 32 42, 32 24, 32 6" stroke="#5a7a3a" stroke-width="2.6" fill="none" stroke-linecap="round"/>${leaves}
        <ellipse cx="32" cy="7" rx="3.5" ry="6" fill="${c}" stroke="${O}" stroke-width="1.2"/>`;
    },

    herb: (c) => `
      <path d="M32 60 C 30 46, 22 38, 16 30 M32 60 C 33 44, 40 36, 48 28 M32 60 L 32 30" stroke="#5a7a3a" stroke-width="2.2" fill="none"/>
      <circle cx="16" cy="26" r="9" fill="${c}" stroke="${O}" stroke-width="1.6"/>
      <circle cx="48" cy="24" r="9" fill="${c}" stroke="${O}" stroke-width="1.6"/>
      <circle cx="32" cy="18" r="10" fill="${c}" stroke="${O}" stroke-width="1.6"/>
      <path d="M12 26 h8 M44 24 h8 M28 18 h8" stroke="${O}" stroke-width="1" opacity=".4"/>`,

    flower: (p, center) => {
      let petals = '';
      for (let a = 0; a < 360; a += 40) {
        petals += `<ellipse cx="32" cy="17" rx="6" ry="11" fill="${p}" stroke="${O}" stroke-width="1.2" transform="rotate(${a} 32 32)"/>`;
      }
      return petals + `<circle cx="32" cy="32" r="8.5" fill="${center}" stroke="${O}" stroke-width="1.6"/>`;
    },

    lavender: (c) => {
      let buds = '';
      for (let y = 8; y < 34; y += 5) {
        buds += `<ellipse cx="28" cy="${y}" rx="3" ry="4" fill="${c}" stroke="${O}" stroke-width=".9"/><ellipse cx="36" cy="${y + 2}" rx="3" ry="4" fill="${c}" stroke="${O}" stroke-width=".9"/>`;
      }
      return `<path d="M32 60 L 32 10" stroke="#5a7a3a" stroke-width="2.4"/>
        <path d="M32 44 Q 22 40 18 34 M32 50 Q 42 46 46 40" stroke="#6b9a47" stroke-width="2.4" fill="none"/>${buds}`;
    },

    jar: (c, lid) => `
      <rect x="14" y="20" width="36" height="37" rx="9" fill="${W}" stroke="${O}" stroke-width="2"/>
      <rect x="17" y="28" width="30" height="26" rx="6" fill="${c}"/>
      <rect x="15" y="11" width="34" height="10" rx="3" fill="${lid || '#b5874a'}" stroke="${O}" stroke-width="2"/>
      <rect x="22" y="34" width="20" height="12" rx="2" fill="#fff" opacity=".85"/>`,

    bottle: (c, cap) => `
      <path d="M26 10 h12 v8 c 0 4, 10 6, 10 15 v 22 c 0 4, -3 6, -6 6 h -20 c -3 0, -6 -2, -6 -6 v -22 c 0 -9, 10 -11, 10 -15 z" fill="${c}" stroke="${O}" stroke-width="2"/>
      <rect x="25" y="4" width="14" height="8" rx="2" fill="${cap || '#6b4a2a'}" stroke="${O}" stroke-width="1.8"/>
      <rect x="21" y="32" width="22" height="13" rx="2" fill="#fffaf0" stroke="${O}" stroke-width="1"/>
      ${shine(22, 30, 1.5, 6)}`,

    dropper: (c) => `
      <rect x="18" y="27" width="28" height="31" rx="7" fill="${c}" stroke="${O}" stroke-width="2"/>
      <rect x="26" y="19" width="12" height="9" fill="${c}" stroke="${O}" stroke-width="1.8"/>
      <path d="M27 19 v-7 a5 5 0 0 1 10 0 v7 z" fill="${O}"/>
      <rect x="23" y="36" width="18" height="12" rx="2" fill="#fffaf0"/>`,

    sticks: (c) => `
      <rect x="8" y="22" width="48" height="10" rx="5" fill="${c}" stroke="${O}" stroke-width="2" transform="rotate(-22 32 27)"/>
      <rect x="10" y="34" width="46" height="10" rx="5" fill="${c}" stroke="${O}" stroke-width="2" transform="rotate(-6 32 39)"/>
      <path d="M14 36 q 4 4 0 8 M12 23 q 4 4 0 8" stroke="${O}" stroke-width="1.2" fill="none" opacity=".6"/>`,

    seeds: (c) => {
      const pts = [[18,20,30],[30,16,-20],[44,22,60],[14,34,-40],[26,30,10],[40,32,-30],[52,36,40],[20,46,70],[32,44,-10],[46,48,20],[28,56,50],[40,56,-40]];
      return pts.map(([x, y, r]) => `<ellipse cx="${x}" cy="${y}" rx="5.2" ry="2.8" transform="rotate(${r} ${x} ${y})" fill="${c}" stroke="${O}" stroke-width="1.1"/>`).join('');
    },

    dots: (c) => {
      const pts = [[20,22],[32,18],[44,24],[16,36],[28,32],[40,36],[52,38],[22,48],[34,46],[46,50],[30,58]];
      return pts.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4.6" fill="${c}" stroke="${O}" stroke-width="1.1"/>`).join('');
    },

    cloves: (c) => {
      const one = (x, y, r) => `<g transform="rotate(${r} ${x} ${y})"><rect x="${x - 1.6}" y="${y}" width="3.2" height="16" rx="1.5" fill="${c}" stroke="${O}" stroke-width="1"/><circle cx="${x}" cy="${y - 2}" r="4" fill="${c}" stroke="${O}" stroke-width="1"/></g>`;
      return one(20, 20, -20) + one(34, 16, 10) + one(46, 26, 35) + one(26, 38, -40) + one(42, 42, 15);
    },

    star: (c) => {
      let arms = '';
      for (let a = 0; a < 360; a += 45) arms += `<ellipse cx="32" cy="18" rx="5" ry="12" fill="${c}" stroke="${O}" stroke-width="1.3" transform="rotate(${a} 32 32)"/>`;
      return arms + `<circle cx="32" cy="32" r="5" fill="#5a3416"/>`;
    },

    bowl: (c) => `
      <path d="M14 34 C 16 18, 48 18, 50 34 Z" fill="${c}" stroke="${O}" stroke-width="1.6"/>
      <path d="M7 34 h50 c 0 14, -11 22, -25 22 c -14 0, -25 -8, -25 -22 z" fill="#f1e6d2" stroke="${O}" stroke-width="2"/>
      <path d="M14 42 h36" stroke="${O}" stroke-width="1" opacity=".25"/>`,

    grains: (c) => {
      let g = '';
      [[18,30],[24,24],[30,28],[36,22],[42,28],[46,32],[22,32],[38,32],[30,20],[34,30]].forEach(([x, y], i) => {
        g += `<ellipse cx="${x}" cy="${y}" rx="3.6" ry="2" transform="rotate(${i * 37} ${x} ${y})" fill="${c}" stroke="${O}" stroke-width=".8"/>`;
      });
      return `<path d="M14 34 C 16 20, 48 20, 50 34 Z" fill="${c}" stroke="${O}" stroke-width="1.4"/>${g}
        <path d="M7 34 h50 c 0 14, -11 22, -25 22 c -14 0, -25 -8, -25 -22 z" fill="#efe4cf" stroke="${O}" stroke-width="2"/>`;
    },

    cup: (c) => `
      <path d="M26 6 q -4 5 0 10 M34 4 q -4 5 0 10" stroke="#9a8a74" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      <path d="M10 22 h36 v18 c 0 9, -7 16, -16 16 h-4 c -9 0, -16 -7, -16 -16 z" fill="${W}" stroke="${O}" stroke-width="2"/>
      <path d="M46 27 c 10 0, 10 14, 0 14" stroke="${O}" stroke-width="2.4" fill="none"/>
      <ellipse cx="28" cy="22" rx="18" ry="4.2" fill="${c}" stroke="${O}" stroke-width="2"/>`,

    glass: (c) => `
      <path d="M15 8 h34 l-4 46 c-.2 2.5,-2 4,-4.5 4 h-17 c-2.5 0,-4.3 -1.5,-4.5 -4 z" fill="#eef6f8" stroke="${O}" stroke-width="2"/>
      <path d="M17.5 24 h29 l-2.8 29 c-.2 1.5,-1.2 2.4,-2.7 2.4 h-18 c-1.5 0,-2.5 -.9,-2.7 -2.4 z" fill="${c}"/>
      <path d="M21 12 v12" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".8"/>`,

    drop: (c) => `
      <path d="M32 6 C 40 20, 50 30, 50 40 a18 18 0 0 1 -36 0 C 14 30, 24 20, 32 6 Z" fill="${c}" stroke="${O}" stroke-width="2"/>
      ${shine(25, 40, 3, 6)}`,

    cucumber: (c) => `
      <rect x="6" y="24" width="44" height="18" rx="9" fill="${c}" stroke="${O}" stroke-width="2" transform="rotate(-25 28 33)"/>
      <circle cx="46" cy="44" r="12" fill="#cfe5a6" stroke="${O}" stroke-width="2"/>
      <circle cx="46" cy="44" r="9" fill="#e8f3cd"/>
      <circle cx="43" cy="42" r="1.2" fill="${O}"/><circle cx="49" cy="43" r="1.2" fill="${O}"/><circle cx="46" cy="48" r="1.2" fill="${O}"/>`,

    carrot: (c) => `
      <path d="M40 18 q 2 -10 10 -12 M40 18 q -6 -9 -2 -14 M40 18 q 10 -4 16 0" stroke="#5c8a36" stroke-width="2.6" fill="none" stroke-linecap="round"/>
      <path d="M30 16 C 38 12, 48 18, 46 26 L 14 58 C 10 50, 18 26, 30 16 Z" fill="${c}" stroke="${O}" stroke-width="2"/>
      <path d="M26 30 l6 2 M22 40 l6 2 M18 50 l5 1" stroke="${O}" stroke-width="1.2" opacity=".5"/>`,

    stalks: (c) => `
      <path d="M22 58 C 20 40, 20 26, 18 12 M32 58 L 32 10 M42 58 C 44 40, 44 26, 46 12" stroke="${c}" stroke-width="7" fill="none" stroke-linecap="round"/>
      <path d="M22 58 C 20 40, 20 26, 18 12 M32 58 L 32 10 M42 58 C 44 40, 44 26, 46 12" stroke="${O}" stroke-width="1" fill="none" opacity=".35"/>
      <circle cx="18" cy="10" r="6" fill="#7fb055" stroke="${O}" stroke-width="1.2"/><circle cx="32" cy="8" r="6" fill="#7fb055" stroke="${O}" stroke-width="1.2"/><circle cx="46" cy="10" r="6" fill="#7fb055" stroke="${O}" stroke-width="1.2"/>`,

    avocado: () => `
      <path d="M32 6 C 44 6, 50 26, 52 38 C 54 52, 44 60, 32 60 C 20 60, 10 52, 12 38 C 14 26, 20 6, 32 6 Z" fill="#3f6b2a" stroke="${O}" stroke-width="2"/>
      <path d="M32 11 C 41 11, 46 28, 48 38 C 50 50, 42 56, 32 56 C 22 56, 14 50, 16 38 C 18 28, 23 11, 32 11 Z" fill="#d8e59a"/>
      <circle cx="32" cy="40" r="10" fill="#8a5a2b" stroke="${O}" stroke-width="1.6"/>${shine(29, 37, 2, 3.5)}`,

    banana: (c) => `
      <path d="M8 22 C 14 46, 40 56, 56 40 C 52 38, 50 38, 46 40 C 34 48, 18 40, 14 20 Z" fill="${c}" stroke="${O}" stroke-width="2" stroke-linejoin="round"/>
      <path d="M8 22 l-2 -6 l7 2 z" fill="#6b4a2a" stroke="${O}" stroke-width="1.4"/>`,

    egg: (c) => `
      <path d="M32 6 C 46 6, 52 30, 52 40 a20 20 0 0 1 -40 0 C 12 30, 18 6, 32 6 Z" fill="${c}" stroke="${O}" stroke-width="2"/>${shine(24, 26, 3, 7)}`,

    pineapple: (c) => `
      <path d="M32 22 L 24 4 L 32 12 L 40 4 Z M32 22 L 18 10 L 30 16 M32 22 L 46 10 L 34 16" fill="#5c8a36" stroke="${O}" stroke-width="1.6" stroke-linejoin="round"/>
      <ellipse cx="32" cy="40" rx="17" ry="20" fill="${c}" stroke="${O}" stroke-width="2"/>
      <path d="M18 32 L 40 58 M16 44 L 30 60 M24 22 L 48 50 M36 21 L 49 37 M46 32 L 24 58 M48 44 L 36 59 M40 22 L 16 48 M28 21 L 15 36" stroke="${O}" stroke-width="1" opacity=".45"/>`,

    melon: (c) => `
      <path d="M6 24 a26 26 0 0 0 52 0 z" fill="#5c8a36" stroke="${O}" stroke-width="2"/>
      <path d="M10 24 a22 22 0 0 0 44 0 z" fill="${c}"/>
      <path d="M22 30 l1 3 M32 34 l0 3 M42 30 l-1 3 M27 40 l1 3 M37 40 l-1 3" stroke="${O}" stroke-width="2.4" stroke-linecap="round"/>`,

    oval: (c) => `
      <ellipse cx="24" cy="36" rx="10" ry="18" transform="rotate(-25 24 36)" fill="${c}" stroke="${O}" stroke-width="2"/>
      <ellipse cx="42" cy="30" rx="10" ry="18" transform="rotate(20 42 30)" fill="${c}" stroke="${O}" stroke-width="2"/>
      ${shine(20, 30, 2, 5)}${shine(39, 24, 2, 5)}`,

    almond: (c) => `
      <path d="M22 10 C 34 14, 36 40, 22 56 C 8 40, 10 14, 22 10 Z" fill="${c}" stroke="${O}" stroke-width="2"/>
      <path d="M44 12 C 56 16, 58 40, 44 56 C 30 40, 32 16, 44 12 Z" fill="${c}" stroke="${O}" stroke-width="2"/>
      <path d="M22 18 v30 M18 22 q 2 10 0 22 M44 20 v30 M48 24 q -2 10 0 22" stroke="${O}" stroke-width="1" opacity=".4" fill="none"/>`,

    walnut: (c) => `
      <circle cx="32" cy="34" r="22" fill="${c}" stroke="${O}" stroke-width="2"/>
      <path d="M32 12 v44 M20 20 q 6 6 0 12 q -6 6 0 12 M44 20 q -6 6 0 12 q 6 6 0 12 M14 34 q 4 -3 8 0 M42 34 q 4 -3 8 0" stroke="${O}" stroke-width="1.4" fill="none" opacity=".6"/>`,

    mushroom: (c) => `
      <path d="M8 32 C 8 14, 56 14, 56 32 Z" fill="${c}" stroke="${O}" stroke-width="2"/>
      <path d="M24 32 h16 l2 22 c0 3,-3 5,-10 5 c -7 0,-10 -2,-10 -5 z" fill="#f5ecd8" stroke="${O}" stroke-width="2"/>
      <circle cx="22" cy="24" r="3" fill="#fff" opacity=".5"/><circle cx="38" cy="21" r="2.4" fill="#fff" opacity=".5"/>`,

    seaweed: (c) => `
      <path d="M18 60 C 10 46, 26 40, 18 26 C 12 16, 22 8, 22 4 C 30 12, 24 22, 30 32 C 36 44, 24 50, 30 60 Z" fill="${c}" stroke="${O}" stroke-width="1.8"/>
      <path d="M36 60 C 30 48, 44 42, 38 30 C 34 22, 42 14, 44 10 C 50 18, 44 28, 48 36 C 52 46, 42 52, 46 60 Z" fill="${c}" stroke="${O}" stroke-width="1.8"/>`,

    aloe: (c) => `
      <path d="M32 60 C 26 40, 20 24, 26 4 C 34 20, 36 40, 32 60 Z" fill="${c}" stroke="${O}" stroke-width="1.8"/>
      <path d="M30 60 C 22 46, 10 38, 4 24 C 18 30, 28 42, 30 60 Z" fill="${c}" stroke="${O}" stroke-width="1.8"/>
      <path d="M34 60 C 42 46, 54 38, 60 24 C 46 30, 36 42, 34 60 Z" fill="${c}" stroke="${O}" stroke-width="1.8"/>
      <path d="M28 14 l-2 1 M27 24 l-2 1 M44 36 l1 2 M18 36 l-1 2" stroke="#fff" stroke-width="1.6" opacity=".7"/>`,

    cabbage: (c) => `
      <circle cx="32" cy="34" r="24" fill="${c}" stroke="${O}" stroke-width="2"/>
      <path d="M32 10 C 20 20, 20 48, 32 58 M32 10 C 44 20, 44 48, 32 58 M10 30 C 20 26, 26 30, 32 34 C 38 30, 44 26, 54 30" stroke="${O}" stroke-width="1.3" fill="none" opacity=".45"/>`,

    beet: (c) => `
      <path d="M30 26 C 24 12, 14 10, 10 6 C 22 6, 30 14, 32 24 Z M34 26 C 40 12, 50 10, 56 6 C 44 6, 34 14, 32 24 Z" fill="#5c8a36" stroke="${O}" stroke-width="1.5"/>
      <circle cx="32" cy="40" r="17" fill="${c}" stroke="${O}" stroke-width="2"/>
      <path d="M32 57 q 1 4 4 6" stroke="${O}" stroke-width="1.8" fill="none"/>${shine(25, 36, 3, 5)}`,

    tuber: (c) => `
      <path d="M8 36 C 8 22, 30 14, 46 18 C 58 22, 60 36, 50 44 C 38 54, 8 52, 8 36 Z" fill="${c}" stroke="${O}" stroke-width="2"/>
      <path d="M20 30 l2 1 M34 26 l2 1 M44 34 l1 2 M26 42 l2 1" stroke="${O}" stroke-width="1.6" opacity=".55"/>`,

    fish: (c) => `
      <path d="M6 32 C 16 16, 40 14, 50 30 L 60 20 L 58 32 L 60 44 L 50 34 C 40 50, 16 48, 6 32 Z" fill="${c}" stroke="${O}" stroke-width="2" stroke-linejoin="round"/>
      <circle cx="16" cy="30" r="2.4" fill="${O}"/><path d="M26 24 q 4 8 0 16" stroke="${O}" stroke-width="1.3" fill="none" opacity=".5"/>`,

    cloth: (c) => `
      <path d="M8 22 L 40 12 L 56 36 L 24 48 Z" fill="${c}" stroke="${O}" stroke-width="2" stroke-linejoin="round"/>
      <path d="M14 26 L 44 17 M18 32 L 48 23 M22 38 L 52 29" stroke="#fff" stroke-width="1.6" opacity=".7"/>`,

    crystals: (c) => `
      <path d="M7 34 h50 c 0 14, -11 22, -25 22 c -14 0, -25 -8, -25 -22 z" fill="#f1e6d2" stroke="${O}" stroke-width="2"/>
      <path d="M14 34 l4 -10 l6 4 l4 -12 l6 8 l6 -8 l4 10 l6 -2 l2 10 z" fill="${c}" stroke="${O}" stroke-width="1.4" stroke-linejoin="round"/>`
  };

  /* ---------- ingredient catalogue: key -> [shape, colourA, colourB, label] ---------- */
  const I = {
    lemon: ['citrus', '#f2c230', '#fbe27a', 'Lemon'],
    lime: ['citrus', '#6aa33a', '#bcd97a', 'Lime'],
    orange: ['citrus', '#ef8a1f', '#f7b04a', 'Orange'],
    orangepeel: ['citrus', '#ef8a1f', '#f7b04a', 'Orange peel'],
    grapefruit: ['citrus', '#f08a5d', '#f6a8a0', 'Grapefruit'],
    ginger: ['root', '#d9b27a', '#f3dda8', 'Fresh ginger'],
    turmeric: ['root', '#c8873a', '#f0a020', 'Turmeric root'],
    turmericpowder: ['bowl', '#e9a316', null, 'Ground turmeric'],
    gingerpowder: ['bowl', '#d8b47a', null, 'Ground ginger'],
    garlic: ['bulb', '#f6f0e4', '#cbbfa8', 'Garlic'],
    onion: ['bulb', '#d9a35a', '#a8743a', 'Onion'],
    redonion: ['bulb', '#9a3a6a', '#d78ab0', 'Red onion'],
    honey: ['jar', '#e9a92a', '#b5874a', 'Raw honey'],
    molasses: ['jar', '#3c2412', '#6b4a2a', 'Blackstrap molasses'],
    maple: ['bottle', '#b8641e', '#6b4a2a', 'Maple syrup'],
    cinnamon: ['sticks', '#a8582a', null, 'Cinnamon'],
    licorice: ['sticks', '#c9a46a', null, 'Licorice root'],
    clove: ['cloves', '#6b3a1e', null, 'Whole cloves'],
    pepper: ['dots', '#3a3029', null, 'Black pepper'],
    cayenne: ['bowl', '#c8341e', null, 'Cayenne'],
    paprika: ['bowl', '#d04a2a', null, 'Paprika'],
    staranise: ['star', '#8a4a22', null, 'Star anise'],
    nutmeg: ['walnut', '#b37a4a', null, 'Nutmeg'],
    vanilla: ['sticks', '#3c2412', null, 'Vanilla'],
    bayleaf: ['leaf', '#7c8f4e', '#3e4f22', 'Bay leaves'],
    mint: ['sprig', '#4fa35a', null, 'Fresh mint'],
    lemonbalm: ['sprig', '#8cc265', null, 'Lemon balm'],
    basil: ['sprig', '#3f8f3a', null, 'Basil'],
    rosemary: ['sprig', '#4c7a52', null, 'Rosemary'],
    thyme: ['sprig', '#6b8f5a', null, 'Thyme'],
    sage: ['sprig', '#9bb08f', null, 'Sage'],
    oregano: ['sprig', '#5f8a3a', null, 'Oregano'],
    parsley: ['herb', '#3f9a3a', null, 'Parsley'],
    cilantro: ['herb', '#5aae4a', null, 'Cilantro'],
    dill: ['sprig', '#79a85a', null, 'Dill'],
    nettle: ['leaf', '#4a7a32', '#2a4a18', 'Nettle leaf'],
    spinach: ['leaf', '#2f6f2a', '#1c4a18', 'Spinach'],
    kale: ['leaf', '#3a6a3a', '#203f20', 'Kale'],
    mullein: ['leaf', '#a8b89a', '#6a7a5a', 'Mullein leaf'],
    horsetail: ['sprig', '#6a9a4a', null, 'Horsetail'],
    eucalyptus: ['leaf', '#8fb0a8', '#4f6f68', 'Eucalyptus'],
    dandelion: ['flower', '#f2c230', '#e0a010', 'Dandelion'],
    chamomile: ['flower', '#ffffff', '#f2c230', 'Chamomile'],
    calendula: ['flower', '#f29a1e', '#c8661a', 'Calendula'],
    hibiscus: ['flower', '#c8284a', '#7a1030', 'Hibiscus'],
    rose: ['flower', '#f2a0b4', '#d0607a', 'Rose petals'],
    chrysanthemum: ['flower', '#f6d66a', '#d9a42a', 'Chrysanthemum'],
    elderflower: ['flower', '#fbf6e2', '#e8d48a', 'Elderflower'],
    passionflower: ['flower', '#b8a4e0', '#5a3a8a', 'Passionflower'],
    lavender: ['lavender', '#9a7ac8', null, 'Lavender'],
    greentea: ['cup', '#a8c25a', null, 'Green tea'],
    blacktea: ['cup', '#8a4a1e', null, 'Black tea'],
    coffee: ['cup', '#4a2a14', null, 'Coffee'],
    matcha: ['bowl', '#7aa83a', null, 'Matcha'],
    milk: ['glass', '#fbf8f0', null, 'Milk'],
    oatmilk: ['glass', '#efe3c8', null, 'Oat milk'],
    coconutmilk: ['glass', '#fbf8f0', null, 'Coconut milk'],
    water: ['drop', '#bfe3f2', null, 'Water'],
    sparkling: ['glass', '#d8eef5', null, 'Sparkling water'],
    acv: ['bottle', '#d08a2a', '#6b4a2a', 'Apple cider vinegar'],
    oliveoil: ['bottle', '#b8b02a', '#3f5a20', 'Olive oil'],
    sesameoil: ['bottle', '#d9a84a', '#6b4a2a', 'Sesame oil'],
    castoroil: ['bottle', '#f0e2a0', '#6b4a2a', 'Castor oil'],
    almondoil: ['bottle', '#f2dca0', '#6b4a2a', 'Sweet almond oil'],
    rosewater: ['bottle', '#f6c8d4', '#a0506a', 'Rose water'],
    witchhazel: ['bottle', '#e8eedc', '#5a6a3a', 'Witch hazel'],
    rosehipoil: ['dropper', '#e0702a', null, 'Rosehip oil'],
    vitamine: ['dropper', '#f0c84a', null, 'Vitamin E oil'],
    rosemaryoil: ['dropper', '#6a8a5a', null, 'Rosemary oil'],
    lavenderoil: ['dropper', '#9a7ac8', null, 'Lavender oil'],
    eucalyptusoil: ['dropper', '#7aa8a0', null, 'Eucalyptus oil'],
    peppermintoil: ['dropper', '#4fa35a', null, 'Peppermint oil'],
    teatreeoil: ['dropper', '#9ab07a', null, 'Tea tree oil'],
    coconutoil: ['jar', '#fbf8ee', '#8a6a3a', 'Coconut oil'],
    shea: ['jar', '#f3e6c4', '#8a6a3a', 'Shea butter'],
    yogurt: ['jar', '#fbfaf4', '#5a8ac0', 'Plain yogurt'],
    kefir: ['glass', '#f8f6ee', null, 'Kefir'],
    miso: ['jar', '#c8945a', '#6b4a2a', 'Miso paste'],
    tahini: ['jar', '#d9b47a', '#6b4a2a', 'Tahini'],
    ghee: ['jar', '#f2d06a', '#8a6a3a', 'Ghee'],
    apple: ['fruit', '#d8402a', '#6b9a47', 'Apple'],
    greenapple: ['fruit', '#9cc240', '#5c8a36', 'Green apple'],
    pear: ['fruit', '#c8c84a', '#6b9a47', 'Pear'],
    tomato: ['fruit', '#e0402a', '#4a8a2a', 'Tomato'],
    plum: ['fruit', '#7a2a5a', '#6b9a47', 'Umeboshi plum'],
    pomegranate: ['pomegranate', '#c02a3a', null, 'Pomegranate'],
    cherry: ['cherry', '#a8162a', null, 'Tart cherries'],
    berries: ['berries', '#4a4a9a', null, 'Blueberries'],
    elderberry: ['berries', '#3a2050', null, 'Elderberries'],
    goji: ['oval', '#e0402a', null, 'Goji berries'],
    cranberry: ['berries', '#b8203a', null, 'Cranberries'],
    dates: ['oval', '#7a3a1a', null, 'Dates'],
    jujube: ['oval', '#a8302a', null, 'Red dates (jujube)'],
    prunes: ['oval', '#3a2030', null, 'Prunes'],
    fig: ['pomegranate', '#6a3a5a', null, 'Figs'],
    raisins: ['dots', '#5a2a3a', null, 'Raisins'],
    banana: ['banana', '#f2d04a', null, 'Banana'],
    pineapple: ['pineapple', '#e9b53a', null, 'Pineapple'],
    papaya: ['melon', '#f29a4a', null, 'Papaya'],
    watermelon: ['melon', '#e8505b', null, 'Watermelon'],
    avocado: ['avocado', null, null, 'Avocado'],
    cucumber: ['cucumber', '#5c8a36', null, 'Cucumber'],
    celery: ['stalks', '#a8cf6a', null, 'Celery'],
    carrot: ['carrot', '#ef8a1f', null, 'Carrot'],
    beet: ['beet', '#8a1f45', null, 'Beetroot'],
    radish: ['beet', '#e05a7a', null, 'Radish'],
    sweetpotato: ['tuber', '#b5603a', null, 'Sweet potato'],
    potato: ['tuber', '#d9b47a', null, 'Potato'],
    burdock: ['root', '#8a6a4a', '#e8dcc0', 'Burdock root'],
    ashwagandha: ['bowl', '#c8b48a', null, 'Ashwagandha powder'],
    maca: ['bowl', '#e2cfa0', null, 'Maca powder'],
    cacao: ['bowl', '#5a3416', null, 'Raw cacao'],
    spirulina: ['bowl', '#2f6a5a', null, 'Spirulina'],
    psyllium: ['bowl', '#e8dcc0', null, 'Psyllium husk'],
    bakingsoda: ['bowl', '#ffffff', null, 'Baking soda'],
    clay: ['bowl', '#c8a48a', null, 'Bentonite clay'],
    gelatin: ['bowl', '#f2e2b0', null, 'Gelatin'],
    salt: ['crystals', '#ffffff', null, 'Sea salt'],
    epsom: ['crystals', '#e6f0f4', null, 'Epsom salt'],
    cabbage: ['cabbage', '#a8c97f', null, 'Cabbage'],
    redcabbage: ['cabbage', '#7a3a7a', null, 'Red cabbage'],
    broccoli: ['herb', '#3f7a3a', null, 'Broccoli'],
    mushroom: ['mushroom', '#a8784a', null, 'Shiitake'],
    seaweed: ['seaweed', '#2f5a3a', null, 'Seaweed'],
    aloe: ['aloe', '#7fae5b', null, 'Aloe vera'],
    egg: ['egg', '#fbf3e4', null, 'Egg'],
    fish: ['fish', '#9fb4c4', null, 'Oily fish'],
    oats: ['grains', '#e8d4a0', null, 'Rolled oats'],
    rice: ['grains', '#fbf8ee', null, 'Rice'],
    barley: ['grains', '#d9b46a', null, 'Barley'],
    flax: ['seeds', '#8a5a2a', null, 'Flaxseed'],
    chia: ['dots', '#6a6a6a', null, 'Chia seeds'],
    sesame: ['seeds', '#f2e2b8', null, 'Sesame seeds'],
    blacksesame: ['seeds', '#2a2a2a', null, 'Black sesame'],
    pumpkinseed: ['seeds', '#6a8a3a', null, 'Pumpkin seeds'],
    sunflower: ['seeds', '#9a9a8a', null, 'Sunflower seeds'],
    fennel: ['seeds', '#9aa86a', null, 'Fennel seeds'],
    cumin: ['seeds', '#a8865a', null, 'Cumin seeds'],
    coriander: ['dots', '#c8a46a', null, 'Coriander seeds'],
    cardamom: ['seeds', '#8fae6a', null, 'Cardamom pods'],
    fenugreek: ['dots', '#d9a84a', null, 'Fenugreek seeds'],
    mustard: ['dots', '#d9b02a', null, 'Mustard seeds'],
    almond: ['almond', '#c99363', null, 'Almonds'],
    walnut: ['walnut', '#c4985a', null, 'Walnuts'],
    brazil: ['almond', '#8a5a3a', null, 'Brazil nuts'],
    cornsilk: ['sprig', '#e8d48a', null, 'Corn silk'],
    oatstraw: ['grains', '#d9c48a', null, 'Oat straw'],
    valerian: ['root', '#a88a6a', '#e8dcc0', 'Valerian root'],
    marshmallow: ['root', '#e8dcc0', '#fbf6ea', 'Marshmallow root'],
    ginseng: ['root', '#e2c89a', '#fbf0d6', 'Ginseng'],
    bonebroth: ['bowl', '#d9a85a', null, 'Bone broth'],
    cloth: ['cloth', '#e8dcc0', null, 'Cotton cloth'],
    coffeegrounds: ['bowl', '#3c2412', null, 'Used coffee grounds'],
    sugar: ['crystals', '#f6e6c4', null, 'Brown sugar'],
    vinegar: ['bottle', '#f2e6c4', '#6b4a2a', 'White vinegar'],
    tartcherry: ['cherry', '#a8162a', null, 'Tart cherry juice'],
    lemongrass: ['stalks', '#c8d88a', null, 'Lemongrass'],
    kombu: ['seaweed', '#2f4a3a', null, 'Kombu'],
    quinoa: ['grains', '#f2e2b8', null, 'Quinoa'],
    lentils: ['dots', '#c8743a', null, 'Red lentils'],
    blackbean: ['dots', '#2a2026', null, 'Black beans'],
    hempseed: ['seeds', '#a8a87a', null, 'Hemp seeds'],
    pepitas: ['seeds', '#6a8a3a', null, 'Pumpkin seeds'],
    rooibos: ['cup', '#b8401e', null, 'Rooibos tea']
  };

  function icon(key, o) {
    const def = I[key] || ['drop', '#d9d0c0', null, key];
    const [shape, a, b] = def;
    return svg(SHAPES[shape](a, b), o);
  }

  function label(key) {
    return (I[key] && I[key][3]) || key;
  }

  /* ---------- vessels for the big recipe pictures (320 x 200) ---------- */
  const steam = (x, y) => `
    <g stroke="#ffffff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".9">
      <path d="M${x - 16} ${y} q -10 -14 0 -26 q 10 -12 0 -26"/>
      <path d="M${x + 4} ${y - 4} q -10 -14 0 -26 q 10 -12 0 -26"/>
      <path d="M${x + 24} ${y} q -10 -14 0 -26 q 10 -12 0 -26"/>
    </g>`;

  const VESSELS = {
    mug: (c) => `${steam(152, 84)}
      <ellipse cx="156" cy="184" rx="70" ry="10" fill="${W}" stroke="${O}" stroke-width="3"/>
      <path d="M200 104 c 30 0, 30 44, 0 44" stroke="${O}" stroke-width="12" fill="none"/>
      <path d="M200 104 c 30 0, 30 44, 0 44" stroke="${W}" stroke-width="6" fill="none"/>
      <path d="M110 94 h92 v52 c 0 22, -18 36, -40 36 h-12 c -22 0, -40 -14, -40 -36 z" fill="${W}" stroke="${O}" stroke-width="3"/>
      <ellipse cx="156" cy="94" rx="46" ry="10" fill="${c}" stroke="${O}" stroke-width="3"/>
      <path d="M122 110 v40" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".7"/>`,

    glass: (c) => `
      <path d="M118 56 h84 l-10 120 c-.5 5,-4.5 8,-9.5 8 h-45 c-5 0,-9 -3,-9.5 -8 z" fill="#eef7fa" stroke="${O}" stroke-width="3"/>
      <path d="M123 92 h74 l-7 82 c-.5 4,-3.2 6,-7 6 h-46 c-3.8 0,-6.5 -2,-7 -6 z" fill="${c}"/>
      <path d="M132 64 v104" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".7"/>
      <ellipse cx="160" cy="92" rx="37" ry="5" fill="#fff" opacity=".35"/>`,

    shot: (c) => `
      <path d="M128 98 h64 l-8 76 c-.5 4,-4 6,-8 6 h-32 c-4 0,-7.5 -2,-8 -6 z" fill="#eef7fa" stroke="${O}" stroke-width="3"/>
      <path d="M132 118 h56 l-6 54 c-.4 3,-3 4,-6 4 h-32 c-3 0,-5.6 -1,-6 -4 z" fill="${c}"/>
      <path d="M140 106 v60" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".7"/>`,

    bowl: (c) => `${steam(150, 100)}
      <ellipse cx="160" cy="186" rx="54" ry="8" fill="${O}" opacity=".12"/>
      <path d="M80 118 h160 c 0 40, -36 64, -80 64 c -44 0, -80 -24, -80 -64 z" fill="${W}" stroke="${O}" stroke-width="3"/>
      <ellipse cx="160" cy="118" rx="80" ry="14" fill="${c}" stroke="${O}" stroke-width="3"/>
      <path d="M96 136 q 64 30 128 0" stroke="${O}" stroke-width="2" fill="none" opacity=".15"/>`,

    jar: (c) => `
      <path d="M212 52 l-56 70" stroke="${O}" stroke-width="12" stroke-linecap="round"/>
      <path d="M212 52 l-56 70" stroke="#c8945a" stroke-width="7" stroke-linecap="round"/>
      <rect x="112" y="84" width="96" height="98" rx="20" fill="#f6f2ea" stroke="${O}" stroke-width="3"/>
      <rect x="117" y="104" width="86" height="74" rx="16" fill="${c}"/>
      <ellipse cx="160" cy="104" rx="43" ry="7" fill="#fff" opacity=".3"/>
      <rect x="106" y="78" width="108" height="14" rx="6" fill="#f6f2ea" stroke="${O}" stroke-width="3"/>`,

    dropper: (c) => `
      <rect x="128" y="98" width="64" height="84" rx="14" fill="${c}" stroke="${O}" stroke-width="3"/>
      <rect x="146" y="80" width="28" height="20" fill="${c}" stroke="${O}" stroke-width="3"/>
      <path d="M148 80 v-18 a12 12 0 0 1 24 0 v18 z" fill="${O}"/>
      <rect x="140" y="122" width="40" height="34" rx="5" fill="#fffaf0"/>
      <path d="M148 132 h24 M148 140 h18 M148 148 h22" stroke="${O}" stroke-width="2" opacity=".35"/>
      <path d="M136 108 v60" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".45"/>`,

    basin: (c) => `${steam(156, 104)}
      <path d="M56 116 h208 l-14 60 c-1 5,-5 8,-10 8 h-160 c-5 0,-9 -3,-10 -8 z" fill="#f3f6f7" stroke="${O}" stroke-width="3"/>
      <ellipse cx="160" cy="116" rx="104" ry="13" fill="${c}" stroke="${O}" stroke-width="3"/>
      <path d="M210 128 h40 v40 h-40 z" fill="#ffffff" stroke="${O}" stroke-width="2.5" transform="rotate(8 230 148)"/>
      <path d="M214 140 h32 M214 148 h32" stroke="#a8c8d8" stroke-width="3" transform="rotate(8 230 148)"/>`,

    spoon: (c) => `
      <rect x="86" y="96" width="58" height="80" rx="12" fill="#f6f2ea" stroke="${O}" stroke-width="3"/>
      <rect x="90" y="112" width="50" height="60" rx="9" fill="${c}"/>
      <rect x="82" y="88" width="66" height="12" rx="5" fill="#b5874a" stroke="${O}" stroke-width="3"/>
      <path d="M176 150 L 252 92" stroke="${O}" stroke-width="12" stroke-linecap="round"/>
      <path d="M176 150 L 252 92" stroke="#e9e4dc" stroke-width="7" stroke-linecap="round"/>
      <ellipse cx="178" cy="156" rx="30" ry="18" fill="#e9e4dc" stroke="${O}" stroke-width="3"/>
      <ellipse cx="178" cy="156" rx="21" ry="11" fill="${c}"/>`,

    steam: (c) => `
      <g stroke="#ffffff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".8">
        <path d="M120 96 q -14 -18 0 -34 q 14 -16 0 -34"/><path d="M160 90 q -14 -18 0 -34 q 14 -16 0 -34"/><path d="M200 96 q -14 -18 0 -34 q 14 -16 0 -34"/>
      </g>
      <path d="M70 118 h180 c 0 40, -40 64, -90 64 c -50 0, -90 -24, -90 -64 z" fill="${W}" stroke="${O}" stroke-width="3"/>
      <ellipse cx="160" cy="118" rx="90" ry="15" fill="${c}" stroke="${O}" stroke-width="3"/>`,

    plate: (c) => `
      <ellipse cx="160" cy="160" rx="110" ry="28" fill="${W}" stroke="${O}" stroke-width="3"/>
      <ellipse cx="160" cy="156" rx="80" ry="18" fill="none" stroke="${O}" stroke-width="2" opacity=".18"/>
      <path d="M104 156 c 6 -40, 106 -40, 112 0 c -20 10, -92 10, -112 0 z" fill="${c}" stroke="${O}" stroke-width="3"/>
      <path d="M124 136 q 10 -8 22 -4 M164 128 q 12 -2 22 6" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".6"/>`,

    cloth: (c) => `
      <path d="M70 120 L 200 84 L 256 150 L 120 184 Z" fill="${c}" stroke="${O}" stroke-width="3" stroke-linejoin="round"/>
      <path d="M88 130 L 208 96 M100 146 L 222 112 M112 162 L 236 128" stroke="#fff" stroke-width="5" opacity=".6"/>
      ${steam(160, 100)}`
  };

  // type of remedy -> which vessel to draw
  const VESSEL_FOR = {
    tea: 'mug', drink: 'glass', tonic: 'glass', shot: 'shot', milk: 'mug', soup: 'bowl', food: 'plate',
    snack: 'plate', mask: 'jar', scrub: 'jar', paste: 'jar', oil: 'dropper', serum: 'dropper', bath: 'basin',
    soak: 'basin', syrup: 'spoon', steam: 'steam', compress: 'cloth', rinse: 'glass', ritual: 'mug', porridge: 'bowl'
  };

  const SPOTS = [
    { x: 14, y: 16, size: 82 },
    { x: 222, y: 40, size: 74 },
    { x: 242, y: 122, size: 62 },
    { x: 20, y: 112, size: 68 }
  ];

  function hero(recipe) {
    const vessel = VESSELS[VESSEL_FOR[recipe.type] || 'mug'](recipe.color || '#e9c27a');
    const pics = recipe.ing.map(i => i[0]).filter((k, n, arr) => I[k] && arr.indexOf(k) === n && k !== 'water').slice(0, 4);
    const placed = pics.map((k, n) => icon(k, SPOTS[n])).join('');
    return `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid meet">${vessel}${placed}</svg>`;
  }

  window.BookArt = { icon, label, hero, has: k => !!I[k] };
})();
