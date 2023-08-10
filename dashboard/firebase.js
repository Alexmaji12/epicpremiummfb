

    // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
// import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
// import { getFirestore, collection, getDocs, query, where, doc } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js"


// TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyBH9Eogo0UFXPiHVkr5h63pHYkwsFwQVjs",
    authDomain: "epic-mfb.firebaseapp.com",
    projectId: "epic-mfb",
    storageBucket: "epic-mfb.appspot.com",
    messagingSenderId: "650463990440",
    appId: "1:650463990440:web:23f0d8001611139729289d",
    measurementId: "G-VWM2CTKL21"
};

firebase.initializeApp(firebaseConfig);
  // Initialize Firebase
  const auth = firebase.auth();

  const database = firebase.firestore();

  var userID = firebase.auth().currentUser

  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
        // User is already signed in, redirect to dashboard
       
    userID = user.uid;

    console.log("Logged In");
    console.log(userID);

        // Save authentication state to localStorage
        localStorage.setItem('user', JSON.stringify(user));

     database.collection("users").doc(userID).get().then(function(doc) {
    if(doc.exists) {
        console.log("Document data: ", doc.data());

        // access users data
        var name = doc.data().name;
        var name2 = doc.data().name;
        var name3 = doc.data().name;
        var imageUrl = doc.data().image;
        var balance = doc.data().balance;

        //test
        console.log(name, imageUrl, balance);

        var username = document.getElementById('user-name');
if (username !== null) {
  username.innerText = name;
}

// dashboard issue of not displaying single user name variable to multiple tag, needs an extra 1 and 2 username variable
var username2 = document.getElementById('user-name-2');
if (username2 !== null) {
  username2.innerText = name2;
}

var username3 = document.getElementById('user-name-3');
if (username3 !== null) {
  username3.innerText = name3;
}

var userbalance = document.getElementById('user-balance');
if(userbalance !== null) {
  userbalance.innerText = balance
}

var userbalance = document.getElementById('user-balance-2');
if(userbalance !== null) {
  userbalance.innerText = balance
}

var userImage = document.getElementById('user-image-url');
if (userImage !== null) {
  userImage.src = imageUrl;
}
       

    } else {
    console.log("nothing here")
  }
    
}).catch(function(error) {
    console.log("Error getting document:", error)
}); 


 document.getElementById('signout').addEventListener('click', function(){
  auth.signOut().then(() => {
    console.log("User signed out successfully.");
    localStorage.removeItem('user'); // Remove auth state from storage
    window.location = "form-index.html";
  }).catch(error => {
    console.error("Error signing out: ", error);
  });

});

return;
    
  } else if (window.location.pathname !== 'form-index.html') {
    // Check if user authentication state is saved in localStorage
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      window.location.pathname = "dashboard.html";
    } else {
      window.location.pathname = "../form-index.html";
    }
   
  }

})
