document.addEventListener("DOMContentLoaded", function(){
    const bookingDetails = document.getElementById('bookingDetails');

    const bookedBoat = JSON.parse(localStorage.getItem('bookedBoat'));
    
    if(bookedBoat){
      
        
        
        
        bookingDetails.innerHTML = `
                    <div class="p-6">
                <h1 class="text-2xl font-bold mb-4">Booking Confirmation</h1>
                <div class="flex flex-col md:flex-row gap-6">
                    <div class="md:w-1/2">
                        <img src="${bookedBoat.image}" alt="${bookedBoat.name}" 
                             class="w-full h-64 object-cover rounded-lg"
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
                                class="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium">
                            Confirm Booking
                        </button>
                    </div>
                </div>
            </div>`
            ;

    } else{
        bookingDetails.innerHTML = `
         <div class="p-6 text-center">
                <h2 class="text-xl font-semibold mb-2">No Booking Found</h2>
                <p class="text-gray-600 mb-4">Please go back and select a boat to book.</p>
                <a href="index.html" class="text-blue-600 hover:underline">Return to Boat Selection</a>
            </div>`;
    }
})

function confirmBooking() {
    alert('Booking confirmed! Thank you for your reservation.');
    // Here you would typically send the booking to your backend
    localStorage.removeItem('bookedBoat');
    
}

