var x = document.getElementbyId("signUpTab");
var y=document.getElementById("loginTab");
x.addEventListener("click", ()=>{
  switchTab();
});
y.addEventListener("click", ()=>{
  switchTab();
})
var onLog = true;
function switchtab(){
    if(onLog){
         x.style.display = "inline-block";
        y.style.display = "none";
        document.getElementById("signUp").backgroundColor = "white";
        document.getElementById("loginT").backgroundColor = "#666";
        x.style.backgroundColor  = "white";
        y.style.backgroundColor = "#666";
    }else{
        x.style.display = "none";
        y.style.display = "inline-block";
        document.getElementById("signUp").backgroundColor = "#666";
        document.getElementById("loginT").backgroundColor = "white";
        x.style.backgroundColor  = "#666";
        y.style.backgroundColor = "white";
    }
    onLog = !onLog;
}
