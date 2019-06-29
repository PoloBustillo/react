

export const firebaseConfig = {
 apiKey: process.env.REACT_APP_APIKEY,
 authDomain: process.env.REACT_APP_AUTHDOMAAIN,
 databaseURL: process.env.REACT_APP_DB,
 projectId: process.env.REACT_APP_PROYID,
 messagingSenderId: process.env.REACT_APP_MSGID,
 appId: process.env.REACT_APP_APPID
};

export const errorCodes = {
  'auth/email-already-in-use':'Email ya fue usado para crear usuario.',
  'auth/invalid-email': 'Email no es valido.',
  'auth/operation-not-allowed': 'Email esta deshabilitado.',
  'auth/weak-password': 'Password debe tener al menos 6 letras.',
  'auth/network-request-failed': 'Por favor intentelo de nuevo, problemas de conexion.',
  'auth/user-disabled': 'Usuario no esta habilitado',
  'auth/user-not-found': 'Usuario no encontrado',
  'auth/wrong-password': 'Password no coincide',
  'auth/popup-closed-by-user': 'Por favor no cierres la ventana de FB',
  'auth/popup-blocked': 'El popup de FB esta bloqueado por tu browser',
  'auth/cancelled-popup-request': 'El popup fue cerrado antes de acceder'
};

class Firebase {

 doSendEmailVerification=(cred)=>{
   cred.user.sendEmailVerification();
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
