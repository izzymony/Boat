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
    menuItem.appendChild(link);
    menu.appendChild(menuItem);
    
})

toggleMenu.addEventListener('click', () => {
    menuContainer.classList.toggle('hidden');

})

closeMenu.addEventListener('click', () => {
    menuContainer.classList.toggle('hidden')
})




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
      name: "Island Weaver Ferry",
      type: "Ferry",
      island: "Island",
      activity: "Boat cruise",
      capacity: 120,
      price: "$800/day",
      image: "image/pexels-matthew-barra-178916-813011.jpg",
      description: "Comfortable transport for large groups"
    }
    // Add more boats matching your dropdown options
  ];

/*
  document.addEventListener('DOMContentLoaded', function(){
    const searchButton = document.getElementById ('searchButton')
    
    searchButton.addEventListener('click', function(){
        const boatType = document.getElementById('Boat-dropdown');
        const island = document.getElementById('islandDropdown');
        const activity = document.getElementById('activitiesDropdown');

        const results = boatData.filter(boat =>{
          return(!boatType || boat.type === boatType)&&
                (!island || boat.island ===  island)&&
                (!activity || boat.activity === activity)
        })
        //DISPLAY RESULTS
        displayResults(results);
    })

   
  })

  function displayResults(boats){
    const container = document.getElementById('searchResults')
    if(boats === 0){
      container.innerHTML = `
      <div class="col-span-full text-center py-12">
          <p class="text-gray-500 text-lg">No boats found matching your criteria</p>
        </div>
        `;
        return
    }

   container.innerHTML = boats.map(boat => `
      <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <img src="${boat.image}" alt="${boat.name}" 
             class="w-full h-48 object-cover"
             onerror="this.src='https://via.placeholder.com/400x300?text=Boat+Image'">
        <div class="p-6">
          <div class="flex justify-between items-start">
            <h3 class="text-xl font-bold text-gray-900">${boat.name}</h3>
            <span class="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">${boat.price}</span>
          </div>
          
          <p class="mt-2 text-gray-600">${boat.description}</p>
          
          <div class="mt-4 flex flex-wrap gap-2">
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              ${boat.type}
            </span>
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
              ${boat.island}
            </span>
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
              ${boat.activity}
            </span>
          </div>
          
          <div class="mt-6 flex justify-between items-center">
            <span class="text-sm font-medium text-gray-500">Capacity: ${boat.capacity} people</span>
            <button class="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              Book Now
            </button>
          </div>
        </div>
      </div>
    `)
  } 
 */
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

  // Function to display results
  function displayResults(boats) {
    const container = document.getElementById('searchResults');
    
    if (boats.length === 0) {
      container.innerHTML = `
        <div class="col-span-full text-center py-12">
          <p class="text-gray-500 text-lg">No boats found matching your criteria</p>
        </div>
      `;
      return;
    }
    
    container.innerHTML = boats.map(boat => `
      <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <img src="${boat.image}" alt="${boat.name}" 
             class="w-full h-48 object-cover"
             onerror="this.src='https://via.placeholder.com/400x300?text=Boat+Image'">
        <div class="p-6">
          <div class="flex justify-between items-start">
            <h3 class="text-xl font-bold text-gray-900">${boat.name}</h3>
            <span class="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">${boat.price}</span>
          </div>
          
          <p class="mt-2 text-gray-600">${boat.description}</p>
          
          <div class="mt-4 flex flex-wrap gap-2">
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              ${boat.type}
            </span>
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
              ${boat.island}
            </span>
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
              ${boat.activity}
            </span>
          </div>
          
          <div class="mt-6 flex justify-between items-center">
            <span class="text-sm font-medium text-gray-500">Capacity: ${boat.capacity} people</span>
            <button onclick="bookBoat('${encodeURIComponent(JSON.stringify(boat))}')" ' class="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              Book Now
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }