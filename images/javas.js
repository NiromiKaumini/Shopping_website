let menu = document.querySelector('#menu');
let navbar = document.querySelector('#navbar');
let menuIcon = document.querySelector('#menu-icon');

menu.onclick = () => {
    navbar.classList.toggle('active');
    if (menuIcon.classList.contains('bx bx-menu')) {
        menuIcon.classList.remove('bx bx-menu');
        menuIcon.classList.add('bx-x');
    } else {
        menuIcon.classList.remove('bx-x');
        menuIcon.classList.add('bx bx-menu');
    }
};
