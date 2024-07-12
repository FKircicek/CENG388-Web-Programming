function darkMode(){
    var bodyDarkMode = document.querySelector("body");
    bodyDarkMode.classList.toggle("body-dark-mode");

    var navbarDarkMode = document.querySelector(".navbar");
    navbarDarkMode.classList.toggle("navbar-dark-mode");
    var aboutUs = document.querySelector(".about-us-button");
    aboutUs.classList.toggle("about-us-dark-mode");
    var headerDarkMode = document.querySelector(".header");
    headerDarkMode.classList.toggle("header-dark-mode");
    var buttonDarkMode = document.querySelector(".mode-button");
    buttonDarkMode.classList.toggle("button-dark-mode");

    var experienceDarkMode = document.querySelector(".experience");
    experienceDarkMode.classList.toggle("experience-dark-mode");

    var itemDarkMode = document.querySelectorAll(".item");
    for(let i = 0; i < itemDarkMode.length; i++){
        itemDarkMode[i].classList.toggle("item-dark-mode");
    }

    var footerDarkMode = document.querySelector(".footer");
    footerDarkMode.classList.toggle("footer-dark-mode");

    var contactInfoDarkMode = document.querySelector(".contact-info-button");
    contactInfoDarkMode.classList.toggle("contact-info-dark-mode");
    var locationDarkMode = document.querySelector(".location-button");
    locationDarkMode.classList.toggle("location-button-dark-mode");
}

function aboutUs(){
    var targetDiv = document.getElementById("about-us");
    if(targetDiv.style.display !== "none"){
        targetDiv.style.display = "none";
    }else{
        targetDiv.style.display = "block";
    }
}

function contactInfo(){
    var targetDiv = document.getElementById("contact-info");
    if(targetDiv.style.display !== "none"){
        targetDiv.style.display = "none";
    }else{
        targetDiv.style.display = "flex";
    }
}
function locations(){
    var targetDiv = document.getElementById("location");
    if(targetDiv.style.display !== "none"){
        targetDiv.style.display = "none";
    }else{
        targetDiv.style.display = "flex";
    }
}

function experience(){
    var name = document.getElementById("name").value;
    var targetDiv = document.getElementById("experience");
    var targetDiv2 = document.getElementById("experience2");
    targetDiv.style.display = "none";
    targetDiv2.style.display = "flex";
    document.getElementById("experience-name").innerHTML = name;
}

