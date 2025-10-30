// 🔹 Data e hora da estreia de Pânico 7 (26/02/2026 às 20h no fuso local)
const estreiaFilme = new Date(2026, 1, 26, 20, 0, 0); 
// Mês começa em 0 (0 = janeiro, 1 = fevereiro, ...)

// Elementos do HTML
const timer = document.getElementById("timer");
const mensagemFinal = document.getElementById("mensagemFinal");

// Atualiza contador
function atualizarContador() {
  const now = new Date().getTime();
  const distance = estreiaFilme.getTime() - now;

  if (distance <= 0) {
    timer.style.display = "none";
    mensagemFinal.style.display = "block";
    return;
  }

  const dias = Math.floor(distance / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distance % (1000 * 60)) / 1000);

  timer.textContent = `${dias}d ${horas.toString().padStart(2,'0')}:${minutos.toString().padStart(2,'0')}:${segundos.toString().padStart(2,'0')}`;
}

// Atualiza a cada segundo
setInterval(atualizarContador, 1000);
atualizarContador();
