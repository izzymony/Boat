// Get references to the filters and boat cards
const priceFilter = document.getElementById('price-filter');
const availabilityFilter = document.getElementById('availability-filter');
const boatCards = document.querySelectorAll('.boat-card');
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalPrice = document.getElementById("modal-price");
const modalAvailability = document.getElementById("modal-availability");
const closeModal = document.getElementById("close-modal");

// Function to filter boats
function filterBoats() {
    const priceValue = priceFilter.value;
    const availabilityValue = availabilityFilter.value;

    boatCards.forEach(card => {
        const price = parseInt(card.getAttribute('data-price'));
        const availability = card.getAttribute('data-availability');

        // Determine if the card matches the selected filters
        let priceMatch = false;
        if (priceValue === 'all') priceMatch = true;
        else if (priceValue === 'low' && price < 500) priceMatch = true;
        else if (priceValue === 'medium' && price >= 500 && price <= 1000) priceMatch = true;
        else if (priceValue === 'high' && price > 1000) priceMatch = true;

        const availabilityMatch = availabilityValue === 'all' || availabilityValue === availability;

        // Show or hide the card based on the filter match
        if (priceMatch && availabilityMatch) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Add event listeners to the filters
priceFilter.addEventListener('change', filterBoats);
availabilityFilter.addEventListener('change', filterBoats);

// Modal functionality for boat cards
boatCards.forEach(card => {
    card.addEventListener('click', () => {
        const image = card.querySelector('img').src;
        const description = card.dataset.description || "No description available.";
        const price = card.querySelector('.text-blue-500').textContent;
        const availability = card.querySelector(".text-green-500, .text-red-500").textContent;

        modalImage.src = image;
        modalTitle.textContent = card.querySelector('h3').textContent;
        modalDescription.textContent = description;
        modalPrice.textContent = price;
        modalAvailability.textContent = availability;

        modal.classList.remove('hidden');
    });
});

// Close modal functionality
closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
});

const menu = document.getElementById('menu');
const menuContainer = document.getElementById('menu-container');
const toggleMenu = document.getElementById('toggle-menu');
const closeMenu = document.getElementById('close-menu');


const menuItems = [
    {text: 'Home', href: '#'},
    {text: 'Help', href: '#'},
    {text: 'Profile', href: '#', type: 'Profile'},
]


 menuItems.forEach((item) => {
    const menuItem =  document.getElementById('menu');
    const link = document.createElement('a');
    link.href = item.href;
    link.textContent = item.text;
    link.classList.add('block', 'py-6', 'px-4', 'text-black', 'hover:bg-gray-100', 'font-medium');

    if( item.text === 'Profile'){
        link.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'profile.html';
        })

    }

    menuItem.appendChild(link);
   
  
})

toggleMenu.addEventListener('click', () =>{
    menuContainer.classList.toggle('hidden')
})

closeMenu.addEventListener('click', () => {
    menuContainer.classList.toggle('hidden')
}) 