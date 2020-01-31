let db = firebase.database();
let auth = firebase.auth();
let savebtn = document.getElementById("save");

let d = new Date();
let curYear = d.getFullYear();

savebtn.addEventListener('click',function(){save()});

function save(){
    console.log("hi");
    db.ref(`CODECAMP/${curYear}/${document.getElementById("name").value}`).set({
      name: document.getElementById("name").value,
      birthday: document.getElementById("birthday").value,
      grade: document.getElementById("grade").value
    })
}