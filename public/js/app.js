let db = firebase.database();
let auth = firebase.auth();
let nameIn = document.getElementById("name");
let submitBtn = document.getElementById("submitBtn");
let userId;

firebase.auth().onAuthStateChanged(function (user) { //waits until current user is fully initialized, before trying to capture user ID
    if (user) { //tests to make sure current user is not null
        console.log("user successful!!");
        userId = firebase.auth().currentUser.uid; //get the current user's id
        console.log(userId);
    }
})

submitBtn.addEventListener('click', function () {
    save()
});

function save() {
    db.ref(`users/${userId}`).set({
        name: prompt("Yo")
    })
}