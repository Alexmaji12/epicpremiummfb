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
  var database = firebase.firestore();
  var auth = firebase.auth();