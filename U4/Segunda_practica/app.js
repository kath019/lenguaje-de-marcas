const lista = document.getElementById('lista');
const contador = document.getElementById('contador');
const textoInput = document.getElementById('texto');
const aplicarBtn = document.getElementById('aplicar');
const eliminarMarcadosBtn = document.getElementById('eliminarMarcados');

// Delegación de eventos para marcar/desmarcar
lista.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('marcado');
    actualizarContador();
  }
});

aplicarBtn.addEventListener('click', () => {
  const texto = textoInput.value.trim().toLowerCase();
  const accion = document.querySelector('input[name="accion"]:checked').value;

  if (!texto && accion !== 'añadir') return;

  const items = Array.from(lista.children);

  if (accion === 'marcar') {
    items.forEach(li => {
      if (li.textContent.toLowerCase().includes(texto)) {
        li.classList.add('marcado');
      }
    });
  }

  if (accion === 'eliminar') {
    items.forEach(li => {
      if (li.textContent.toLowerCase().includes(texto)) {
        li.remove();
      }
    });
  }

  if (accion === 'añadir' && texto) {
    const li = document.createElement('li');
    li.textContent = textoInput.value;
    lista.appendChild(li);
  }

  textoInput.value = '';
  actualizarContador();
});

eliminarMarcadosBtn.addEventListener('click', () => {
  document.querySelectorAll('.marcado').forEach(li => li.remove());
  actualizarContador();
});

function actualizarContador() {
  const total = lista.children.length;
  const marcados = document.querySelectorAll('.marcado').length;
  contador.textContent = `${marcados}/${total} seleccionados`;
}

// Inicializar contador
actualizarContador();
