document.addEventListener("DOMContentLoaded", function() {
            const bookingsList = document.getElementById('bookingsList');
            const bookingsHistory = JSON.parse(localStorage.getItem('bookingsHistory')) || [];
            
            if (bookingsHistory.length > 0) {
                bookingsList.innerHTML = '';
                
                bookingsHistory.forEach((booking, index) => {
                    const bookingCard = `
                        <div class="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                            <div class="md:flex">
                                <div class="md:w-1/3">
                                    <img src="${booking.image}" alt="${booking.name}" 
                                         class="w-full h-48 md:h-full object-cover"
                                         onerror="this.src='https://via.placeholder.com/400x300?text=Boat+Image'">
                                </div>
                                <div class="p-6 md:w-2/3">
                                    <div class="flex justify-between items-start">
                                        <div>
                                            <h2 class="text-xl font-semibold text-gray-800">${booking.name}</h2>
                                            <p class="text-gray-600 mt-1">${booking.type} • ${booking.island}</p>
                                        </div>
                                        <span class="px-3 py-1 rounded-full text-xs font-medium ${booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}">
                                            ${booking.status}
                                        </span>
                                    </div>
                                    
                                    <div class="mt-4 grid grid-cols-2 gap-4">
                                        <div>
                                            <p class="text-sm text-gray-500">Booking Reference</p>
                                            <p class="font-medium">${booking.bookingRef}</p>
                                        </div>
                                        <div>
                                            <p class="text-sm text-gray-500">Booking Date</p>
                                            <p class="font-medium">${booking.bookingDate}</p>
                                        </div>
                                        <div>
                                            <p class="text-sm text-gray-500">Activity</p>
                                            <p class="font-medium">${booking.activity}</p>
                                        </div>
                                        <div>
                                            <p class="text-sm text-gray-500">Capacity</p>
                                            <p class="font-medium">${booking.capacity} people</p>
                                        </div>
                                    </div>
                                    
                                    <div class="mt-6 flex justify-between items-center">
                                        <div>
                                            <p class="text-sm text-gray-500">Total Price</p>
                                            <p class="text-2xl font-bold text-blue-600">${booking.price}</p>
                                        </div>
                                        <button onclick="cancelBooking(${index})" class="text-red-600 hover:text-red-800 font-medium">
                                            <i class="fas fa-times mr-1"></i> Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                    bookingsList.insertAdjacentHTML('beforeend', bookingCard);
                });
            }
        });
        
        function cancelBooking(index) {
            if (confirm('Are you sure you want to cancel this booking?')) {
                let bookingsHistory = JSON.parse(localStorage.getItem('bookingsHistory')) || [];
                bookingsHistory.splice(index, 1);
                localStorage.setItem('bookingsHistory', JSON.stringify(bookingsHistory));
                window.location.reload();
            }
        }