const navMenu = document.getElementById('nav_menu');
const navMenuButton = document.getElementById('nav_menu_button');

const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');

navMenuButton.addEventListener('click', toggleDisplayMenu);

function toggleDisplayMenu() {
    
    navMenu.classList.toggle('hidden');
    bar1.classList.toggle('rotate45');
    bar2.classList.toggle('rotate135');
    bar3.classList.toggle('hidden');
}

