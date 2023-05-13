// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  // Add your Firebase configuration here
  apiKey: "AIzaSyDicINUX1Jx96xFFnfLx1SNwmUVtrDkiuI",
  authDomain: "mbmite-f8ada.firebaseapp.com",
  databaseURL: "https://mbmite-f8ada-default-rtdb.firebaseio.com",
  projectId: "mbmite-f8ada",
  storageBucket: "mbmite-f8ada.appspot.com",
  messagingSenderId: "649145846639",
  appId: "1:649145846639:web:988e18a220a59e0b64769a",
  measurementId: "G-VR58MDNG01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();



// db
const db = getFirestore(app);



function storeFormData(event) {
    event.preventDefault();
  
    // Get form values
    const username = document.getElementById("username").value;
    const branch = document.getElementById("Branch").value;
    const pYear = document.getElementById("P-year").value;
    const linkedin = document.getElementById("Linkedin").value;

      // Validate LinkedIn URL
      const linkedinRegex = /^https:\/\/www.linkedin.com\/in\/[a-z0-9_-]+\/?$/i;
      if (!linkedinRegex.test(linkedin)) {
        alert("Please enter a valid LinkedIn URL");
        return;
      }
    try {
      addDoc(collection(db, "users"), {
        username: username,
        branch: branch,
        pYear: pYear,
        linkedin: linkedin
      })
        .then(() => {
          alert("Form data stored successfully");
          document.getElementById("info-form").reset(); // Reset the form
          window.location.href = "index.html";
          
          retrieveData();
          // auth.signOut(); 
          // Call the retrieveData function to update the content in the box
          
        })
        .catch((error) => {
          console.log("Error storing form data: ", error);
        });
    } catch (error) {
      console.log("Error storing form data: ", error);
    }
  
  };

  // function validateLinkedIn(url) {
  //   // Regular expression pattern for validating LinkedIn URL
  //   const pattern = /^(https?:\/\/)?(www\.)?linkedin\.com\/(in|profile\/)?[a-zA-Z0-9_-]+\/?$/i;
  //   return pattern.test(url);
  // }
  // Add event listener to the form submit event
  // document.getElementById("info-form").addEventListener("submit", storeFormData);
  document.getElementById("info-form").addEventListener("submit", storeFormData);

  
  