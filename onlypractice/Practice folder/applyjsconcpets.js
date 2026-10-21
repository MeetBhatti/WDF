// alert("If you refresh the page then all the changes will be lost!");
console.log("heellllooo this is from starting page.");
let heading=document.querySelector("#heading");
let buttton = document.querySelector("#button");

buttton.addEventListener("click",()=>{
    
     heading.innerText="Hii dynamic change.";
    console.log("Hello form console.");
    alert("THIs is at run time.");
});
let list=document.querySelectorAll("li");
buttton.addEventListener("mouseenter",()=>{
    let newelement=document.createElement("li");
    newelement.innerText="This is new element.";
    list[0].appendChild(newelement);
});
const student = {
    name: "Meet",
    id: "25DCE010",
    number:"444444444",
    department:"Depstar CE"
};
let newbutton = document.querySelector("#newbutton");
if(newbutton)
{
    newbutton.addEventListener("click",()=>{
        console.log("Old name was : "+ student.name); 
        let newname =prompt("Enter New name");
        student.name.innerText = newname;
        alert("New name : "+ newname + " inserted successfully.");
        console.log("New name is : "+ student.name);
    })
}

