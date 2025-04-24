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