// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCpGY1LWaj1ya3erYBnS64ZKZLPQ45SbA",
  authDomain: "golf-view-newsletter.firebaseapp.com",
  projectId: "golf-view-newsletter",
  storageBucket: "golf-view-newsletter.appspot.com",
  messagingSenderId: "961270128846",
  appId: "1:961270128846:web:96c67cf950bbf25d83309f",
  measurementId: "G-MTLHMHJCML"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// Get reference to the form
const notificationForm = document.getElementById('notificationForm');

// Add submit event listener to the form
notificationForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission
    
    // Get the email input value
    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    // Store email in Firestore
    db.collection('emails').add({
        email: email,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(function(docRef) {
        console.log('Email successfully stored with ID: ', docRef.id);
        // You can add any success message or redirect user to a thank you page here
    })
    .catch(function(error) {
        console.error('Error storing email: ', error);
    });

    // Reset the form after submission
    notificationForm.reset();
});