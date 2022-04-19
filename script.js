let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    header.classList.toggle('active');
}

window.onscroll = () =>{
    header.classList.remove('active');
}