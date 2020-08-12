  // Your web app's Firebase configuration
  // Initialize Firebase
    var firebaseConfig = {
    apiKey: "AIzaSyCQK593LJMXaV8N-FYd-5tTFJCDzq2iATQ",
    authDomain: "delicon-79386.firebaseapp.com",
    databaseURL: "https://delicon-79386.firebaseio.com",
    projectId: "delicon-79386",
    storageBucket: "delicon-79386.appspot.com",
    messagingSenderId: "176262814549",
    appId: "1:176262814549:web:ad056b939873098e3daddc",
    measurementId: "G-S70PDDK7SC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
	
	function signUp(){
		//alert("SignUp");
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		//alert(email.value);
		const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		console.log("signup");
		alert("Signed Up");
		//reload_page();
	}
	
	
	
	function signIn(){
		
		var email = document.getElementById("email1");
		var password = document.getElementById("password1");
		
		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		//alert("Signedin Successfully");
		
	}
	
	
	function signOut(){
		
		auth.signOut();
		alert("Signed Out");
		
	}
	
	
	
	auth.onAuthStateChanged(function(user){
		
		if(user){
			
			var email = user.email;
			alert("Active User " + email);
			alert("Signed in Successfully");
			
		}else{
			
			alert("No Active User");
			no user is signed in
		}
	});
	
