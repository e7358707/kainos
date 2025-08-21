document.addEventListener("DOMContentLoaded", () => {
  // Menú
  const burger = document.querySelector(".burger");
  const menu = document.getElementById("mainmenu");
  if (burger && menu) {
    burger.addEventListener("click", () => menu.classList.toggle("show"));
    menu.querySelectorAll("a").forEach(a =>
      a.addEventListener("click", () => menu.classList.remove("show"))
    );
  }

  // Flotante 
  const modal = document.getElementById("modal");
  const openModalBtn = document.getElementById("openModal");
  const closeModalBtn = document.querySelector(".close-modal");

  if (openModalBtn && modal) openModalBtn.addEventListener("click", () => modal.style.display = "block");
  if (closeModalBtn && modal) closeModalBtn.addEventListener("click", () => modal.style.display = "none");
  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  // Formulario
  const form = document.getElementById("infoForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("¡Formulario enviado! Gracias por solicitar información.");
      form.reset();
      if (modal) modal.style.display = "none";
    });
  }

  // Imagenes
  const heroImage = document.getElementById("heroImage");
  if (heroImage) {
    const images = [
      "chica2.jpeg",
      "salon.jpeg",
      "Grandes_historias.jpeg",
      "maestra.jpeg"    
    ];

    images.forEach(src => { const img = new Image(); img.src = src; });

    let index = 0;
    setInterval(() => {
      index = (index + 1) % images.length;
      heroImage.classList.add("fade");
      setTimeout(() => {
        heroImage.src = images[index];
        heroImage.classList.remove("fade");
      }, 500);
    }, 5000);
  }
});

