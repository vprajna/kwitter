var firebaseConfig = {
    apiKey: "AIzaSyCLLxeIesrnUkrO81vPuxivL6sZZJb3A08",
    authDomain: "kwitter-19afd.firebaseapp.com",
    databaseURL: "https://kwitter-19afd-default-rtdb.firebaseio.com",
    projectId: "kwitter-19afd",
    storageBucket: "kwitter-19afd.appspot.com",
    messagingSenderId: "682342181339",
    appId: "1:682342181339:web:d99cd4fa45e37b00815ffe",
    measurementId: "G-QEJ3P3D6QM",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var username=localStorage.getItem("username");
  var roomname=localStorage.getItem("roomname");

  function logout(){
     localStorage.removeItem("username");
     localStorage.removeItem("roomname");
     window.location="index.html";
  }