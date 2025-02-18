document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting
  
    // Clear previous errors
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
  
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
  
    let valid = true;
  
    // Name validation (required)
    if (name === '') {
      document.getElementById('nameError').textContent = 'Name is required.';
      valid = false;
    }
  
    // Email validation (required and format)
    if (email === '') {
      document.getElementById('emailError').textContent = 'Email is required.';
      valid = false;
    } else if (!validateEmail(email)) {
      document.getElementById('emailError').textContent = 'Please enter a valid email.';
      valid = false;
    }
  
    // Password validation (required and minimum length)
    if (password === '') {
      document.getElementById('passwordError').textContent = 'Password is required.';
      valid = false;
    } else if (password.length < 6) {
      document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
      valid = false;
    }
  
    // If everything is valid, display a success message
    if (valid) {
      alert('Form submitted successfully!');
      document.getElementById('signupForm').reset(); // Clear the form
    }
  });
  
  // Function to validate email format using regular expression
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  