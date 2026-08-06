// Elements of Music — renders the tier pyramid (and its Y axis) into the
// page from TIERS (data.js).

function chip(label) {
  const el = document.createElement("span");
  el.className = "chip";
  if (!label.includes(" ")) el.classList.add("chip--word");
  el.tabIndex = 0;
  el.textContent = label;
  return el;
}

function column(className, items) {
  const el = document.createElement("div");
  el.className = className;
  items.forEach((label) => el.appendChild(chip(label)));
  return el;
}

function renderTier(tier) {
  const band = document.createElement("div");
  band.className = [
    "tier",
    `tier--${tier.mode}`,
    tier.thin && "tier--thin",
    tier.bigText && "tier--big-text",
  ].filter(Boolean).join(" ");
  band.dataset.tier = tier.n;
  band.style.setProperty("--tw", `${tier.width}%`);
  band.style.setProperty("--tc", `var(--tier-${tier.n})`);
  band.style.setProperty("--tink", `var(--tier-${tier.n}-ink)`);

  const groups = [
    { cls: "col-pulse", items: tier.pulse, fr: 1 },
    { cls: "col-both", items: tier.both, fr: 1.6 },
    { cls: "col-sound", items: tier.sound, fr: 1 },
  ];
  const populated = groups.filter((g) => g.items.length > 0);

  const cols = document.createElement("div");
  cols.className = "cols";
  cols.style.gridTemplateColumns = (populated.length
    ? populated.map((g) => `minmax(0, ${g.fr}fr)`)
    : groups.map((g) => `minmax(0, ${g.fr}fr)`)
  ).join(" ");
  groups.forEach((g) => {
    const col = column(g.cls, g.items);
    if (g.items.length === 0) {
      col.style.display = "none";
    } else if (populated.length === 1) {
      col.style.alignItems = "center";
    }
    cols.appendChild(col);
  });
  band.appendChild(cols);

  const slot = document.createElement("div");
  slot.className = "tier-slot";
  slot.appendChild(band);

  const row = document.createElement("div");
  row.className = "tier-row";
  row.appendChild(slot);

  return row;
}

function renderAxisSegment(tier) {
  const el = document.createElement("span");
  el.style.background = `var(--tier-${tier.n})`;
  return el;
}

function render() {
  const main = document.getElementById("pyramid");
  main.replaceChildren(...TIERS.map(renderTier));

  const track = document.getElementById("axis-track");
  track.replaceChildren(...TIERS.map(renderAxisSegment));
}

document.addEventListener("DOMContentLoaded", render);
