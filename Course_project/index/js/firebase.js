// var firebaseConfig = {
//     apiKey: "AIzaSyDm7ZGtz-eCHYtqBhIq6qD2_yeQJtgb6z0",
//     authDomain: "webaviadatabase.firebaseapp.com",
//     databaseURL: "https://webaviadatabase-default-rtdb.firebaseio.com",
//     projectId: "webaviadatabase",
//     storageBucket: "webaviadatabase.appspot.com",
//     messagingSenderId: "503090993776",
//     appId: "1:503090993776:web:8342826b02f5ef1080f2b5"
//   };
//   // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// // Your web app's Firebase configuration

// $("#submit_register").click(function(){
     
//     var email = $("#email").val();
//     var password = $("#password").val();
    
//     firebase.database().ref("User").push({
//         name: "Hello",
//         id: "1"
//     }).catch(function() {
//         alert("Done")
//     });
//     if(email != ""  && password  != "")
//     {
//         console.log($("#name").val() + $("#second_name").val() + $("#password").val());
        

//         // firebase.database().ref("User").set({
//         //     firstName: $("#name").val(),
//         //     secondName: $("#second_name").val(),
//         //     lastName:  $("#last_name").val(),
//         //     email: $("#email").val(),
//         //     password: $("#password").val()
//         // });
//         // reg.catch(function(error){
//         //         var errorCode = error.code;
//         //         var errorMessage = error.message;
    
//         //         window.alert("Message :" + errorMessage);
//         //     });
//         // alert("You have been registry");

//         // var result = firebase.auth().signWithEmailAndPassword(email, password);
//         // result.catch(function(error){
//         //     var errorCode = error.code;
//         //     var errorMessage = error.message;

//         //     window.alert("Message :" + errorMessage);
//         // });
//     }
//     else{
//         window.alert("Please fill all fields.");
//     }
//   });