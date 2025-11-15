const menuItems = [
    {text: 'Home', href: '#', type:'Home'},
    {text: 'Help', href: '#' , type:'Help'},
    {text: 'Profile', href: '#', type: 'Profile'},
    {text: 'Bookings', href: '#', type: 'Bookings'},
    {text: 'History', href: '#', type: 'History'}
]

const menu = document.getElementById('menu');
const menuContainer = document.getElementById('menu-container');
const toggleMenu = document.getElementById('toggle-menu');
const closeMenu = document.getElementById('close-menu');

menuItems.forEach((item) => {
    const menuItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = item.href;
    link.textContent = item.text;
    link.classList.add ('block' ,'py-6' ,'text-black', 'hover:bg-gray-100', 'font-medium')

    if(item.text === 'Profile'){
        link.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'profile.html'
        })
    }

    if(item.text === 'Bookings'){
      link.addEventListener('click', (e) =>{
        e.preventDefault();
        window.location.href = 'Booking.html'
      })
    }
    if(item.text === 'History'){
      link.addEventListener('click', (e) =>{
        e.preventDefault();
        window.location.href = 'history.html'
      })
    }
    if(item.text === 'Home'){
      link.addEventListener('click', (e) =>{
        e.preventDefault();
        window.location.href = 'index.html'
      })
    }
    if(item.text === 'Help'){
      link.addEventListener('click', (e) =>{
        e.preventDefault();
        window.location.href = 'contact.html'
      })
    }
    menuItem.appendChild(link);
    menu.appendChild(menuItem);
    
})

toggleMenu.addEventListener('click', () => {
    menuContainer.classList.toggle('hidden');
})

closeMenu.addEventListener('click', () => {
    menuContainer.classList.toggle('hidden')
})

// Close menu when clicking overlay
const menuOverlay = document.getElementById('menu-overlay');
if (menuOverlay) {
    menuOverlay.addEventListener('click', () => {
        menuContainer.classList.toggle('hidden')
    });
}




  // Sample boat data
 
  // Sample boat data (replace with your actual data)
  const boatData = [
    {
      name: "Luxury Dream Yacht",
      type: "yacht",
      island: "Snake Island",
      activity: "Boat cruise",
      capacity: 12,
      price: "$1200/day",
      image: "image/pexels-pixabay-163236 (1).jpg",
      description: "Premium luxury yacht with 5 cabins, jacuzzi, and professional crew."
    },
    {
      name: "Luxury Dream Yacht",
      type: "yacht",
      island: "Snake Island",
      activity: "Boat cruise",
      capacity: 12,
      price: "$1200/day",
      image: "image/pexels-hakan-demir-1322898384-32146982.jpg",
      description: "Premium luxury yacht with 5 cabins, jacuzzi, and professional crew."
    },
    {
      name: "Luxury Dream Yacht",
      type: "yacht",
      island: "Snake Island",
      activity: "Boat cruise",
      capacity: 12,
      price: "$1200/day",
      image: "image/pexels-hakan-demir-1322898384-32146982.jpg",
      description: "Premium luxury yacht with 5 cabins, jacuzzi, and professional crew."
    },
    {
      name: "Luxury Dream Yacht",
      type: "yacht",
      island: "Snake Island",
      activity: "Boat cruise",
      capacity: 12,
      price: "$1200/day",
      image: "image/pexels-pixabay-209978.jpg",
      description: "Premium luxury yacht with 5 cabins, jacuzzi, and professional crew."
    },
    {
      name: "Luxury Dream Yacht",
      type: "yacht",
      island: "Snake Island",
      activity: "Boat cruise",
      capacity: 12,
      price: "$1200/day",
      image: "image/pexels-mali-42091.jpg",
      description: "Premium luxury yacht with 5 cabins, jacuzzi, and professional crew."
    },
    {
      name: "Luxury Dream Yacht",
      type: "yacht",
      island: "Snake Island",
      activity: "Boat cruise",
      capacity: 12,
      price: "$1200/day",
      image: "image/pexels-hakan-demir-1322898384-32146982.jpg",
      description: "Premium luxury yacht with 5 cabins, jacuzzi, and professional crew."
    },
    {
      name: "Luxury Dream Yacht",
      type: "yacht",
      island: "Snake Island",
      activity: "Boat cruise",
      capacity: 12,
      price: "$1200/day",
      image: "image/pexels-freestockpro-1007836.jpg",
      description: "Premium luxury yacht with 5 cabins, jacuzzi, and professional crew."
    },
    {
      name: "Luxury Dream Yacht",
      type: "yacht",
      island: "North",
      activity: "Fun and games",
      capacity: 12,
      price: "$1200/day",
      image: "image/pexels-i-rem-yilmazturk-1831111582-32047283.jpg",
      description: "Premium luxury yacht with 5 cabins, jacuzzi, and professional crew."
    },
    {
      name: "Wave Rider Skii-boat",
      type: "Skii-boat",
      island: "North",
      activity: "Party",
      capacity: 8,
      price: "$450/day",
      image: "image/pexels-asadphoto-1430671.jpg",
      description: "High-speed boat perfect for water sports and parties."
    },

      {
      name: "Island Hopper Ferry",
      type: "Ferry",
      island: "South",
      activity: "Boat cruise",
      capacity: 120,
      price: "$800/day",
      image: "image/pexels-matthew-barra-178916-813011.jpg",
      description: "Comfortable transport for large groups"
    },
      {
      name: "Military submarine",
      type: "Military ship",
      island: "South",
      activity: "Military missile testing",
      capacity: 120,
      price: "$18,000/day",
      image: "image/USS_Independence_(LCS-2)_at_Naval_Air_Station_Key_West_on_29_March_2010_(100329-N-1481K-298).jpg",
      description: "Comfortable transport for large groups"
    },
      {
      name: "Military submarine",
      type: "Military ship",
      island: "East",
      activity: "Military missile testing",
      capacity: 120,
      price: "$18,000/day",
      image: "image/USS_Independence_(LCS-2)_at_Naval_Air_Station_Key_West_on_29_March_2010_(100329-N-1481K-298).jpg",
      description: "Comfortable transport for large groups"
    },
      {
      name: "Island Weaver Ferry",
      type: "Ferry",
      island: "Island",
      activity: "Boat cruise",
      capacity: 120,
      price: "$800/day",
      image: "image/pexels-matthew-barra-178916-813011.jpg",
      description: "Comfortable transport for large groups"
    },
      {
      name: "Island Weaver Ferry",
      type: "Ferry",
      island: "North",
      activity: "Boat cruise",
      capacity: 120,
      price: "$750/day",
      image: "image/pexels-matthew-barra-178916-813011.jpg",
      description: "Comfortable transport for large groups"
    },
      {
      name: "Island Weaver Ferry",
      type: "Ferry",
      island: "North",
      activity: "Party",
      capacity: 120,
      price: "$860/day",
      image: "image/pexels-matthew-barra-178916-813011.jpg",
      description: "Comfortable transport for large groups"
    },
      {
      name: "Island Weaver Ferry",
      type: "Ferry",
      island: "East",
      activity: "Party",
      capacity: 120,
      price: "$860/day",
      image: "image/pexels-matthew-barra-178916-813011.jpg",
      description: "Comfortable transport for large groups"
    },
    // Add more boats matching your dropdown options
  ];


 
  // Wait for DOM to load
  document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('searchButton');
    const searchForm = document.getElementById('searchForm');
    
    // Prevent form submission
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
    });
 
    // Add click event
    searchButton.addEventListener('click', function() {
      // Get selected values
      const boatType = document.getElementById('Boat-dropdown').value;
      const island = document.getElementById('islandDropdown').value;
      const activity = document.getElementById('activitiesDropdown').value;
      
      // Filter boats
      const results = boatData.filter(boat => {
        return (!boatType || boat.type === boatType) &&
               (!island || boat.island === island) &&
               (!activity || boat.activity === activity);
      });
      
      // Display results
      displayResults(results);
    });
  });

  function bookBoat(boatData){
    try{
      const boat = JSON.parse(decodeURIComponent(boatData));
      localStorage.setItem('bookedBoat', JSON.stringify(boat))

      window.location.href = 'Booking.html';

    } catch (error){
      console.error('Error booking:' ,error);
      alert('There was an error processing your booking, Please try again.')
    }
  }

  // Function to display results
  function displayResults(boats) {
    const container = document.getElementById('searchResults');

    if (boats.length === 0) {
      container.innerHTML = `
        <div class="col-span-full text-center py-16">
          <svg class="w-20 h-20 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <p class="text-gray-500 text-xl font-medium mb-2">No boats found</p>
          <p class="text-gray-400">Try adjusting your search filters</p>
        </div>
      `;
      return;
    }

    container.innerHTML = boats.map(boat => `
      <div class="boat-card group">
        <div class="relative overflow-hidden">
          <img src="${boat.image}" alt="${boat.name}"
               class="boat-card-image group-hover:scale-110 transition-transform duration-500"
               onerror="this.src='https://via.placeholder.com/400x300?text=Boat+Image'">
          <div class="absolute top-4 right-4">
            <span class="badge bg-ocean-500 text-white font-semibold text-base px-4 py-2 shadow-lg">
              ${boat.price}
            </span>
          </div>
        </div>

        <div class="boat-card-content">
          <h3 class="boat-card-title group-hover:text-ocean-500 transition-colors">
            ${boat.name}
          </h3>

          <p class="boat-card-description">${boat.description}</p>

          <div class="flex flex-wrap gap-2 mb-4">
            <span class="badge badge-info">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              ${boat.type}
            </span>
            <span class="badge badge-success">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              ${boat.island}
            </span>
            <span class="badge badge-warning">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              ${boat.activity}
            </span>
          </div>

          <div class="flex items-center justify-between pt-4 border-t border-gray-100">
            <div class="flex items-center text-gray-600">
              <svg class="w-5 h-5 mr-2 text-ocean-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
              <span class="text-sm font-medium">${boat.capacity} guests</span>
            </div>
            <button onclick="bookBoat('${encodeURIComponent(JSON.stringify(boat))}')"
                    class="btn btn-primary btn-sm">
              Book Now
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }