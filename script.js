// Manejo de Pestañas Interactivas
function openTab(evt, tabName) {
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(tabName).classList.add('active');
  evt.currentTarget.classList.add('active');
}

// Conmutación de Modo Oscuro / Claro
function toggleTheme() {
  if (document.body.getAttribute('data-theme') === 'dark') {
    document.body.removeAttribute('data-theme');
    document.querySelector('.theme-toggle').innerText = '🌙 Modo Oscuro';
  } else {
    document.body.setAttribute('data-theme', 'dark');
    document.querySelector('.theme-toggle').innerText = '☀️ Modo Claro';
  }
}

// Simulador Visual de Tráfico y Failover
function simulateTraffic(mode) {
  const link1 = document.getElementById('link-wan1');
  const link2 = document.getElementById('link-wan2');
  const statusBox = document.getElementById('sim-status');
  statusBox.style.display = 'block';

  if (mode === 'normal') {
    link1.setAttribute('stroke', '#0070c0');
    link1.setAttribute('stroke-width', '4');
    link2.setAttribute('stroke', '#00a8ff');
    link2.setAttribute('stroke-width', '4');
    statusBox.className = 'alert-box';
    statusBox.style.borderLeftColor = 'var(--success)';
    statusBox.innerHTML = '<strong>🟢 Modo Normal:</strong> Ambos enlaces activos. El TP-Link ER605 reparte las peticiones entre WAN1 y WAN2.';
  } else if (mode === 'wan1-down') {
    link1.setAttribute('stroke', '#e71d36');
    link1.setAttribute('stroke-width', '1');
    link2.setAttribute('stroke', '#00a8ff');
    link2.setAttribute('stroke-width', '7');
    statusBox.className = 'alert-box';
    statusBox.style.borderLeftColor = 'var(--danger)';
    statusBox.innerHTML = '<strong>⚠️️ Caída de WAN1 (Failover):</strong> Perdida de conectividad en WAN1. El router conmuta todo el tráfico automáticamente hacia WAN2.';
  } else if (mode === 'wan2-heavy') {
    link1.setAttribute('stroke', '#0070c0');
    link1.setAttribute('stroke-width', '3');
    link2.setAttribute('stroke', '#ff9f1c');
    link2.setAttribute('stroke-width', '8');
    statusBox.className = 'alert-box';
    statusBox.style.borderLeftColor = 'var(--warning)';
    statusBox.innerHTML = '<strong>📊 Alta Carga en WAN2:</strong> WAN2 ha alcanzado su umbral de ancho de banda. Las nuevas peticiones de la LAN son redirigidas hacia WAN1.';
  }
}

