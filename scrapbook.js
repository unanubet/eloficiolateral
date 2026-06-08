// Scrapbook - distribuye las fotos con rotación y posición aleatoria pero controlada
document.addEventListener('DOMContentLoaded', function() {
  const fotos = [
    'web/Captura de pantalla 2026-06-03 182128.png',
    'web/Captura de pantalla 2026-06-03 182151.png',
    'web/Captura de pantalla 2026-06-08 111427.png',
    'web/Captura de pantalla 2026-06-08 111504.png',
    'web/Captura de pantalla 2026-06-08 111525.png',
    'web/Captura de pantalla 2026-06-08 111624.png',
    'web/IMG_20220619_171650.jpg',
    'web/IMG_20220619_171703.jpg',
    'web/IMG_20220619_171714.jpg',
    'web/IMG_20220619_171747.jpg',
    'web/WhatsApp Image 2026-06-08 at 11.19.02 (1).jpeg',
    'web/WhatsApp Image 2026-06-08 at 11.19.02.jpeg',
    'web/WhatsApp Image 2026-06-08 at 11.23.41 (1).jpeg',
    'web/WhatsApp Image 2026-06-08 at 11.23.41.jpeg',
    'web/WhatsApp Image 2026-06-08 at 11.23.42.jpeg',
    'web/WhatsApp Image 2026-06-08 at 11.25.42.jpeg',
  ];

  // rotaciones y posiciones predefinidas para que no sea random cada carga
  const configs = [
    { rot: -3, x: 0,   y: 0   },
    { rot:  2, x: 30,  y: 10  },
    { rot: -5, x: 60,  y: 5   },
    { rot:  4, x: 15,  y: 20  },
    { rot: -2, x: 45,  y: 15  },
    { rot:  6, x: 75,  y: 8   },
    { rot: -4, x: 5,   y: 30  },
    { rot:  3, x: 35,  y: 25  },
    { rot: -6, x: 65,  y: 22  },
    { rot:  2, x: 20,  y: 40  },
    { rot: -3, x: 50,  y: 35  },
    { rot:  5, x: 80,  y: 30  },
    { rot: -2, x: 10,  y: 50  },
    { rot:  4, x: 40,  y: 45  },
    { rot: -5, x: 70,  y: 42  },
    { rot:  3, x: 25,  y: 55  },
  ];

  const grid = document.getElementById('scrapbook-grid');
  if (!grid) return;

  fotos.forEach((src, i) => {
    const cfg = configs[i] || { rot: 0, x: 0, y: 0 };
    const item = document.createElement('div');
    item.className = 'scrap-item';
    item.style.transform = `rotate(${cfg.rot}deg)`;

    // tape decorativo
    const tape = document.createElement('div');
    tape.className = 'scrap-tape';

    const img = document.createElement('img');
    img.src = src;
    img.alt = 'El Oficio Lateral';
    img.loading = 'lazy';

    item.appendChild(tape);
    item.appendChild(img);
    grid.appendChild(item);
  });
});
