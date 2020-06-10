//FE STUFF AND SOME FUNCTIONALITY IDK THIS IS BASICALLY FOR STUFF I CAN'T DO WITH HTML AND CSS —Brendan
String.prototype.removeExerpt = (str, ex) =>{
  return str.substring(0, str.indexOf(ex)) + str.substring(str.indexOf(ex) + ex.length + 1, str.length);
} // don't touch pls
let list = [];
function createSides(data, a, r){
  sideFill(data, a, r);
  document.getElementsByClassName("sideItem")[0].classList += " firstItem";
  document.getElementsByClassName("indicator")[0].innerHTML = (data.length) + " / "+(data.length + a.length + r.length)+ " Applicants Left";
}
//Generates in side bar data, applicants GMAIL is showcased.
function accept(done){
  //finding index of the applicant's individual HTML element in the list array
  var gmail = done.gmail;
  var a;
  for(var i = 0; i < list.length; i++){
    if(list[i].innerHTML == gmail){
      a = i;
    }
  }
  for(var i =0; i < signups.length; i++){
    if(signups[i].innerHTML == gmail){
      signups.splice(i, 1);
    }
  }
  accepted.push(done);
  done.acceptedTEMP = true;
  var str = list[a].classList
  if(list[a].classList.contains("notAccepted")){
    list[a].classList = list[a].classList.removeExerpt(list[a].classList, "notAccepted");
  }
  list[a].classList += " acceptedStudent";
  console.log("hi i exist");
  update(signups, accEmails, rejEmails);
}
function update(onTryouts){
  var length = document.getElementsByClassName("sideItem").length;
  for(var i = 1; i < length; i++){
      document.getElementById("sideBar").removeChild(document.getElementsByClassName("sideItem")[1]);
  }
  sideFill(onTryouts);
  document.getElementsByClassName("indicator")[0].innerHTML = (nullApplicants.length) + " / "+(applicants.length)+ " Applicants Left";
}
function sideFill(onTryouts){
  for(var i = 0; i < signups.length; i++){
    var x = document.createElement("div");
    x.className = "sideItem";
    x.innerHTML = signups[i];
    list.push(x);
    document.getElementById("sideBar").appendChild(x);
  }for(var i = 0; i < accepted.length; i++){
    var x = document.createElement("div");
    x.className = "sideItem";
    x.classList += " acceptedStudent";
    x.innerHTML = accEmails[i];
    list.push(x);
    document.getElementById("sideBar").appendChild(x);
  }for(var i = 0; i < rejected.length; i++){
    var x = document.createElement("div");
    x.className = "sideItem";
    x.classList += " rejectedStudent";
    x.innerHTML = rejEmails[i];
    list.push(x);
    document.getElementById("sideBar").appendChild(x);
  }
}
//Pass in the applicant's object, ty.

//An applicant is now done
/*Working on:
   -creating an email char. limit for display
   -Making an indicator for which applicants are finished
     -Making an updator function for display
  -Making an update() function to update the # of applicants left
*/
function filter(){
  signups = [];
  accEmails = [];
  rejEmails = [];
  accepted = [];
  rejected = [];
  applicants.forEach((e)=>{
    if(e.acceptedTEMP!==undefined){
      if(e.acceptedTEMP){
        accepted.push(e);
        var a = (e.gmail.length > 14)?"...":"";
        accEmails.push((e.gmail).substring(0,14) +a);
      }else{
        rejected.push(e);
        var a = (e.gmail.length > 14)?"...":"";
        rejEmails.push((e.gmail).substring(0,14) +a);
      }
    }else{
      nullApplicants.push(e);
      var a = (e.gmail.length > 14)?"...":"";
      signups.push((e.gmail).substring(0,14) +a);
    }
  });
}
function loadForm(obj){
    //Phase 1—GMAIL
    var x = document.createElement("div");
    x.className = "studentGmail";
    x.innerHTML = obj.gmail;
    document.getElementById("AoE").appendChild(x);
    //Last Phase: Getting the Buttons
    var accButton = document.createElement("div");
    accButton.innerHTML = "Accept";
    var rejButton = document.createElement("div");
    rejButton.innerHTML = "Reject";
    document.getElementById("AoE").appendChild(accButton);
    document.getElementById("AoE").appendChild(rejButton);
    rejButton.id = "rejButton";
    accButton.id = "accButton";
    rejButton.className = "tryButton";
    accButton.className = "tryButton";
}
var signups = [];
var accEmails = [];
var rejEmails = [];
var currentForm = [];
var applicants = [{gmail: "HAHAHAHAHAHAHAHA", acceptedTEMP: true},{gmail: "INeverGetRejected@gmail.com",acceptedTEMP: true},{gmail: "skdjadwjdwqcjscfeni", acceptedTEMP: false},{gmail: "bob@gmail.com"}, {gmail: "jerry@gmail.com"},{gmail: "john@gmail.com"}];
var accepted = [];//By default, those with a property acceptedTEMP = true will be accepted
var rejected = [];//opposite of above
var nullApplicants = [] //pass in the applicant objects, @backend that's your job. These are placeholders
var sampObj = {
  gmail: "realCoolKid@gmail.com",
  name: "George Washington",
  grade: "12",
}
loadForm(sampObj);
filter();
createSides(signups, accEmails, rejEmails);
