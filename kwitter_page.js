var firebaseConfig = {
    apiKey: "AIzaSyBQyjrjTsIQsGMGcgu-cr1HjszcHi5ZWMk",
    authDomain: "testkwitter.firebaseapp.com",
    databaseURL: "https://testkwitter.firebaseio.com",
    projectId: "testkwitter",
    storageBucket: "testkwitter.appspot.com",
    messagingSenderId: "624653701634",
    appId: "1:624653701634:web:2cb9a8bd873f17d92d8d1b"
  };
  
  
    firebase.initializeApp(firebaseConfig);
      user_name = localStorage.getItem("user_name");
      room_name = localStorage.getItem("room_name");
  
  function send()
  {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
     });
  
    document.getElementById("msg").value = "";
  }