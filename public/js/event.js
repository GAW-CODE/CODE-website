let db = firebase.database();
let auth = firebase.auth();
let workspace = document.getElementById("workspace");


let d = new Date();
let curYear = d.getFullYear();
let curMonth = d.getMonth(); //starts at 0

//Event
db.ref(`event/`).once('value').then(snapshot =>{
  let eventCache = snapshot.val();
  let cacheArray = [];
  for (let key in eventCache) {
    cacheArray.push(eventCache[key]);
  }
  console.log(cacheArray);
  for(let i = 0; i < cacheArray.length; i++){
    let event = `<div class="event">
        <div class="content">
          <div class="title">${cacheArray[i].title.replace('_'," ")}</div>
          <div class="date">Date: ${cacheArray[i].date}</div>
          <div class="time">Time: ${cacheArray[i].time}</div>
          <div class="location">Location: ${cacheArray[i].location}</div>
          <div class="desc">${cacheArray[i].desc}</div>
          <div class = "signUp" onClick="signUp(this)" id="${cacheArray[i].title}">Sign Up</button>
        </div>
      </div>`
    workspace.innerHTML+=event;
  }
  setUpModal();
})




//signUp
let curEvent;

function signUp(x){
  curEvent = x.id;
}
function setUpModal(){
  let signUpBtn = document.getElementsByClassName("signUp");
  let signUpModal = document.getElementById("signUpModal");
  for(let i = 0; i<signUpBtn.length; i++){
    signUpBtn[i].addEventListener('click',function(){
      signUpModal.style.display="block";
      console.log("done")
    });
    console.log(signUpBtn[i]);
  }
}
window.addEventListener("click", function(event){
  if(event.target == signUpModal){
   signUpModal.style.display="none";
  }
 });

function save(){
  if(checkInput()){
    console.log("hi");
    db.ref(`eventResponse/${curEvent}/${document.getElementById("firstName").value}${document.getElementById("lastName").value}`).set({
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      email: document.getElementById("email").value,
      phoneNumber: document.getElementById("phoneNumber").value,
      grade: document.getElementById("grade").value
    })
    // db.ref(`event/TechJam`).set({
    //   title: "TechJam",
    //   date: "Tue, March 24, 2020",
    //   time: "9:00AM-5:00PM PST",
    //   location: "16455 Wedgeworth Dr.",
    //   desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo accusamus reiciendis sapiente beatae, praesentium officia! Officiis vitae ea perspiciatis possimus dolore, incidunt modi, libero impedit sed obcaecati velit quo praesentium?"
    // })
    signUpModal.style.display="none";
  }
}

function checkInput(){
  arr=[document.getElementById("firstName").value, document.getElementById("lastName").value, document.getElementById("email").value, 
    document.getElementById("phoneNumber").value]
  for(let i=0; i<arr.length; i++){
    if(arr[i]==""){
      alert("Please fill out all the fills");
      return false;
    }
  }
  return true;
}