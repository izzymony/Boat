const menuItems = [
    {text: 'Home', href: '#'},
    {text: 'Help', href: '#'},
    {text: 'Profile', href: '#', type: 'Profile'},
]

const menu = document.getElementById('menu');
const menuContainer = document.getElementById('menu-container');
const toggleMenu = document.getElementById('toggle-menu');
const closeMenu = document.getElementById('close-menu');




toggleMenu.addEventListener('click', () => {
    menuContainer.classList.toggle('hidden');

})

closeMenu.addEventListener('click', () => {
    menuContainer.classList.toggle('hidden')
})