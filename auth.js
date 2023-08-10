function initializeApp() {
  
const firebaseConfig = {
    apiKey: "AIzaSyBH9Eogo0UFXPiHVkr5h63pHYkwsFwQVjs",
    authDomain: "epic-mfb.firebaseapp.com",
    projectId: "epic-mfb",
    storageBucket: "epic-mfb.appspot.com",
    messagingSenderId: "650463990440",
    appId: "1:650463990440:web:23f0d8001611139729289d",
    measurementId: "G-VWM2CTKL21"
  };

  //initialize firebase
  firebase.initializeApp(firebaseConfig);
  console.log(firebase)

  const auth = firebase.auth()

  firebase.auth().onAuthStateChanged(function(user) {
    if(user) {
              // Save authentication state to localStorage
              localStorage.setItem('user', JSON.stringify(user));

            window.location.href = 'dashboard/dashboard-index.html';
       return;

    }

  }) 


  // Sign in function
  let loginButton = document.getElementById('login')
  if(loginButton) {
      loginButton.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("Login button clicked");
    var email = document.getElementById("email-field").value
    var password = document.getElementById("password-field").value

    console.log(email)
    console.log(password)
    auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
      var user = userCredential.user;
      console.log("User", user.email);
      // var authToken = "my-auth-token"; // Replace with your own authentication token
      // sessionStorage.setItem("authToken", authToken);
      window.location = "dashboard/dashboard-index.html";
    }).catch((error) => {
      var errorCode = error.errorCode;
      var errorMessage = error.message;
      alert(errorMessage)
    })
  });
  }

}
