// import { db, firebaseApp } from '~/contentScripts/firebase/firebase';
// import { getAuth } from 'firebase/auth';

// //Service Worker Catch Any Errors...
// try {
//   //Import Firebase Local Scripts

//   // Your web app's Firebase configuration

//   // Initialize Firebase
//   // firebase.initializeApp(firebaseConfig);

//   // var db = firebase.database();
//   //Add Auth to storage
//   const auth = getAuth();
//   var user = auth.currentUser;

//   // currentUser;
//   console.log(user);
//   if (user) {
//     //user is signed in
//     localStorage.setItem('authInfo', JSON.stringify(user));
//   } else {
//     //user is not signed in
//     localStorage.set('authInfo', false);
//   }

//   /*
//   Response Calls
//     resp({type: "result", status: "success", data: doc.data(), request: msg});
//     resp({type: "result", status: "error", data: error, request: msg});
//   */
//   browser.runtime.onMessage.addListener((msg: any, sender: any, resp: any) => {
//     if (msg.command == 'user-auth') {
//       auth.onAuthStateChanged(function (user) {
//         if (user) {
//           // User is signed in.
//           // chrome.storage.local.set({ authInfo: user });
//           localStorage.setItem('authInfo', JSON.stringify(user));

//           const videoNotesRef = doc(db, 'notes', 'id-' + getUTVideoIdFromUrl());

//             .ref('/users/' + user.uid)
//             .once('value')
//             .then(function (snapshot) {
//               console.log(snapshot.val());
//               resp({
//                 type: 'result',
//                 status: 'success',
//                 data: user,
//                 userObj: snapshot.val(),
//               });
//             })
//             .catch((result) => {
//               chrome.storage.local.set({ authInfo: false });
//               resp({ type: 'result', status: 'error', data: false });
//             });
//         } else {
//           // No user is signed in.
//           chrome.storage.local.set({ authInfo: false });
//           resp({ type: 'result', status: 'error', data: false });
//         }
//       });
//     }

//     //Auth
//     //logout
//     if (msg.command == 'auth-logout') {
//       firebase
//         .auth()
//         .signOut()
//         .then(
//           function () {
//             //user logged out...
//             chrome.storage.local.set({ authInfo: false });
//             resp({ type: 'result', status: 'success', data: false });
//           },
//           function (error) {
//             //logout error....
//             resp({
//               type: 'result',
//               status: 'error',
//               data: false,
//               message: error,
//             });
//           }
//         );
//     }
//     //Login
//     if (msg.command == 'auth-login') {
//       //login user
//       firebase
//         .auth()
//         .signInWithEmailAndPassword(msg.e, msg.p)
//         .catch(function (error) {
//           if (error) {
//             //return error msg...
//             chrome.storage.local.set({ authInfo: false });
//             resp({ type: 'result', status: 'error', data: false });
//           }
//         });
//       firebase.auth().onAuthStateChanged(function (user) {
//         if (user) {
//           //return success user objct...
//           chrome.storage.local.set({ authInfo: user });
//           firebase
//             .database()
//             .ref('/users/' + user.uid)
//             .once('value')
//             .then(function (snapshot) {
//               resp({
//                 type: 'result',
//                 status: 'success',
//                 data: user,
//                 userObj: snapshot.val(),
//               });
//             })
//             .catch((result) => {
//               chrome.storage.local.set({ authInfo: false });
//               resp({ type: 'result', status: 'error', data: false });
//             });
//         }
//       });
//     }
//     //Sign Up
//     if (msg.command == 'auth-signup') {
//       //create user
//       ///get user id
//       //make call to lambda
//       chrome.storage.local.set({ authInfo: false });
//       firebase.auth().signOut();
//       firebase
//         .auth()
//         .createUserWithEmailAndPassword(msg.e, msg.p)
//         .catch(function (error) {
//           // Handle Errors here.
//           chrome.storage.local.set({ authInfo: false }); // clear any current session
//           var errorCode = error.code;
//           var errorMessage = error.message;
//           resp({
//             type: 'signup',
//             status: 'error',
//             data: false,
//             message: error,
//           });
//         });
//       //complete payment and create user object into database with new uid
//       firebase.auth().onAuthStateChanged(function (user) {
//         if (user) {
//           //user created and logged in ...
//           //build url...
//           var urlAWS = 'https://ENTER-YOUR-LAMBA-URL-HERE?stripe=true';
//           urlAWS += '&uid=' + user.uid;
//           urlAWS += '&email=' + msg.e;
//           urlAWS += '&token=' + msg.tokenId;

//           chrome.storage.local.set({ authInfo: user });
//           //console.log('make call to lambda:', urlAWS);
//           try {
//             //catch any errors
//             fetch(urlAWS)
//               .then((response) => {
//                 return response.json(); //convert to json for response...
//               })
//               .then((res) => {
//                 //update and create user obj
//                 firebase
//                   .database()
//                   .ref('/users/' + user.uid)
//                   .set({ stripeId: res });
//                 //success / update user / and return
//                 firebase
//                   .database()
//                   .ref('/users/' + user.uid)
//                   .once('value')
//                   .then(function (snapshot) {
//                     resp({
//                       type: 'result',
//                       status: 'success',
//                       data: user,
//                       userObj: snapshot.val(),
//                     });
//                   })
//                   .catch((result) => {
//                     chrome.storage.local.set({ authInfo: false });
//                     resp({ type: 'result', status: 'error', data: false });
//                   });
//               })
//               .catch((error) => {
//                 console.log(error, 'error with payment?');
//                 chrome.storage.local.set({ authInfo: false });
//                 resp({ type: 'result', status: 'error', data: false });
//               });
//           } catch (e) {
//             console.log(error, 'error with payment?');
//             chrome.storage.local.set({ authInfo: false });
//             resp({ type: 'result', status: 'error', data: false });
//           }
//         }
//       });
//     }
//     return true;
//   });
// } catch (e) {
//   //error
//   console.log(e);
// }
