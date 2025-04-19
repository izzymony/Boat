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