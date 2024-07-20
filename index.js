//when contact button in navbar get clicked instagram and whatsapp icon bounce for 2sec
const contactbutton = document.querySelector(".contact-button");

contactbutton.addEventListener("click",()=>{
    const socialmediaimg = document.querySelectorAll(".social-media>a>img");
    socialmediaimg.forEach((icon)=>{
        icon.classList.add("bounce");
    });
    setTimeout(()=>{
        socialmediaimg.forEach((icon)=>{
            icon.classList.remove("bounce");
        });
    },4000);
});
