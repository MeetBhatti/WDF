alert("If you refresh page then you will lost your data: ");
/*function printmsg()
{
    alert("Hello Everyone this is Meet Bhatti: ");
}
function whenblur()
{
let n2 = document.getElementById("n2");
n2.style.background= "red";
}
*/
/*let changeMode = document.querySelector("#changeModeButton");
let currentMode = light;
changeMode.addEventListener("click",()=>{
    
    if(currentMode==="light")
    {
        currentMode="dark";
        console.log(currentMode);
        document.style.background-color = "red";
    }
    else{
         currentMode="light";
        console.log(currentMode);
         document.style.background-color="blue";
    }
})*/
let themeBtn = document.getElementById("changeModeButton");

themeBtn.addEventListener("click", function(){

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.innerHTML = "☀️ Light Mode";
        console.log("Dark mode enabled");
    }
    else {
        themeBtn.innerHTML = "🌙 Dark Mode";
        console.log("Light mode enabled");
    }
});