// step 1 to learn how to print messge when page relod or refresh
alert("You may lost your data: ");

// step 2 on home page toggle change mode  button 
let themeBtn = document.querySelector("#themeBtn");
let current = "light";
themeBtn.addEventListener("click",()=>{
    if(current==="light")
    {
        current = "dark";
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");
    }
    else{
        current ="light";
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");
    }
});
// step 3 on login page check validation

let themeBtn = document.getElementById("themeBtn");
let current = "light";
themeBtn.addEventListener("click",()=> {
    if(current==="light")
    {   current="dark";
        document.querySelector("body").classList.add("dark");
           document.querySelector("body").classList.remove("white");
    }
    else{
        current="light"; 
        document.querySelector("body").classList.add("white");
           document.querySelector("body").classList.remove("dark"); 
    }
    //alert("Hi");
}); 