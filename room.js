
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBP7Y9jI-WExsrLmjS3gjMa-KBCr7S_bBY",
      authDomain: "kwitter-40595.firebaseapp.com",
      databaseURL: "https://kwitter-40595-default-rtdb.firebaseio.com",
      projectId: "kwitter-40595",
      storageBucket: "kwitter-40595.appspot.com",
      messagingSenderId: "52533284735",
      appId: "1:52533284735:web:27f94422e0bffc1d49944a"
    };
  
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name; 

  function addRoom()
{
    room_name = document.getElementById("room_name").value ;
    firebase.database().ref("/").child(room_name).update({
        purpose : "Adding Room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room-name : " + Room_names);
row = "<div class='room_name' id = " +Room_names + " onclick ='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row ;  
      //End code
      });});}
getData();
function  redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location= "kwitter_page.html";
      
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}