document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();
 
   
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const phone = document.getElementById('phone').value;
    const street = document.getElementById('street').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

  
    if (!name || name.trim() === "") {
        alert("Name is required.");
        return;
    }

    if (isNaN(age) || age <= 0) {
        alert("Please enter a valid age.");
        return;
    }

    const phoneRegex = /^[0-9]{10}$/; 
    if (!phone || !phoneRegex.test(phone)) {
        alert("Please enter a valid phone number (10 digits).");
        return;
    }

    if (!street || street.trim() === "") {
        alert("Street address is required.");
        return;
    }

    if (!city || city.trim() === "") {
        alert("City is required.");
        return;
    }

    if (!state || state.trim() === "") {
        alert("State is required.");
        return;
    }

    const zipRegex = /^\d{5}(-\d{4})?$/; 
    if (!zip || !zipRegex.test(zip)) {
        alert("Please enter a valid zip code.");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!email || !emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!message || message.trim() === "") {
        alert("Message is required.");
        return;
    }

   
    alert('Feedback submitted successfully!');
});
