const auth = firebase.auth();
const db = firebase.database();

auth.createUserWithEmailAndPasword().then(() => {

})

let email = prompt("Email");
let pw = prompt("Password");

auth.signInWithEmailAndPassword(email, pw).then(() => {
    console.log("cool");
}).catch((err) => {
    alert("wrong login");
})