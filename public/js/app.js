let db = firebase.database();
let auth = firebase.auth();
let savebtn = document.getElementById("save"); //SUBMIT BUTTON 
savebtn.addEventListener('click',function(){save()}); 


let d = new Date(); 
let curYear = d.getFullYear(); //get current year (first branch)

function save(){
    console.log("hi");
    /*
    db.ref(`${curYear}/${document.getElementById("name").value}`).set({
      name: document.getElementById("name").value,
      birthday: document.getElementById("birthday").value,
      grade: document.getElementById("grade").value
    })
    */
    let formSubmission={}; //final object with all questions 
    let section1=document.getElementById("1"); 

    if(section1.elements.length==3){ //Section 1 Requirements 
        formSubmission.birthday=section1.elements[1].value;
        formSubmission.grade=section1.elements[2].value;
    }
    
    
    db.ref(`Application/${curYear}/${section1.elements[0].value}`).set(formSubmission)



}




