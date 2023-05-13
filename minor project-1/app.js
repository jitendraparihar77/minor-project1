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

// Signup JS
var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");

window.signup = function (e) {
  e.preventDefault();
  var obj = {
    username: username.value,
    email: email.value,
    password: password.value
  };
  createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function (success) {
      alert("User saved successfully");
    })
    .catch(function (error) {
      alert("User failed to save: " + error);
    });
  console.log(obj);
};

// Login JS
var useremail = document.getElementById("useremail");
var userpassword = document.getElementById("userpassword");

window.login = function (e) {
  e.preventDefault();
  var obj = {
    useremail: useremail.value,
    userpassword: userpassword.value
  };
  signInWithEmailAndPassword(auth, obj.useremail, obj.userpassword)
    .then(function (success) {
      alert("User successfully logged in");
      window.location.href = "insert.html";
    })
    .catch(function (error) {
      alert("User login failed: " + error);
    });
};





// db
const db = getFirestore(app);

// ...

// Function to retrieve data from Firestore
// Function to retrieve data from Firestore
async function retrieveData(branch) {
  const querySnapshot = await getDocs(collection(db, "users"));
  const container = document.querySelector(".container");
  container.innerHTML = "";

  querySnapshot.forEach((doc) => {
    const data = doc.data();

    if (branch.toLowerCase() === "all" || data.branch.toLowerCase() === branch.toLowerCase()) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.innerHTML = `
        <p><span>Name:</span>${data.username}</p>
        <p id="branch"><span>Branch:</span>${data.branch}</p>
        <p><span>P-year:</span>${data.pYear}</p>
        <p><span>Linkedin:</span><a href="${data.linkedin}" target="_blank">${data.linkedin}</a></p>
      `;
      container.appendChild(box);
    }
  });
}

const branchLinks = document.querySelectorAll('.dep_item a');

branchLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const branch = link.id;
    retrieveData(branch);
  });
});

// Call the retrieveData function initially with the default branch
retrieveData("all");





// Call the retrieveData function initially to populate the box with existing data

