// import '../styles/modern-normalise.css'
// import '../styles/style.css'
// // modern-nrm should have the least cascading priority, hence we will import it NEFORE styles.css


// --------------ABOUT TABS------------------------------


 const tabsContainer = document.querySelector(".about-tabs");

 const aboutSection = document.querySelector(".about-section");

 tabsContainer.addEventListener("click", (e) => {
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){

        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
       
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
 });


