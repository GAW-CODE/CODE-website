//FE STUFF AND SOME FUNCTIONALITY IDK THIS IS BASICALLY FOR STUFF I CAN'T DO WITH HTML AND CSS —Brendan
String.prototype.removeExerpt = (str, ex) =>{
  return str.substring(0, str.indexOf(ex)) + str.substring(str.indexOf(ex) + ex.length + 1, str.length);
} // don't touch pls
let list = [];
function createSides(data, a, r){
  sideFill(data, a, r);
  document.getElementsByClassName("sideItem")[0].classList += " firstItem";
  document.getElementsByClassName("indicator")[0].innerHTML = (data.length) + " / "+(data.length)+ " Applicants Left";
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
function update(data, a,r){
  for(var i = 1; i < document.getElementsByClassName("sideItem").length; i++){
      document.getElementById("sideBar").removeChild( document.getElementsByClassName("sideItem")[i]);
  }
  sideFill(data, a, r);
  document.getElementsByClassName("indicator")[0].innerHTML = (data.length) + " / "+(data.length)+ " Applicants Left";
}
function sideFill(data, a, r){
  for(var i = 0; i < data.length; i++){
    var x = document.createElement("div");
    x.className = "sideItem";
    x.innerHTML = data[i];
    list.push(x);
    document.getElementById("sideBar").appendChild(x);
  }for(var i = 0; i < a.length; i++){
    var x = document.createElement("div");
    x.className = "sideItem";
    x.classList += " acceptedStudent";
    x.innerHTML = a[i];
    list.push(x);
    document.getElementById("sideBar").appendChild(x);
  }for(var i = 0; i < r.length; i++){
    var x = document.createElement("div");
    x.className = "sideItem";
    x.classList += " rejectedStudent";
    x.innerHTML = r[i];
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
var signups = [];
var accEmails = [];
var rejEmails = [];
var accepted = [{gmail: "HAHAHAHAHAHAHAHA", acceptedTEMP: true},{gmail: "INeverGetRejected@gmail.com",acceptedTEMP: true}];//By default, those with a property acceptedTEMP = true will be accepted
var rejected = [{gmail: "skdjadwjdwqcjscfeni", acceptedTEMP: false}];//opposite of above
var nullApplicants = [{gmail: "bob@gmail.com"}, {gmail: "jerry@gmail.com"},{gmail: "john@gmail.com"}] //pass in the applicant objects, @backend that's your job. These are placeholders
nullApplicants.forEach((e)=>{
    e.acceptedTEMP = false; // delete this when we integrate a database
    var a = (e.gmail.length > 14)?"...":"";
    signups.push((e.gmail).substring(0,14) +a);
}); //By default, the applicants will be set to not accepted.
accepted.forEach((e)=>{
  var a = (e.gmail.length > 14)?"...":"";
    accEmails.push((e.gmail).substring(0,14)+a);
    // b = a.substring(0, 10);
});
rejected.forEach((e)=>{
  var a = (e.gmail.length > 14)?"...":"";
    rejEmails.push((e.gmail).substring(0,14)+a);
    // b = a.substring(0, 10);
});

createSides(signups, accEmails, rejEmails);
