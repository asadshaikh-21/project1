// Wait until DOM loaded
document.addEventListener('DOMContentLoaded', () => {
  const customerBtn = document.getElementById('customerBtn');
  const farmerBtn = document.getElementById('farmerBtn');
  const customerForm = document.getElementById('customerForm');
  const farmerForm = document.getElementById('farmerForm');

  const loginCustomerBtn = document.getElementById('loginCustomerBtn');
  const loginFarmerBtn = document.getElementById('loginFarmerBtn');

  function showForm(role) {
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

  customerBtn.addEventListener('click', () => showForm('customer'));
  farmerBtn.addEventListener('click', () => showForm('farmer'));

  loginCustomerBtn.addEventListener('click', () => {
    const user = document.getElementById('customer-username').value.trim();
    const pass = document.getElementById('customer-password').value.trim();

    if (user === 'customer' && pass === '1234') {
      window.location.href = 'customer.html';
    } else {
      alert('Invalid Customer Login!');
    }
  });

  loginFarmerBtn.addEventListener('click', () => {
    const user = document.getElementById('farmer-username').value.trim();
    const pass = document.getElementById('farmer-password').value.trim();

    if (user === 'farmer' && pass === '1234') {
      window.location.href = 'farmer.html';
    } else {
      alert('Invalid Farmer Login!');
    }
  });
});


