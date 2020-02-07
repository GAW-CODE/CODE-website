let db = firebase.database();
let auth = firebase.auth();
let savebtn = document.getElementById("save"); //SUBMIT BUTTON 
savebtn.addEventListener('click',function(){save()}); 


let d = new Date(); 
let curYear = d.getFullYear(); //get current year (first branch)

function save(){
    console.log("hi");
    let formSubmission={}; //final object with all questions 
    let section1=document.getElementById("1"); //all info saved under name branch
    let section; 
    sendData(); //check each field and send to DB

    
    function sendData(){
        for(let i = 1; i<11; i++){ //question sections
            section=document.getElementById(`${i}`) 
            for(let elementNum=0; elementNum<section.length; elementNum++){ //questions in each section
                if(section[elementNum].value!=""){ //verify each question is filled
                    formSubmission[`${i}_${elementNum}`]=section[elementNum].value; //object to be pushed
                }
            }
        }
    }
    console.log(formSubmission)
    db.ref(`applications/${curYear}/${section1.elements[0].value}`).set(formSubmission)
}




