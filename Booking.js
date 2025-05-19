document.addEventListener("DOMContentLoaded", function() {
    const bookingDetails = document.getElementById('bookingDetails');
    const bookedBoat = JSON.parse(localStorage.getItem('bookedBoat'));

    // Add popup HTML structure
    document.body.insertAdjacentHTML('beforeend', `
        <div id="confirmationPopup" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden">
            <div class="bg-white rounded-xl shadow-xl w-full max-w-md mx-4 overflow-hidden transform transition-all duration-300 ease-out scale-95 opacity-0">
                <div class="bg-green-100 p-4 flex items-center border-b border-green-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <h3 class="text-lg font-semibold text-green-800">Booking Confirmed</h3>
                    <button onclick="closeConfirmation()" class="ml-auto text-gray-500 hover:text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div class="p-6">
                    <div class="flex flex-col items-center text-center mb-6">
                        <div class="bg-green-50 rounded-full p-4 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h4 class="text-xl font-medium text-gray-800 mb-2">Reservation Complete!</h4>
                        <p class="text-gray-600">Your booking has been successfully confirmed.</p>
                    </div>
                    
                    <div class="bg-gray-50 rounded-lg p-4 mb-6">
                        <div class="flex justify-between items-center mb-3">
                            <span class="text-gray-600">Booking Reference:</span>
                            <span class="font-mono text-sm bg-gray-200 px-2 py-1 rounded">#${Math.floor(100000 + Math.random() * 900000)}</span>
                        </div>
                        <div class="flex justify-between items-center text-sm">
                            <span class="text-gray-600">Date:</span>
                            <span>${new Date().toLocaleDateString()}</span>
                        </div>
                    </div>
                    
                    <button onclick="closeConfirmation()" class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        Return to Home
                    </button>
                </div>
            </div>
        </div>
    `);

    if(bookedBoat) {
        bookingDetails.innerHTML = `
            <div class="p-6">
                <h1 class="text-2xl font-bold mb-4">Complete Your Booking</h1>
                <div class="flex flex-col md:flex-row gap-6">
                    <div class="md:w-1/2">
                        <img src="${bookedBoat.image}" alt="${bookedBoat.name}" 
                             class="w-full h-64 object-cover rounded-lg shadow-md"
                             onerror="this.src='https://via.placeholder.com/400x300?text=Boat+Image'">
                    </div>
                    <div class="md:w-1/2">
                        <h2 class="text-xl font-semibold mb-2">${bookedBoat.name}</h2>
                        <p class="text-gray-600 mb-4">${bookedBoat.description}</p>
                        
                        <div class="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <p class="text-sm text-gray-500">Type</p>
                                <p class="font-medium">${bookedBoat.type}</p>
                            </div>
                            <div>
                                <p class="text-sm text-gray-500">Island</p>
                                <p class="font-medium">${bookedBoat.island}</p>
                            </div>
                            <div>
                                <p class="text-sm text-gray-500">Activity</p>
                                <p class="font-medium">${bookedBoat.activity}</p>
                            </div>
                            <div>
                                <p class="text-sm text-gray-500">Capacity</p>
                                <p class="font-medium">${bookedBoat.capacity} people</p>
                            </div>
                        </div>
                        
                        <div class="border-t pt-4">
                            <p class="text-sm text-gray-500">Price</p>
                            <p class="text-2xl font-bold text-blue-600">${bookedBoat.price}</p>
                        </div>
                        
                        <button onclick="confirmBooking()" 
                                class="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                            Confirm Booking
                        </button>
                    </div>
                </div>
            </div>`;
    } else {
        bookingDetails.innerHTML = `
            <div class="p-6 text-center">
                <h2 class="text-xl font-semibold mb-2">No Booking Found</h2>
                <p class="text-gray-600 mb-4">Please go back and select a boat to book.</p>
                <a href="main.html" class="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-200">
                    Return to Boat Selection
                </a>
            </div>`;
    }
});


function confirmBooking() {
    const popup = document.getElementById('confirmationPopup');
    const popupContent = popup.querySelector('div > div');
    const bookedBoat = JSON.parse(localStorage.getItem('bookedBoat'));
    
    // Generate booking reference
    const bookingRef = `#${Math.floor(100000 + Math.random() * 900000)}`;
    const bookingDate = new Date().toLocaleDateString();
    
    // Create booking history item
    const bookingHistoryItem = {
        ...bookedBoat,
        bookingRef,
        bookingDate,
        status: 'Confirmed'
    };
    
    // Get existing bookings or create new array
    let bookingsHistory = JSON.parse(localStorage.getItem('bookingsHistory')) || [];
    bookingsHistory.push(bookingHistoryItem);
    
    // Save to localStorage
    localStorage.setItem('bookingsHistory', JSON.stringify(bookingsHistory));
    
    // Show popup with animation
    popup.classList.remove('hidden');
    setTimeout(() => {
        popupContent.classList.remove('scale-95', 'opacity-0');
        popupContent.classList.add('scale-100', 'opacity-100');
    }, 10);
    
    // Clear current booking but keep history
    localStorage.removeItem('bookedBoat');
    
    // Change the button to view bookings
    const closeButton = popup.querySelector('button[onclick="closeConfirmation()"]');
    closeButton.textContent = 'View My Bookings';
    closeButton.onclick = function() {
        closeConfirmation();
        window.location.href = "history.html";
    };
    
    // Auto-close after 5 seconds
    setTimeout(() => {
        if (!popup.classList.contains('hidden')) {
            closeConfirmation();
            window.location.href = "history.html";
        }
    }, 5000);
}

function closeConfirmation() {
    const popup = document.getElementById('confirmationPopup');
    const popupContent = popup.querySelector('div > div');
    
    // Animate out
    popupContent.classList.remove('scale-100', 'opacity-100');
    popupContent.classList.add('scale-95', 'opacity-0');
    
    // Hide after animation completes
    setTimeout(() => {
        popup.classList.add('hidden');
        window.location.href = "main.html";
    }, 3000);
}