/*
const NUM_BALLS = 30;
const colors = ['#000', '#ff27fa'];
let balls = [];
let phase = 0;
let phaseTimer = 0;
const PHASE_DURATION = 1500; // 2 Sekunden pro Phase

// Canvas initialisieren
const canvas = document.getElementById('balls');
const ctx = canvas.getContext('2d');

// Kugeln erzeugen
for (let i = 0; i < NUM_BALLS; i++) {
  balls.push({
    x: 0,
    y: 0,
    size: 15,
    targetX: 0,
    targetY: 0,
    targetSize: 15,
    color: colors[Math.floor(Math.random() * colors.length)]
  });
}

// Farben zufällig neu verteilen
function setColorsRandom() {
  balls.forEach(b => {
    b.color = colors[Math.floor(Math.random() * colors.length)];
  });
}

// Targets je Phase setzen
function setTargetsForPhase() {
  setColorsRandom();

  if (phase === 0) {
    const rows = 6;
    const cols = 5;
    const PADDING = 50;
    const spacing = 90;
    const baseSize = 15; // Endgröße

    const width = cols * baseSize + (cols-1)*spacing;
    const height = rows * baseSize + (rows-1)*spacing;

    canvas.width = width + PADDING*2;
    canvas.height = height + PADDING*2;

    let index = 0;
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (index >= NUM_BALLS) break;
        balls[index].targetX = PADDING + col * spacing;
        balls[index].targetY = PADDING + row * spacing;
        balls[index].targetSize = baseSize;
        index++;
      }
    }
  }
  else if (phase === 1) {
    // Kreis
    const radius = 250;
    canvas.width = radius*2 + 100;
    canvas.height = radius*2 + 100;
    const centerX = canvas.width/2;
    const centerY = canvas.height/2;

    balls.forEach((b,i)=>{
      const angle = (i / NUM_BALLS) * Math.PI*2;
      b.targetX = centerX + Math.cos(angle)*radius;
      b.targetY = centerY + Math.sin(angle)*radius;
      b.targetSize = 15;
    });
  }
  else if (phase === 2) {
    // Welle 800 px lang
    const waveLength = 800;
    const amplitude = 40;
    const PADDING = 50;
    const ballSize = 15; // Kugelgröße berücksichtigen
    canvas.width = waveLength + PADDING*2 + ballSize; // Extra Platz für Kugeln
    canvas.height = 400; // Feste Höhe für vertikale Zentrierung

    const startX = PADDING;
    const centerY = canvas.height / 2;

    balls.forEach((b,i)=>{
      b.targetX = startX + i * (waveLength / (NUM_BALLS-1));
      b.targetY = centerY + Math.sin(i*0.5) * amplitude;
      b.targetSize = 15;
    });
  }
  else if (phase === 3) {
    // Zufällige Verteilung
    const PADDING = 50;
    canvas.width = 600;
    canvas.height = 400;
    balls.forEach(b=>{
      b.targetX = Math.random()*(canvas.width-PADDING*2)+PADDING;
      b.targetY = Math.random()*(canvas.height-PADDING*2)+PADDING;
      b.targetSize = 15;
    });
  }
}

setTargetsForPhase();

// Animation
function animate(time) {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  // Dynamische Rotation in Phase 1
  if (phase === 1) {
    const radius = 250;
    const centerX = canvas.width/2;
    const centerY = canvas.height/2;
    const rotationSpeed = time / 2500; // Langsame Rotation

    balls.forEach((b,i)=>{
      const angle = (i / NUM_BALLS) * Math.PI*2 + rotationSpeed;
      b.targetX = centerX + Math.cos(angle)*radius;
      b.targetY = centerY + Math.sin(angle)*radius;
    });
  }

  // Dynamische Welle in Phase 2
  if (phase === 2) {
    const waveLength = 800;
    const amplitude = 40;
    const PADDING = 50;
    const ballSize = 15;
    canvas.width = waveLength + PADDING*2 + ballSize; // Extra Platz für Kugeln
    canvas.height = 400; // Feste Höhe für vertikale Zentrierung
    const startX = PADDING;
    const centerY = canvas.height / 2;

    balls.forEach((b,i)=>{
      b.targetX = startX + i * (waveLength / (NUM_BALLS-1));
      b.targetY = centerY + Math.sin(i*0.5 + time/300) * amplitude;
    });
  }

  balls.forEach((b,i)=>{
    // Bewegung X/Y
    b.x += (b.targetX - b.x) * 0.1;
    b.y += (b.targetY - b.y) * 0.1;

    // Größe-Animation in Phase 0 und Phase 3
    if (phase === 0 || phase === 3) {
      const progress = phaseTimer / PHASE_DURATION; // 0 → 1
      const wobble = Math.sin(time/100 + i) * (1 - progress) * 5; 
      // Sinus sorgt fürs Pulsieren
      // (1-progress) -> am Ende wird das Wackeln kleiner
      b.size = b.targetSize + wobble;
    } else {
      // Normale Größe
      b.size += (b.targetSize - b.size) * 0.1;
    }

    // Zeichnen
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.size/2, 0, Math.PI*2);
    ctx.fillStyle = b.color;
    ctx.fill();
  });

  phaseTimer += 16;
  if (phaseTimer > PHASE_DURATION) {
    phaseTimer = 0;
    phase = (phase + 1) % 4;
    setTargetsForPhase();
  }

  requestAnimationFrame(animate);
}

animate();


const NUM_BALLS = 30;
const colors = ['#000', '#ff27fa'];
let balls = [];
let phase = 0;
let phaseTimer = 0;
const PHASE_DURATION = 1500; // 2 Sekunden pro Phase

// Canvas initialisieren
const canvas = document.getElementById('balls');
const ctx = canvas.getContext('2d');

// Feste Canvas-Größe setzen
canvas.width = 800;
canvas.height = 800;

// Kugeln erzeugen
for (let i = 0; i < NUM_BALLS; i++) {
  balls.push({
    x: 0,
    y: 0,
    size: 15,
    targetX: 0,
    targetY: 0,
    targetSize: 15,
    color: colors[Math.floor(Math.random() * colors.length)]
  });
}

// Farben zufällig neu verteilen
function setColorsRandom() {
  balls.forEach(b => {
    b.color = colors[Math.floor(Math.random() * colors.length)];
  });
}

// Targets je Phase setzen
function setTargetsForPhase() {
  setColorsRandom();

  const PADDING = 50; // Einheitlicher Padding für alle Phasen
  const CANVAS_WIDTH = 800;
  const CANVAS_HEIGHT = 800;

  if (phase === 0) {
    // Quadrat
    const rows = 6;
    const cols = 5;
    const spacing = (CANVAS_WIDTH - 2 * PADDING) / (cols + 0); // Skaliere Abstand
    const baseSize = 15;

    let index = 0;
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (index >= NUM_BALLS) break;
        balls[index].targetX = PADDING + col * spacing;
        balls[index].targetY = PADDING + row * spacing;
        balls[index].targetSize = baseSize;
        index++;
      }
    }
  } else if (phase === 1) {
    // Kreis
    const radius = Math.min(CANVAS_WIDTH, CANVAS_HEIGHT) / 2 - PADDING; // Radius an Canvas anpassen
    const centerX = CANVAS_WIDTH / 2;
    const centerY = CANVAS_HEIGHT / 2;

    balls.forEach((b, i) => {
      const angle = (i / NUM_BALLS) * Math.PI * 2;
      b.targetX = centerX + Math.cos(angle) * radius;
      b.targetY = centerY + Math.sin(angle) * radius;
      b.targetSize = 15;
    });
  } else if (phase === 2) {
    // Welle
    const waveLength = CANVAS_WIDTH - 2 * PADDING;
    const amplitude = 40;
    const ballSize = 15;
    const startX = PADDING;
    const centerY = CANVAS_HEIGHT / 2;

    balls.forEach((b, i) => {
      b.targetX = startX + i * (waveLength / (NUM_BALLS - 1));
      b.targetY = centerY + Math.sin(i * 0.5) * amplitude;
      b.targetSize = ballSize;
    });
  } else if (phase === 3) {
    // Zufällige Verteilung
    balls.forEach(b => {
      b.targetX = Math.random() * (CANVAS_WIDTH - PADDING * 2) + PADDING;
      b.targetY = Math.random() * (CANVAS_HEIGHT - PADDING * 2) + PADDING;
      b.targetSize = 15;
    });
  }
}

setTargetsForPhase();

// Animation
function animate(time) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dynamische Rotation in Phase 1
  if (phase === 1) {
    const radius = Math.min(canvas.width, canvas.height) / 2 - 50; // Padding berücksichtigen
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const rotationSpeed = time / 2500;

    balls.forEach((b, i) => {
      const angle = (i / NUM_BALLS) * Math.PI * 2 + rotationSpeed;
      b.targetX = centerX + Math.cos(angle) * radius;
      b.targetY = centerY + Math.sin(angle) * radius;
    });
  }

  // Dynamische Welle in Phase 2
  if (phase === 2) {
    const waveLength = canvas.width - 2 * 50; // Padding berücksichtigen
    const amplitude = 40;
    const ballSize = 15;
    const startX = 50; // PADDING
    const centerY = canvas.height / 2;

    balls.forEach((b, i) => {
      b.targetX = startX + i * (waveLength / (NUM_BALLS - 1));
      b.targetY = centerY + Math.sin(i * 0.5 + time / 300) * amplitude;
    });
  }

  balls.forEach((b, i) => {
    // Bewegung X/Y
    b.x += (b.targetX - b.x) * 0.1;
    b.y += (b.targetY - b.y) * 0.1;

    // Größe-Animation in Phase 0 und Phase 3
    if (phase === 0 || phase === 3) {
      const progress = phaseTimer / PHASE_DURATION;
      const wobble = Math.sin(time / 100 + i) * (1 - progress) * 5;
      b.size = b.targetSize + wobble;
    } else {
      b.size += (b.targetSize - b.size) * 0.1;
    }

    // Zeichnen
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.size / 2, 0, Math.PI * 2);
    ctx.fillStyle = b.color;
    ctx.fill();
  });

  phaseTimer += 16;
  if (phaseTimer > PHASE_DURATION) {
    phaseTimer = 0;
    phase = (phase + 1) % 4;
    setTargetsForPhase();
  }

  requestAnimationFrame(animate);
}

animate(0);





const NUM_BALLS = 30;
const colors = ['#000', '#ff27fa'];
let balls = [];
let phase = 0;
let phaseTimer = 0;
const PHASE_DURATION = 1500; // 2 Sekunden pro Phase

// Canvas initialisieren
const canvas = document.getElementById('balls');
const ctx = canvas.getContext('2d');

// Feste Canvas-Größe setzen
canvas.width = 800;
canvas.height = 800;

// Kugeln erzeugen
for (let i = 0; i < NUM_BALLS; i++) {
  balls.push({
    x: 0,
    y: 0,
    size: 15,
    targetX: 0,
    targetY: 0,
    targetSize: 15,
    color: colors[Math.floor(Math.random() * colors.length)]
  });
}

// Farben zufällig neu verteilen
function setColorsRandom() {
  balls.forEach(b => {
    b.color = colors[Math.floor(Math.random() * colors.length)];
  });
}

// Targets je Phase setzen
function setTargetsForPhase() {
  setColorsRandom();

  const PADDING = 50; // Einheitlicher Padding für alle Phasen
  const CANVAS_WIDTH = 800;
  const CANVAS_HEIGHT = 800;

  if (phase === 0) {
    // Quadrat
    const rows = 6;
    const cols = 5;
    const baseSize = 15;

    // Berechne Abstände, sodass Breite und Höhe des Gitters gleich sind
    const availableWidth = CANVAS_WIDTH - 2 * PADDING; // 700px
    const availableHeight = CANVAS_HEIGHT - 2 * PADDING; // 700px
    const spacingX = availableWidth / (cols - 1); // 175px
    const spacingY = spacingX * (cols - 1) / (rows - 1); // 140px

    let index = 0;
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (index >= NUM_BALLS) break;
        balls[index].targetX = PADDING + col * spacingX;
        balls[index].targetY = PADDING + row * spacingY;
        balls[index].targetSize = baseSize;
        index++;
      }
    }
  } else if (phase === 1) {
    // Kreis
    const radius = Math.min(CANVAS_WIDTH, CANVAS_HEIGHT) / 2 - PADDING;
    const centerX = CANVAS_WIDTH / 2;
    const centerY = CANVAS_HEIGHT / 2;

    balls.forEach((b, i) => {
      const angle = (i / NUM_BALLS) * Math.PI * 2;
      b.targetX = centerX + Math.cos(angle) * radius;
      b.targetY = centerY + Math.sin(angle) * radius;
      b.targetSize = 15;
    });
  } else if (phase === 2) {
    // Welle
    const waveLength = CANVAS_WIDTH - 2 * PADDING;
    const amplitude = 40;
    const ballSize = 15;
    const startX = PADDING;
    const centerY = CANVAS_HEIGHT / 2;

    balls.forEach((b, i) => {
      b.targetX = startX + i * (waveLength / (NUM_BALLS - 1));
      b.targetY = centerY + Math.sin(i * 0.5) * amplitude;
      b.targetSize = ballSize;
    });
  } else if (phase === 3) {
    // Zufällige Verteilung
    balls.forEach(b => {
      b.targetX = Math.random() * (CANVAS_WIDTH - PADDING * 2) + PADDING;
      b.targetY = Math.random() * (CANVAS_HEIGHT - PADDING * 2) + PADDING;
      b.targetSize = 15;
    });
  }
}

setTargetsForPhase();

// Animation
function animate(time) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dynamische Rotation in Phase 1
  if (phase === 1) {
    const radius = Math.min(canvas.width, canvas.height) / 2 - 50;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const rotationSpeed = time / 2500;

    balls.forEach((b, i) => {
      const angle = (i / NUM_BALLS) * Math.PI * 2 + rotationSpeed;
      b.targetX = centerX + Math.cos(angle) * radius;
      b.targetY = centerY + Math.sin(angle) * radius;
    });
  }

  // Dynamische Welle in Phase 2
  if (phase === 2) {
    const waveLength = canvas.width - 2 * 50;
    const amplitude = 40;
    const ballSize = 15;
    const startX = 50;
    const centerY = canvas.height / 2;

    balls.forEach((b, i) => {
      b.targetX = startX + i * (waveLength / (NUM_BALLS - 1));
      b.targetY = centerY + Math.sin(i * 0.5 + time / 300) * amplitude;
    });
  }

  balls.forEach((b, i) => {
    // Bewegung X/Y
    b.x += (b.targetX - b.x) * 0.1;
    b.y += (b.targetY - b.y) * 0.1;

    // Größe-Animation in Phase 0 und Phase 3
    if (phase === 0 || phase === 3) {
      const progress = phaseTimer / PHASE_DURATION;
      const wobble = Math.sin(time / 100 + i) * (1 - progress) * 5;
      b.size = b.targetSize + wobble;
    } else {
      b.size += (b.targetSize - b.size) * 0.1;
    }

    // Zeichnen
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.size / 2, 0, Math.PI * 2);
    ctx.fillStyle = b.color;
    ctx.fill();
  });

  phaseTimer += 16;
  if (phaseTimer > PHASE_DURATION) {
    phaseTimer = 0;
    phase = (phase + 1) % 4;
    setTargetsForPhase();
  }

  requestAnimationFrame(animate);
}

animate(0);

*/

const NUM_BALLS = 30;
const colors = ['#000', '#ff27fa'];
let balls = [];
let phase = 0;
let phaseTimer = 0;
const PHASE_DURATION = 1500; // 2 Sekunden pro Phase
const INITIAL_DURATION = 1000; // 1 Sekunde für initiale Animation
let isInitialPhase = true; // Flag für Initialphase

// Canvas initialisieren
const canvas = document.getElementById('balls');
const ctx = canvas.getContext('2d');

// Feste Canvas-Größe setzen
canvas.width = 800;
canvas.height = 800;

// Kugeln erzeugen mit zufälligen Startpositionen in kleinem Bereich
for (let i = 0; i < NUM_BALLS; i++) {
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const spread = 50; // Bälle starten in einem 100x100px Bereich um die Mitte
  balls.push({
    x: centerX + (Math.random() - 0.5) * spread * 2, // Zufällig ±50px
    y: centerY + (Math.random() - 0.5) * spread * 2,
    size: 15,
    targetX: 0,
    targetY: 0,
    targetSize: 15,
    color: colors[Math.floor(Math.random() * colors.length)]
  });
}

// Farben zufällig neu verteilen
function setColorsRandom() {
  balls.forEach(b => {
    b.color = colors[Math.floor(Math.random() * colors.length)];
  });
}

// Targets je Phase setzen
function setTargetsForPhase() {
  setColorsRandom();

  const PADDING = 50; // Einheitlicher Padding für alle Phasen
  const CANVAS_WIDTH = 800;
  const CANVAS_HEIGHT = 800;

  if (phase === 0) {
    // Quadrat
    const rows = 6;
    const cols = 5;
    const baseSize = 15;

    // Berechne Abstände, sodass Breite und Höhe des Gitters gleich sind
    const availableWidth = CANVAS_WIDTH - 2 * PADDING; // 700px
    const availableHeight = CANVAS_HEIGHT - 2 * PADDING; // 700px
    const spacingX = availableWidth / (cols - 1); // 175px
    const spacingY = spacingX * (cols - 1) / (rows - 1); // 140px

    let index = 0;
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (index >= NUM_BALLS) break;
        balls[index].targetX = PADDING + col * spacingX;
        balls[index].targetY = PADDING + row * spacingY;
        balls[index].targetSize = baseSize;
        index++;
      }
    }
  } else if (phase === 1) {
    // Kreis
    const radius = Math.min(CANVAS_WIDTH, CANVAS_HEIGHT) / 2 - PADDING;
    const centerX = CANVAS_WIDTH / 2;
    const centerY = CANVAS_HEIGHT / 2;

    balls.forEach((b, i) => {
      const angle = (i / NUM_BALLS) * Math.PI * 2;
      b.targetX = centerX + Math.cos(angle) * radius;
      b.targetY = centerY + Math.sin(angle) * radius;
      b.targetSize = 15;
    });
  } else if (phase === 2) {
    // Welle
    const waveLength = CANVAS_WIDTH - 2 * PADDING;
    const amplitude = 40;
    const ballSize = 15;
    const startX = PADDING;
    const centerY = CANVAS_HEIGHT / 2;

    balls.forEach((b, i) => {
      b.targetX = startX + i * (waveLength / (NUM_BALLS - 1));
      b.targetY = centerY + Math.sin(i * 0.5) * amplitude;
      b.targetSize = ballSize;
    });
  } else if (phase === 3) {
    // Zufällige Verteilung
    balls.forEach(b => {
      b.targetX = Math.random() * (CANVAS_WIDTH - PADDING * 2) + PADDING;
      b.targetY = Math.random() * (CANVAS_HEIGHT - PADDING * 2) + PADDING;
      b.targetSize = 15;
    });
  }
}

// Initiale Zielpositionen für Phase 0 setzen
setTargetsForPhase();

// Animation
function animate(time) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dynamische Rotation in Phase 1
  if (phase === 1) {
    const radius = Math.min(canvas.width, canvas.height) / 2 - 50;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const rotationSpeed = time / 2500;

    balls.forEach((b, i) => {
      const angle = (i / NUM_BALLS) * Math.PI * 2 + rotationSpeed;
      b.targetX = centerX + Math.cos(angle) * radius;
      b.targetY = centerY + Math.sin(angle) * radius;
    });
  }

  // Dynamische Welle in Phase 2
  if (phase === 2) {
    const waveLength = canvas.width - 2 * 50;
    const amplitude = 40;
    const ballSize = 15;
    const startX = 50;
    const centerY = canvas.height / 2;

    balls.forEach((b, i) => {
      b.targetX = startX + i * (waveLength / (NUM_BALLS - 1));
      b.targetY = centerY + Math.sin(i * 0.5 + time / 300) * amplitude;
    });
  }

  balls.forEach((b, i) => {
    // Bewegung X/Y
    b.x += (b.targetX - b.x) * 0.1;
    b.y += (b.targetY - b.y) * 0.1;

    // Größe-Animation in Phase 0 und Phase 3
    if (phase === 0 || phase === 3) {
      const progress = phaseTimer / (isInitialPhase ? INITIAL_DURATION : PHASE_DURATION);
      const wobble = Math.sin(time / 100 + i) * (1 - progress) * 5;
      b.size = b.targetSize + wobble;
    } else {
      b.size += (b.targetSize - b.size) * 0.1;
    }

    // Zeichnen
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.size / 2, 0, Math.PI * 2);
    ctx.fillStyle = b.color;
    ctx.fill();
  });

  phaseTimer += 16;
  if (isInitialPhase && phaseTimer >= INITIAL_DURATION) {
    isInitialPhase = false; // Initialphase beenden
    phaseTimer = 0; // Timer zurücksetzen
    phase = 0; // Sicherstellen, dass Phase 0 aktiv bleibt
    setTargetsForPhase(); // Zielpositionen für Phase 0 erneut setzen (falls nötig)
  } else if (!isInitialPhase && phaseTimer > PHASE_DURATION) {
    phaseTimer = 0;
    phase = (phase + 1) % 4;
    setTargetsForPhase();
  }

  requestAnimationFrame(animate);
}

animate(0);