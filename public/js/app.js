let db = firebase.database();
let auth = firebase.auth();
let savebtn = document.getElementById("save"); //SUBMIT BUTTON 
savebtn.addEventListener('click',function(){save()}); 


let d = new Date(); 
let curYear = d.getFullYear(); //get current year (first branch)

function save(){
    console.log("hi");
    let formSubmission={}; //final object with all questions 
    let section1=document.getElementById("1");
    let section; 

    let submitToFirebase=(()=>{ 
        for(let i = 1; i<11; i++){ //question sections
            section=document.getElementById(`${i}`) 
            for(let elementNum=0; elementNum<section.length; elementNum++){ //questions in each section
                if(section.elements[elementNum].type==="text" && section[elementNum].value!=""){ //verify only answer is being retrieved and filled in 
                    console.log(`${i}_${elementNum}`)
                    formSubmission[`${i}_${elementNum}_Q: `]=document.getElementById(`${i}_${elementNum}`).innerHTML; //questions, retrieve using their id in the p tags before the answer
                    formSubmission[`${i}_${elementNum}`]=section[elementNum].value; //object to be pushed
                }
            }
        }
    });
    submitToFirebase(); 
    console.log(formSubmission)
    db.ref(`applications/${curYear}/${section1.elements[0].value}`).set(formSubmission)
}




