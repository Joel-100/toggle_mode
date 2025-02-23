const themeToggleBtn = document.querySelector(".theme-toggle")
themeToggleBtn.addEventListener("click", ()=>{
    //toggling the darkmode css in the body
    document.body.classList.toggle("dark-mode")
    //update button based on the theme
    if(document.body.classList.contains("dark-mode")){
        themeToggleBtn.textContent = "switch to light mode"
    }
    else {
        themeToggleBtn.textContent = "switch to dark mode"
    }
})