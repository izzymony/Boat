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