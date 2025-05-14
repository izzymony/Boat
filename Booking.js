const menuItems = [
    {text: 'Home', href: '#'},
    {text: 'Help', href: '#'},
    {text: 'Profile', href: '#', type: 'Profile'},
    {text: 'Bookings', href: '#', type: 'Bookings'},
]

const menu = document.getElementById('menu');
const menuContainer = document.getElementById('menu-container');
const toggleMenu = document.getElementById('toggle-menu');
const closeMenu = document.getElementById('close-menu');


menuItems.forEach((item)=>{
    const menuItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = item.href;
    link.textContent = item.text;
    link.classList.add('block' ,'py-6' ,'text-black', 'hover:bg-gray-100', 'font-medium')

    if (item.text === 'Profile'){
             link.addEventListener('click', (e) =>{

             }) 
    }

})