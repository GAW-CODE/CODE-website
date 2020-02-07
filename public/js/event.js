let db = firebase.database();
let auth = firebase.auth();
let submitbtn = document.getElementById("submit");

let d = new Date();
let curYear = d.getFullYear();

submitbtn.addEventListener('click',function(){save()});

function save(){
    console.log("hi");
    db.ref(`CODECAMP/${curYear}/${document.getElementById("firstName").value}${document.getElementById("lastName").value}`).set({
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      email: document.getElementById("email").value,
      phoneNumber: document.getElementById("phoneNumber").value,
      grade: document.getElementById("grade").value
    })
}