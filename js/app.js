(function(){
  
  const onfig = {
    apiKey: "AIzaSyDT2zBpnJtzvLj9iSuOW1kP2ODTdxGa7vg",
    authDomain: "autenticacion-4c88d.firebaseapp.com",
    databaseURL: "https://autenticacion-4c88d.firebaseio.com",
    projectId: "autenticacion-4c88d",
    storageBucket: "autenticacion-4c88d.appspot.com",
    messagingSenderId: "283555848226",
    appId: "1:283555848226:web:0c04230104104ffcb32a7b"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  //obtenr elementos 
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnlogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');

  //añadir evento login
  btnLogin.addEventListener('click', e =>{
 const email = txtEmail.value;
 const pass = txtPassword.value;
 const auth = firebase.auth();
 //sign in 
 const promise = auth.SignInWithEmailAndPassword(email,pass);
 promise.catch(e => console.log(e.message));
  });
   //añadir evento signUp
  btnLogin.addEventListener('click', e =>{
    //obtener email y pass
    //Todo:comprobar que el email sea real
 const email = txtEmail.value;
 const pass = txtPassword.value;
 const auth = firebase.auth();
 //sign in 
 const promise = auth.CreateUserWithEmailAndPassword(email,pass);
 promise.catch(e => console.log(e.message));
  });
 btnLogout.addEventListener('click',e =>{
  firebase.auth().signOut();
 });


 //añadir un listener en tiempo real 
 firebase.aut().onAuthStateChanged(firebase =>{
if (firebaseUser) {
  console.log(firebaseUser);
  btnLogout.classList.remove('hide');

}else{
  console.log('no logueado');
  btnLogout.classList.add('hide');
 

}

});

}());