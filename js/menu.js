document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("button-open").addEventListener('click', function (){
        document.querySelector("header").classList.toggle("open")

       const menuNav = document.getElementById('menu-navigation').addEventListener('click', ()=> {
            document.querySelector("header").classList.toggle('open');
            })
       })
    })



// (() => {
//     const refs = {
//       openModalBtn: document.querySelector("[data-modal-open]"),
//       closeModalBtn: document.querySelector("[data-modal-close]"),
//       modal: document.querySelector("[data-modal]"),
//     };
  
//     refs.openModalBtn.addEventListener("click", toggleModal);
//     refs.closeModalBtn.addEventListener("click", toggleModal);
  
//     function toggleModal() {
//       refs.modal.classList.toggle("is-hidden");
//     }
//   })();