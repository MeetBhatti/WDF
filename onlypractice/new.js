alert("if you refresh the Page may be you will lost your data.");

let themeBtn = document.getElementById("themeBtn");
if (themeBtn) {
    let current = "light";
    themeBtn.addEventListener("click", () => {
        if (current === "light") {
            current = "dark";
            document.querySelector("body").classList.add("dark");
            document.querySelector("body").classList.remove("white");
        }
        else {
            current = "light";
            document.querySelector("body").classList.add("white");
            document.querySelector("body").classList.remove("dark");
        }
        //alert("Hi");
    });
}
