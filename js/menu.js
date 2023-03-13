// document.addEventListener("DOMContentLoaded", function(){
//     document.getElementById("button-open").addEventListener('click', function (){
//         document.querySelector("header").classList.toggle("open")

//        const menuNav = document.getElementById('menu-navigation').addEventListener('click', ()=> {
//             document.querySelector("header").classList.toggle('open');
//             })
//        })
//     })



    const burgerBtn = document.getElementById("button-open");
    const headerNav = document.querySelector("header");
    const mobileMenu = document.getElementById("menu-navigation");
    
    const toggleMobileMenu = () => {
      headerNav.classList.toggle("open");
    };
    
    const closeMobileMenu = (e) => {
      if (e.target !== e.currentTarget) {
        headerNav.classList.remove("open");
      }
    };
    
    burgerBtn.addEventListener("click", toggleMobileMenu);
    mobileMenu.addEventListener("click", closeMobileMenu);