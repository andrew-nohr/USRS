// Google Maps initialization function
function initMap() {
    const mapOptions = {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    };
    const map = new google.maps.Map(document.getElementById("map"), mapOptions);
  }
  
  // Function to handle clicks on the profile image
  function onProfileImageClick() {
    // Add code for handling the dropdown menu
    // with options for dark theme, account settings, customer support, and log out
  }
  
  // Add event listener for the profile image 
  // const profileImage = document.querySelector(".profile-image");
  // profileImage.addEventListener("click", onProfileImageClick);
  
  // Add event listeners for bottom navbar icons
  const bottomNavbarIcons = document.querySelectorAll(".bottom-navbar img");
  bottomNavbarIcons.forEach((icon) => {
    icon.addEventListener("click", (event) => {
      // Add code here to handle the bottom navbar icons' click events
    });
  });
  
  // Initialize the Google Map
  initMap();
  