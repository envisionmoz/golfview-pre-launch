import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCCpGY1LWaj1ya3erYBnS64ZKZLPQ45SbA",
  authDomain: "golf-view-newsletter.firebaseapp.com",
  projectId: "golf-view-newsletter",
  storageBucket: "golf-view-newsletter.appspot.com",
  messagingSenderId: "961270128846",
  appId: "1:961270128846:web:96c67cf950bbf25d83309f",
  measurementId: "G-MTLHMHJCML",
};

firebase.initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get reference to the form
const notificationForm = document.getElementById("notificationForm");

// Add submit event listener to the form
notificationForm.addEventListener("submit", async function (e) {
  e.preventDefault(); // Prevent default form submission

  // Get the email input value
  const emailInput = document.getElementById("email");
  const email = emailInput.value;

  try {
    // Store email in Firestore
    const docRef = await addDoc(collection(db, "email_list"), {
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
