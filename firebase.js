// main.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';
import { getFirestore, collection, addDoc, serverTimestamp } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js';
const firebaseConfig = {
  apiKey: "AIzaSyDtZFHrMNSQIgR095VRVayng4HdWFeB1u4",
  authDomain: "teste-gv-pre.firebaseapp.com",
  projectId: "teste-gv-pre",
  storageBucket: "teste-gv-pre.appspot.com",
  messagingSenderId: "108479622880",
  appId: "1:108479622880:web:18c5404fbe5b06e2baea85",
  measurementId: "G-Z7VJCRKEQ3"
};

  // Initialize Firebase
  let app = initializeApp(firebaseConfig);
  let db = getFirestore(app);
console.log("Initializing Firebase its running");
  // Get reference to the form
  let notificationForm = document.getElementById("notificationForm");

  // Add submit event listener to the form
  notificationForm.addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent default form submission

    // Get the email input value
    let emailInput = document.getElementById("email");
    let email = emailInput.value;
console.log(email);
    try {
      // Store email in Firestore
      let docRef = await addDoc(collection(db, "email_list"), {
        email: email,
        timestamp: serverTimestamp(),
      });
      console.log("Email successfully stored with ID: ", docRef.id);
      // You can add any success message or redirect user to a thank you page here

      // Reset the form after submission
      notificationForm.reset();
    } catch (error) {
      console.error("Error storing email: ", error);
    }
  });
