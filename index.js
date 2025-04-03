// Define menu items
const menuItems = [
    { text: 'Home', href: '#' },
    { text: 'Help', href: '#' },
    { text: 'Login', href: '#', type: 'login' },
];

// Get the menu element
const menu = document.getElementById('menu');
const menuContainer = document.getElementById('menu-container');
const toggleMenu = document.getElementById('toggle-menu');
const closeMenu = document.getElementById('close-menu');

// Generate menu items
menuItems.forEach((item) => {
    if (item.type === 'login') {
        const loginItem = document.createElement('li');
        const link = document.createElement('a');
        link.textContent = item.text;
       
        link.addEventListener('click', () => {
            redirectToLoginPage();
        });
        loginItem.appendChild(link);
        menu.appendChild(loginItem);
    } else {
        const menuItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = item.href;
        link.textContent = item.text;
        link.classList.add('block', 'py-6', 'px-4', 'text-black', 'hover:bg-gray-100', 'font-medium');
        menuItem.appendChild(link);
        menu.appendChild(menuItem);
    }
});

// Function to redirect to login page
function redirectToLoginPage() {
    window.location.href = 'signIn.html'; // Replace with your login page URL
}

// Toggle menu on mobile devices
toggleMenu.addEventListener('click', () => {
    menuContainer.classList.toggle('hidden');
});

// Close menu
closeMenu.addEventListener('click', () => {
    menuContainer.classList.toggle('hidden');
});