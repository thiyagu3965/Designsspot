import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBNtRaq5Ihf7fDNFP3rVrPx29HrmQ2GaZk",
    authDomain: "designsspot-salem.firebaseapp.com",
    projectId: "designsspot-salem",
    storageBucket: "designsspot-salem.appspot.com",
    messagingSenderId: "790785483987",
    appId: "1:790785483987:web:d19d7689d8216e1fe92026"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase