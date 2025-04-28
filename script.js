const form = document.getElementById('registerForm');
const message = document.getElementById('message');
 
form.addEventListener('submit', function(e) {
    e.preventDefault();
 
    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const age = document.getElementById('age').value.trim();
    const phone = document.getElementById('phonenumber').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
 
   
    if (!fullname || !email || !age || !phone || !password || !confirmPassword) {
        message.style.color = 'red';
        message.textContent = 'Please fill all the fields!';
        return;
    }
 
    
    if (password !== confirmPassword) {
        message.style.color = 'red';
        message.textContent = 'Passwords do not match!';
        return;
    }
 
    
    if (isNaN(age) || age < 18 || age > 120) {
        message.style.color = 'red';
        message.textContent = 'Please enter a valid age!';
        return;
    }
 
    
    if (!/^\d{10}$/.test(phone)) {
        message.style.color = 'red';
        message.textContent = 'Please enter a valid 10-digit phone number!';
        return;
    }
 
    
    message.style.color = 'green';
    message.textContent = 'Registration successful!';
    form.reset();
});