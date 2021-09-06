// Your web app's Firebase configuration
var firebaseConfig={
  apiKey: "AIzaSyDl-Jy8oOXqIKVHWr5_SKjt0dwi_jxyAcY",
  authDomain: "class-94-8f3b8.firebaseapp.com",
  databaseURL: "https://class-94-8f3b8-default-rtdb.firebaseio.com",
  projectId: "class-94-8f3b8",
  storageBucket: "class-94-8f3b8.appspot.com",
  messagingSenderId: "1097584527598",
  appId: "1:1097584527598:web:24f972619cec081be9cbff"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var username=localStorage.getItem("user_name");
document.getElementById("user.name").innerHTML ="Welcome "+username+" !";

function addRoom(){
  var room_name=document.getElementById("room_name").value;

  localStorage.setItem("roomname",room_name);

  window.location="kwitter_page.html";

  firebase.database().rel("/").Child(room_name).update({
    purpose:"Adding Room Name"
  });
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
  //Start code

  //End code
  });});}
getData();
