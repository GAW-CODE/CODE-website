const auth = firebase.auth();
const db = firebase.database();

let email = prompt("Email");
let pw = prompt("Password");
let ref = db.ref("applications")

auth.signInWithEmailAndPassword(email, pw).then(() => {
    console.log("cool");
    pull();
}).catch((err) => {
    alert("wrong login");
    console.log(err);
})

let data;

function pull() {
    ref.on("value", (snapshot) => {
        data = snapshot.val();
        insertData(data);
    })
}

function insertData(data) {

}

// function createbox(data) {
//     let newdiv = document.createElement('div');
//     newdiv.id = "newdiv";
//     newdiv.innerHTML = data;
//     document.getElementsByTagName('body')[0].appendChild(newdiv);
// }