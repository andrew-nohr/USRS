// Firebase configuration and initialization
var firebaseConfig = {
    apiKey: "AIzaSyBsjXx0ax8Qh3b8_f6PmN0ARHThgXrR6dg",
    authDomain: "usrs-99501.firebaseapp.com",
    projectId: "usrs-99501",
    storageBucket: "usrs-99501.appspot.com",
    messagingSenderId: "410770603376",
    appId: "1:410770603376:web:0b7c2fe48f76b3834923b5",
    measurementId: "G-H970355Y3Z"
  };
  firebase.initializeApp(firebaseConfig);
  
  // Set up Firestore and Auth references
  const db = firebase.firestore();
  const auth = firebase.auth();
  
  // Google Maps initialization function
  function initMap() {
    const mapOptions = {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    };
    const map = new google.maps.Map(document.getElementById("map"), mapOptions);
  }
  

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
  const profileImage = document.querySelector(".profile-image");
  profileImage.addEventListener("click", onProfileImageClick);
  
  // Add event listeners for bottom navbar icons
  const bottomNavbarIcons = document.querySelectorAll(".bottom-navbar img");
  bottomNavbarIcons.forEach((icon) => {
    icon.addEventListener("click", (event) => {
      // Add code here to handle the bottom navbar icons' click events
    });
  });
  