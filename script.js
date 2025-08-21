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

    // Formulario
    document.getElementById("infoForm").addEventListener("submit", function(e){
      e.preventDefault();
      alert("¡Formulario enviado! Gracias por solicitar información.");
      this.reset();
      modal.style.display="none";
    });