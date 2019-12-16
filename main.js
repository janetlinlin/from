// Paste the code from Firebase 
var config = {
 apiKey: "AIzaSyCQQczC4lI8F8TLPmWSKt-bYJkX-tUtQ7c",
    authDomain: "ncut-31c7d.firebaseapp.com",
    databaseURL: "https://ncut-31c7d.firebaseio.com",
    projectId: "ncut-31c7d",
    storageBucket: "ncut-31c7d.appspot.com",
    messagingSenderId: "1058006287209"
   
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('contact77');

$('#contactForm2').submit(function (e) {
  e.preventDefault();

  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: $('.name').val(),
	address: $('.add99').val(),
    sex: $('.sex99').val(),
    email: $('.email').val(),
    product1: $('.product1').val(),
    product2: $('.product2').val(),
    product3: $('.product3').val(),
    select: $('.select99').val(),
	

  });

  $('.success-message').show();

  $('#contactForm2')[0].reset();
});