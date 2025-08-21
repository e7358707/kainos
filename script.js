 // Burger menu
    const burger = document.querySelector('.burger');
    const menu = document.getElementById('mainmenu');
    burger.addEventListener('click',()=>menu.classList.toggle('show'));

    // Modal
    const modal = document.getElementById("modal");
    const openModalBtn = document.getElementById("openModal");
    const closeModalBtn = document.querySelector(".close-modal");

    openModalBtn.addEventListener("click", () => { modal.style.display = "block"; });
    closeModalBtn.addEventListener("click", () => { modal.style.display = "none"; });
    window.addEventListener("click", e => { if(e.target === modal) modal.style.display = "none"; });

    // Galeria movil
    const heroImages = [ "chica2.jpeg", "maestra.jpeg", "chicas.jpeg", "Grandes_historias.jpeg" ]; let index = 0; const heroImage = document.getElementById('heroImage'); setInterval(() => { heroImage.style.transform = 'translateX(50px)'; heroImage.style.opacity = '0'; setTimeout(() => { index = (index + 1) % heroImages.length; heroImage.src = heroImages[index]; heroImage.style.transform = 'translateX(-50px)'; heroImage.style.opacity = '1'; setTimeout(() => { heroImage.style.transform = 'translateX(0)'; }, 50); }, 500); }, 5000);
    // Formulario
    document.getElementById("infoForm").addEventListener("submit", function(e){
      e.preventDefault();
      alert("¡Formulario enviado! Gracias por solicitar información.");
      this.reset();
      modal.style.display="none";

    });
