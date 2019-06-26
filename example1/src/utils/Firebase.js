import firebase from 'firebase/app';
import 'firebase/auth';

export const firebaseConfig = {
 apiKey: process.env.REACT_APP_APIKEY,
 authDomain: process.env.REACT_APP_AUTHDOMAAIN,
 databaseURL: process.env.REACT_APP_DB,
 projectId: process.env.REACT_APP_PROYID,
 messagingSenderId: process.env.REACT_APP_MSGID,
 appId: process.env.REACT_APP_APPID
};

class Firebase {
  constructor(){
    this.auth = firebase.auth();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>{
   this.auth.createUserWithEmailAndPassword(email, password)
   .then((cred)=>{
     cred.user.sendEmailVerification().then(() => {
       return {msg:'Success'};
     },
     (error) =>{
       return {msg:'ErrorSendEmail'};
     });
   },
   (error) =>{
     return {msg:error.code}
   });



 }

  doAdminVerification= () =>{
    this.auth.currentUser.getIdTokenResult(true)
    .then((idTokenResult) => {
       console.log(idTokenResult.claims.admin);
       console.log(idTokenResult.claims.isAdmin);
    })
    .catch((error) => {
      return {msg:error.code}
    });
  }
  doEmailVerification= ()=>{
    this.auth.onAuthStateChanged(function(user) {
      if (user.emailVerified) {
        return true;
      }
      else {
        return false;
      }
    });
  }

  doSignInWithEmailAndPassword = (email, password) =>
   this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
   this.auth.currentUser.updatePassword(password);
  }

export default Firebase;
