function searchSection() {
    let query = document.getElementById("text").value.trim().toLowerCase() ; 
    let sections = {
        "home": "home",
        "about": "about",
        "services": "services",
        "doctors": "doctors",
        "contact": "contact"
    } ; 
    if(sections[query]) {
        document.getElementById(sections[query]).scrollIntoView({behavior:"smooth"}) ;
    } 
    else {
        alert("Section Not Found!");
    }
}

let ScrollTopLink = document.getElementById("ScrollTopLink") ;

window.addEventListener("scroll" , function() {
   if(window.scrollY > 200) {
    ScrollTopLink.style.display="block" ;
   }     
   else {
    ScrollTopLink.style.display= "none";
   }
});


let model = document.getElementById("registerModel") ;
let btn = document.getElementById("fa-circle-user") ;
let closeBtn = document.querySelector(".close");

btn.onclick = function() {
    model.style.display = "block"; 
}

closeBtn.onclick = function() {
    model.style.display = "none" ; 
}

window.onclick = function(event) {
    if(event.target == model) {
        model.style.display = "none" ; 
    }
}





function registrationButton(e) {
    const name = document.getElementById("registerName").value;
    const email = document.getElementById("registerEmail").value ; 
    const password = document.getElementById("registerPassword").value;

    localStorage.setItem("userName" , name);
    localStorage.setItem("userEmail" , email); 
    localStorage.setItem("userPassword" , password);
    
    alert("Registration was successful , Hello to Our Health Care Website") ;

    document.getElementById("registerModel").style.display = "none" ; 
}


  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.navbar ul');

  burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
