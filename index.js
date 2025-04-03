// Define menu items
const menuItems = [
    { text: 'Home', href: '#' },
    { text: 'Help', href: '#' },
    { text: 'Login', href: 'signin.html' }, // Updated href to point to signin.html
];

// Get the menu element
const menu = document.getElementById('menu');
const menuContainer = document.getElementById('menu-container');
const toggleMenu = document.getElementById('toggle-menu');
const closeMenu = document.getElementById('close-menu');

// Generate menu items
menuItems.forEach((item) => {
    const menuItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = item.href; // Use the href from the menuItems array
    link.textContent = item.text;
    link.classList.add('block', 'py-6', 'px-4', 'text-black', 'hover:bg-gray-100', 'font-medium');

    // Add event listener for "Login" link
    if (item.text === 'Login') {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            window.location.href = 'signin.html'; // Redirect to signin.html
        });
    }

    menuItem.appendChild(link);
    menu.appendChild(menuItem);
});

// Toggle menu on mobile devices
toggleMenu.addEventListener('click', () => {
    menuContainer.classList.toggle('hidden');
});

// Close menu
closeMenu.addEventListener('click', () => {
    menuContainer.classList.toggle('hidden');
});