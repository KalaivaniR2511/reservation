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
const usersRef = dbRef.child('users');

// usersRef.on("child_added", snap => {

	// let user = snap.val();

	// let $li = document.createElement("li");
	// $li.innerHTML = user.name;
	// $li.setAttribute("child-key", snap.key);
	// $li.addEventListener("click", userClicked)
	// userListUI.append($li);

// });


readUserData(); 



function readUserData() {

	const userListUI = document.getElementById("user-list");

	usersRef.on("value", snap => {

		userListUI.innerHTML = ""

		snap.forEach(childSnap => {

			let key = childSnap.key,
				value = childSnap.val()
  			
			let $li = document.createElement("li");

			// edit icon
			let editIconUI = document.createElement("span");
			editIconUI.class = "edit-user";
			editIconUI.innerHTML = " ✎";
			editIconUI.setAttribute("userid", key);
			editIconUI.addEventListener("click", editButtonClicked)

			// delete icon
			let deleteIconUI = document.createElement("span");
			deleteIconUI.class = "delete-user";
			deleteIconUI.innerHTML = " ☓";
			deleteIconUI.setAttribute("userid", key);
			deleteIconUI.addEventListener("click", deleteButtonClicked)
			
			$li.innerHTML = value.name;
			$li.append(editIconUI);
			$li.append(deleteIconUI);

			$li.setAttribute("user-key", key);
			$li.addEventListener("click", userClicked)
			userListUI.append($li);

 		});


	})

}



function userClicked(e) {


		var userID = e.target.getAttribute("user-key");

		const userRef = dbRef.child('users/' + userID);
		const userDetailUI = document.getElementById("user-detail");

		userRef.on("value", snap => {

			userDetailUI.innerHTML = ""

			snap.forEach(childSnap => {
				var $p = document.createElement("p");
				$p.innerHTML = childSnap.key  + " - " +  childSnap.val();
				userDetailUI.append($p);
			})

		});
	

}
function editButtonClicked(e){
}


function deleteButtonClicked(e) {

		e.stopPropagation();

		var userID = e.target.getAttribute("userid");

		const userRef = dbRef.child('users/' + userID);
		
		userRef.remove();

}






