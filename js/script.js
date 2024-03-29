var mydiv = document.getElementById('nav')

const navE1=document.querySelector('.navbar');
window.addEventListener('scroll',()=>{
    if (window.scrollY >= 50) {
        navE1.classList.add('navbar-scrolled');
        mydiv.setAttribute('class','navbar navbar-expand-lg bg-light  fixed-top ')
        
    }
    else if(window.screenY < 50){
            navE1.classList.remove('navbar-scrolled');
            mydiv.setAttribute('class','navbar navbar-expand-lg bg-light  position-sticky ')
          }
});