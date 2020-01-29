
document.getElementById("signUpTab").addEventListener("click", ()=>{
  switchTab(true);
});
document.getElementById("loginTab").addEventListener("click", ()=>{
  switchTab(false);
})
function switchTab(t){
    if(t){
      document.getElementById("signUp").style.display = "none";
      document.getElementById("login").style.display = "inline-block";
      document.getElementById("signUpTab").className = "onTab";
      document.getElementById("loginTab").className = "offTab";
      document.getElementById("temp").innerHTML = "on signUp";
    }else{

        document.getElementById("signUp").style.display = "inline-block";
        document.getElementById("login").style.display = "none";
        document.getElementById("signUpTab").className = "offTab";
        document.getElementById("loginTab").className = "onTab";
        document.getElementById("temp").innerHTML = "on Login";
    }
}
