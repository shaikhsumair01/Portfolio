"use strict";

//Read_more_button 
function More_about_me(){
    const hidden = document.querySelector(".hidden-text");
    const button = document.querySelector(".more-description");
    if(hidden.style.display==="none"){
        hidden.style.display="block";
        button.textContent="Less about me...";
    }
    else{
        hidden.style.display="none";
        button.textContent="More about me...";
    }
}


// Day and night toggle
function toggle(){
const theme = document.getElementById("Theme-toggle");
const logo = document.querySelector(".logo");
const root = document.documentElement;

    if(theme.checked){
        root.style.setProperty('--primary-color', '#1986a0'); 
        root.style.setProperty('--secondary-color', '#B9BCE0');
        root.style.setProperty('--main-background', '#04061F');
        root.style.setProperty('--text', '#fff');
        root.style.setProperty('--num', '#B9BCE0');
        root.style.setProperty('--gradient-1', '#36384C');
        root.style.setProperty('--gradient-2', '#030416');
        logo.src = "./Images/Name_logo_dark.png";
        
    }
        else{
        root.style.setProperty('--primary-color', '#e37527');  
        root.style.setProperty('--secondary-color', '#FFFF99'); 
        root.style.setProperty('--text', '#04061F');
        root.style.setProperty('--num', '#E6E600');
        root.style.setProperty('--main-background', '#FCF1E9');
        root.style.setProperty('--gradient-1', '#fff');
        root.style.setProperty('--gradient-2', '#FFFF33');
        logo.src = "./Images/Name_logo_light.PNG";
    }
}
//  Sticky-navigation:
const Home = document.querySelector('.Home');
const observer = new IntersectionObserver(function(entries)
{const ent = entries[0];
    if(ent.isIntersecting === false){
        document.body.classList.add('sticky');
    }
    else{
        document.body.classList.remove('sticky');
    }
},
{
    root:null,
    threshold:0,
    rootMargin: "-100px",
});
observer.observe(Home);
// Mobile-navigation
const btnNav = document.querySelector('.mobile-nav-button');
const Header = document.querySelector('header');
btnNav.addEventListener('click', function(){
    Header.classList.toggle('nav-open');})

// Implementing smooth scroll (implementing it using js so that it can be rendered in other browsers like opera and safari.)
const alllinks = document.querySelectorAll(".nav-li");
alllinks.forEach(function(link){
link.addEventListener('click', function(e){
    e.preventDefault();
    const href = link.getAttribute('href');

    // Scroll to other links
    if(href.startsWith('#')){
        const section = document.querySelector(href);
        section.scrollIntoView({behavior:'smooth'});
    }
    // Close mobile nav
    if(link.classList.contains('nav-li'))
        Header.classList.toggle('nav-open')
});
});
