//FIREBASE SDK
var config = {
  apiKey: "AIzaSyCQK593LJMXaV8N-FYd-5tTFJCDzq2iATQ",
  authDomain: "delicon-79386.firebaseapp.com",
  databaseURL: "https://delicon-79386.firebaseio.com",
  projectId: "delicon-79386",
  storageBucket: "delicon-79386.appspot.com",
  messagingSenderId: "176262814549",
  appId: "1:176262814549:web:ad056b939873098e3daddc",
  measurementId: "G-S70PDDK7SC"
};

firebase.initializeApp(config);

//READ USER DATA FROM FIREBASE 
const dbRef = firebase.database().ref();
function addUserBtnClicked() {
	alert("Reserved Successfully");
	const usersRef = dbRef.child('users');

	const addUserInputsUI = document.getElementsByClassName("user-input");

 	// this object will hold the new user information
    let newUser = {};

    // loop through View to get the data for the model 
    for (let i = 0, len = addUserInputsUI.length; i < len; i++) {

        let key = addUserInputsUI[i].getAttribute('data-key');
        let value = addUserInputsUI[i].value;
        newUser[key] = value;
    }

	usersRef.push(newUser)

    
   console.log(myPro)

}


