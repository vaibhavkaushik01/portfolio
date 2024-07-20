//when contact button in navbar get clicked instagram and whatsapp icon rotate for 2sec
const contactbutton = document.querySelectorAll(".contact-button");
console.log(contactbutton);

contactbutton[0].addEventListener("click",()=>{
    const socialmediaimg = document.querySelectorAll(".social-media>a>img");
    socialmediaimg.forEach((icon)=>{
        icon.classList.add("rotate");
    });
    setTimeout(()=>{
        socialmediaimg.forEach((icon)=>{
            icon.classList.remove("rotate");
        });
    },4000);
});

contactbutton[1].addEventListener("click",()=>{
    const socialmediaimg = document.querySelectorAll(".social-media>a>img");
    socialmediaimg.forEach((icon)=>{
        icon.classList.add("rotate");
    });
    setTimeout(()=>{
        socialmediaimg.forEach((icon)=>{
            icon.classList.remove("rotate");
        });
    },4000);
});


// functionality for collapsed navbar
document.getElementById("collapsed-navbar").addEventListener("click",()=>{
    document.querySelector(".hidden-navbar").classList.add("hidden-navbar-translate-class");
});


//if any button in hidden navbar is clicked navbar hide again
const hidden_nav_elem = document.querySelectorAll(".hidden-navbar-elem");
hidden_nav_elem.forEach((elem)=>{   
    elem.addEventListener("click",()=>{
        document.querySelector(".hidden-navbar").classList.remove("hidden-navbar-translate-class");
    });
});