// Validate input fields before saving
function validateProfileData(profileData) {
    if (!profileData.name || !profileData.surname || !profileData.email) {
        alert('Name, Surname, and Email are required fields.');
        return false;
    }
    if (!/\S+@\S+\.\S+/.test(profileData.email)) {
        alert('Please enter a valid email address.');
        return false;
    }
    return true;
}

function showSuccessMessage(){
    const successMessageDiv = document.querySelector('.popup')
    if(successMessageDiv){
        successMessageDiv.style.display = 'block',
        setTimeout(() => {
            successMessageDiv.style.display = 'none'

        }, 8000)

    }
}



// Save profile data to localStorage
function saveProfileData() {
    const profileData = {
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        postal: document.getElementById('postal').value,
        city: document.getElementById('city').value,
        date: document.getElementById('date').value,
    };

    if (!validateProfileData(profileData)) {
        return; // Stop if validation fails
    }

    localStorage.setItem('profileData', JSON.stringify(profileData));
    showSuccessMessage();
}

// Load profile data from localStorage
function loadProfileData() {
    const savedData = localStorage.getItem('profileData');
    if (savedData) {
        const profileData = JSON.parse(savedData);
        document.getElementById('name').value = profileData.name || '';
        document.getElementById('surname').value = profileData.surname || '';
        document.getElementById('email').value = profileData.email || '';
        document.getElementById('phone').value = profileData.phone || '';
        document.getElementById('address').value = profileData.address || '';
        document.getElementById('postal').value = profileData.postal || '';
        document.getElementById('city').value = profileData.city || '';
        document.getElementById('date').value = profileData.date || '';
    }
}

// Clear profile data from localStorage and reset the form
function clearProfileData() {
    localStorage.removeItem('profileData');
    document.getElementById('myForm').reset();
    alert('Profile data cleared.');
}

// Initialize event listeners
document.addEventListener('DOMContentLoaded', () => {
    loadProfileData();

    const saveButton = document.querySelector('.Bar');
    if (saveButton) {
        saveButton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent form submission
            saveProfileData();
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Define the mapping between image IDs and content section IDs
    const contentMap = {
        'image-profile': 'content-profile',
        'image-dashboard': 'content-dashboard',
        'image-booking': 'content-booking',
        'image-settings': 'content-settings',
        'image-help': 'content-help',
    };

    // Add click event listeners to each image
    document.querySelectorAll('.clickable-image').forEach((image) => {
        image.addEventListener('click', () => {
            // Hide all content sections
            document.querySelectorAll('.dynamic-section').forEach((section) => {
                section.classList.add('hidden');
            });

            // Show the content section corresponding to the clicked image
            const contentId = contentMap[image.id];
            if (contentId) {
                document.getElementById(contentId).classList.remove('hidden');
            }
        });
    });

    // Set default content (for the profile form)
    document.getElementById('content-profile').classList.remove('hidden');
});

document.addEventListener('DOMContentLoaded', () => {
    const bookedDatesList = document.getElementById('booked-dates-list');
    
    // Fetch booked dates from localStorage (or replace with API call)
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];

    // Populate the booked dates list
    if (bookings.length > 0) {
        bookings.forEach((booking) => {
            const listItem = document.createElement('li');
            listItem.className = 'mb-4 p-4 bg-white rounded-lg shadow-md';
           
            listItem.innerHTML = `
                <h3 class="font-bold text-lg text-black">${booking.boat}</h3>
                <ul class="list-disc pl-5 text-gray-700 space-y-2">
                    ${booking.dates.map(date => `<li>${date}</li>`).join('')}
                </ul>
            `;
            bookedDatesList.appendChild(listItem);

        });
    } else {
        const noBookingsMessage = document.createElement('p');
        noBookingsMessage.textContent = 'No bookings available.';
        noBookingsMessage.className = 'text-gray-500 italic';
        bookedDatesList.appendChild(noBookingsMessage);
    }
});


// Define menu items
const menuItems = [
   {text: 'Home', href: '#', type:'Home'},
    {text: 'Help', href: '#' , type:'Help'},
    {text: 'Profile', href: '#', type: 'Profile'},
    {text: 'Bookings', href: '#', type: 'Bookings'},
    {text: 'History', href: '#', type: 'History'}
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
    if (item.text === 'Help') {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            window.location.href = 'contact.html'; // Redirect to signin.html
        });

        if(item.text === 'Home'){
            link.addEventListener('click' , (e) => {
                e.preventDefault();
                window.location.href = 'index.html'
            })
        }
        if(item.text === 'Bookings'){
            link.addEventListener('click' , (e) => {
                e.preventDefault();
                window.location.href = 'Booking.html'
            })
        }
        if(item.text === 'History'){
            link.addEventListener('click' , (e) => {
                e.preventDefault();
                window.location.href = 'history.html'
            })
        }

        
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

