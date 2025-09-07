const body = document.querySelector("body"),
     nav= document.querySelector("nav"),
     modeToggle = document.querySelector(".dark-light"),
     seachToggle= document.querySelector(".searchToggle");
// Toggle dark mode
modeToggle.addEventListener("click", () => {
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");
    
});

// Toggle search box
seachToggle.addEventListener("click", () => {
    seachToggle.classList.toggle("active");
    
});