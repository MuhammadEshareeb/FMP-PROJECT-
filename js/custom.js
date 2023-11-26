  var firebaseConfig = {
    apiKey: "AIzaSyA1LYcXmqJelBw0SpfaaW3W175JLtcmwEI",
    authDomain: "fmp-project-b98b7.firebaseapp.com",
    databaseURL: "https://fmp-project-b98b7-default-rtdb.firebaseio.com",
    projectId: "fmp-project-b98b7",
    storageBucket: "fmp-project-b98b7.appspot.com",
    messagingSenderId: "718825121089",
    appId: "1:718825121089:web:d89a3b15dec44b9414edc0"
  };

  // Initialize Firebase
  var firebase = firebase.initializeApp(firebaseConfig);
console.log(firebase);
console.log(firebase.database);
// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        }
    }
});

/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
  var database = firebase.database();

  // Function to handle form submission
  function submitForm() {
    var fullName = document.querySelector('input[placeholder="Full Name"]').value;
    var email = document.querySelector('input[placeholder="Email"]').value;
    var phoneNumber = document.querySelector('input[placeholder="Phone number"]').value;
    var message = document.querySelector('.message-box').value;

    // Push data to the 'contacts' node in the database
    database.ref('contacts').push({
      fullName: fullName,
      email: email,
      phoneNumber: phoneNumber,
      message: message
    });

    // Clear the form fields after submission (optional)
    document.querySelector('input[placeholder="Full Name"]').value = '';
    document.querySelector('input[placeholder="Email"]').value = '';
    document.querySelector('input[placeholder="Phone number"]').value = '';
    document.querySelector('.message-box').value = '';
  }
