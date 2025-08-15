function showForm(role) {
  const customerForm = document.getElementById('customerForm');
  const farmerForm = document.getElementById('farmerForm');
  const customerBtn = document.getElementById('customerBtn');
  const farmerBtn = document.getElementById('farmerBtn');

  if (role === 'customer') {
    customerForm.classList.remove('hidden');
    farmerForm.classList.add('hidden');
    customerBtn.classList.add('active');
    farmerBtn.classList.remove('active');
  } else {
    farmerForm.classList.remove('hidden');
    customerForm.classList.add('hidden');
    farmerBtn.classList.add('active');
    customerBtn.classList.remove('active');
  }
}

function registerCustomer() {
  const username = document.getElementById('customer-username').value.trim();
  const email = document.getElementById('customer-email').value.trim();
  const phone = document.getElementById('customer-phone').value.trim();
  const otp = document.getElementById('customer-otp').value.trim();
  const pass = document.getElementById('customer-password').value.trim();
  const confirmPass = document.getElementById('customer-confirm-password').value.trim();

  if (!username || !phone || !otp || !pass || !confirmPass) {
    alert('Please fill all the mandatory fields!');
    return;
  }

  if (!/^\d{10}$/.test(phone)) {
    alert('Please enter a valid 10-digit phone number.');
    return;
  }

  if (otp !== "123456") {
    alert('Invalid OTP!');
    return;
  }

  if (pass !== confirmPass) {
    alert('Passwords do not match!');
    return;
  }

  alert(`Customer Registered Successfully!\nUsername: ${username}\n${email ? "Email: " + email + "\n" : ""}Phone: ${phone}`);
  // Add your backend integration here
}

function registerFarmer() {
  const username = document.getElementById('farmer-username').value.trim();
  const email = document.getElementById('farmer-email').value.trim();
  const farmerId = document.getElementById('farmer-id').value.trim();
  const phone = document.getElementById('farmer-phone').value.trim();
  const pass = document.getElementById('farmer-password').value.trim();
  const confirmPass = document.getElementById('farmer-confirm-password').value.trim();

  if (!username || !farmerId || !phone || !pass || !confirmPass) {
    alert('Please fill all the mandatory fields!');
    return;
  }

  if (!/^\d{10}$/.test(phone)) {
    alert('Please enter a valid 10-digit phone number.');
    return;
  }

  if (pass !== confirmPass) {
    alert('Passwords do not match!');
    return;
  }

  alert(`Farmer Registered Successfully!\nUsername: ${username}\nFarmer ID: ${farmerId}\n${email ? "Email: " + email + "\n" : ""}Phone: ${phone}`);
  // Add your backend integration here
}

// Animate container opacity on load
window.onload = () => {
  document.querySelector('.container').style.opacity = '1';
};


