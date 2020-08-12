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

const dbRef = firebase.database().ref();

const usersRef = dbRef.child('users');
const userListUI = document.getElementById("userList");

usersRef.on("child_added", snap => {

	let user = snap.val();

	let $li = document.createElement("li");
	$li.innerHTML = user.name;
	$li.setAttribute("child-key", snap.key);
	$li.addEventListener("click", userClicked)
	userListUI.append($li);

});


function userClicked(e) {

	var userID = e.target.getAttribute("child-key");

	const userRef = dbRef.child('users/' + userID);
	const userDetailUI = document.getElementById("userDetail");

	userDetailUI.innerHTML = ""

	userRef.on("child_added", snap => {


		var $p = document.createElement("p");
		$p.innerHTML = snap.key  + " - " +  snap.val()
		userDetailUI.append($p);


	});

}





const addUserBtnUI = document.getElementById("bookbtn");
alert(addUserBtnUI);
addUserBtnUI.addEventListener("click", addUserBtnClicked);



function addUserBtnClicked() {
    console.log("adduser");
	alert("adduser");
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