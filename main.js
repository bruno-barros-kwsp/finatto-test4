// Menu mobile
document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav').classList.toggle('active');
});

// Formulário → WhatsApp
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const nome = this[0].value;
  const email = this[1].value;
  const tel = this[2].value;
  const msg = this[3].value;
  const texto = `Olá, sou ${nome} (${email} | ${tel}). ${msg}`;
  const url = `https://wa.me/5511999999999?text=${encodeURIComponent(texto)}`;
  window.open(url, '_blank');
});
