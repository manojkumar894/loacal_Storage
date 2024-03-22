// Function to display user information
function displayUserInfo(name, phone, village, city) {
    document.getElementById("userName").textContent = name;
    document.getElementById("userPhone").textContent = phone;
    document.getElementById("userVillage").textContent = village;
    document.getElementById("userCity").textContent = city;
  }
  
  // Function to handle form submission
  function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Get user input values
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const village = document.getElementById("village").value;
    const city = document.getElementById("city").value;
  
    // Store user data in Local Storage
    localStorage.setItem("userName", name);
    localStorage.setItem("userPhone", phone);
    localStorage.setItem("userVillage", village);
    localStorage.setItem("userCity", city);
  
    // Display user information
    displayUserInfo(name, phone, village, city);
  }
  
  // Display user information from Local Storage on page load
  window.onload = function() {
    const name = localStorage.getItem("userName");
    const phone = localStorage.getItem("userPhone");
    const village = localStorage.getItem("userVillage");
    const city = localStorage.getItem("userCity");
  
    if (name && phone && village && city) {
      displayUserInfo(name, phone, village, city);
    }
  }
  
  // Event listener for form submission
  document.getElementById("userForm").addEventListener("submit", handleFormSubmit);
  