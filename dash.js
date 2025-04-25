document.addEventListener('DOMContentLoaded', () => {
    // Map tabs to their corresponding content sections
    const tabContentMap = {
        'tab-general': 'content-general',
        'tab-photos': 'content-photos',
        'tab-specifications': 'content-specifications',
    };

    // Add click event listeners to all tabs
    document.querySelectorAll('.clickable-tab').forEach((tab) => {
        tab.addEventListener('click', () => {
            // Hide all content sections
            document.querySelectorAll('.dynamic-content').forEach((content) => {
                content.classList.add('hidden');
            });

            // Remove active styles from all tabs
            document.querySelectorAll('.clickable-tab').forEach((tab) => {
                tab.classList.remove('active-tab');
            });

            // Show the corresponding content section
            const contentId = tabContentMap[tab.id];
            if (contentId) {
                document.getElementById(contentId).classList.remove('hidden');
            }

            // Add active styles to the clicked tab
            tab.classList.add('active-tab');
        });
    });

    // Set default content (e.g., General Information)
    document.getElementById('content-general').classList.remove('hidden');
    document.getElementById('tab-general').classList.add('active-tab');
});

document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'VnzbtolLriOTOGJUrGAop8Pc4pnjLPALfSD27dG6TToQERROmSjCM28Z'; // Replace with your Pexels API key
    const endpoint = 'https://api.pexels.com/v1/search?query=boats&per_page=12';

    // Fetch boat photos
    fetch(endpoint, {
        headers: {
            Authorization: apiKey,
        },
    })
        .then((response) => response.json())
        .then((data) => {
            const photoGrid = document.getElementById('photo-grid');
            data.photos.forEach((photo) => {
                const photoDiv = document.createElement('div');
                photoDiv.classList.add('relative', 'group');

                photoDiv.innerHTML = `
                    <img src="${photo.src.medium}" alt="${photo.alt}" class="w-full h-48 object-cover rounded-lg shadow-md">
                    <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p class="text-white font-bold">${photo.photographer}</p>
                    </div>
                `;
                photoGrid.appendChild(photoDiv);
            });
        })
        .catch((error) => console.error('Error fetching photos:', error));
});

document.addEventListener('DOMContentLoaded', () => {
    const calendarTitle = document.getElementById('calendar-title');
    const calendarDates = document.getElementById('calendar-dates');
    const prevMonthButton = document.getElementById('prev-month');
    const nextMonthButton = document.getElementById('next-month');

    let currentDate = new Date();

    // Function to render the calendar
    function renderCalendar(date) {
        const year = date.getFullYear();
        const month = date.getMonth();

        // Set the calendar title
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        calendarTitle.textContent = `${monthNames[month]} ${year}`;

        // Clear previous dates
        calendarDates.innerHTML = '';

        // Get the first day of the month and the number of days in the month
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Add empty divs for alignment
        for (let i = 0; i < firstDay; i++) {
            const emptyDiv = document.createElement('div');
            calendarDates.appendChild(emptyDiv);
        }

        // Add the dates
        for (let day = 1; day <= daysInMonth; day++) {
            const dateDiv = document.createElement('div');
            dateDiv.textContent = day;
            dateDiv.className = 'p-2 rounded-lg hover:bg-gray-200 cursor-pointer';
            dateDiv.addEventListener('click', () => {
                dateDiv.classList.toggle('bg-green-500');
                dateDiv.classList.toggle('text-white');
            });
            calendarDates.appendChild(dateDiv);
        }
    }

    // Event listeners for navigation buttons
    prevMonthButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    nextMonthButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });

    // Initial render
    renderCalendar(currentDate);
});

let selectedDates = [];
let currentDate = new Date(); // Track the current month and year

// Handle date selection
document.getElementById('calendar-dates').addEventListener('click', (event) => {
    if (event.target.classList.contains('p-2')) {
        const day = event.target.textContent;
        const month = currentDate.getMonth();
        const year = currentDate.getFullYear();

        // Format the date as "Month Day, Year" (e.g., "March 15, 2025")
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        const formattedDate = `${monthNames[month]} ${day}, ${year}`;

        // Add or remove the date from the selectedDates array
        const index = selectedDates.indexOf(formattedDate);
        if (index === -1) {
            selectedDates.push(formattedDate);
            event.target.classList.add('bg-green-500', 'text-white');
        } else {
            selectedDates.splice(index, 1);
            event.target.classList.remove('bg-green-500', 'text-white');
        }
        console.log('Selected Dates:', selectedDates);
    }
});

// Show popup on save button click
document.getElementById('save-calendar').addEventListener('click', () => {
    const modal = document.getElementById('popup-modal');
    const datesList = document.getElementById('selected-dates-list');

    // Update the modal content with selected dates
    if (selectedDates.length > 0) {
        datesList.textContent = `Selected Dates: ${selectedDates.join(', ')}`;
    } else {
        datesList.textContent = 'No dates selected.';
    }

    // Show the modal
    modal.classList.remove('hidden');
});

// Handle popup actions
document.getElementById('cancel-popup').addEventListener('click', () => {
    const modal = document.getElementById('popup-modal');
    modal.classList.add('hidden'); // Hide the modal
});

document.getElementById('confirm-popup').addEventListener('click', () => {
    const modal = document.getElementById('popup-modal');

    // Save selected dates to localStorage
    localStorage.setItem('selectedDates', JSON.stringify(selectedDates));
    alert('Availability saved!');

    // Hide the modal
    modal.classList.add('hidden');
});