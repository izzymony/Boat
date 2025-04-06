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
    localStorage.setItem('profileData', JSON.stringify(profileData));
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
    document.getElementById('profileForm').reset();
}

// Load profile data when the page loads
document.addEventListener('DOMContentLoaded', loadProfileData);