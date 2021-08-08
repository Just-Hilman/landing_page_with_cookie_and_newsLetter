// cookie notification panel shown
const notifPanel = document.querySelector(".notif-panel");
const notifButton = document.querySelector(".notif-button");

notifButton.addEventListener("click", () => {
    notifPanel.classList.remove("active");
    localStorage.setItem("notificationDisplay", "true");
});

setTimeout(() => {
    notifPanel.classList.add("active");
}, 2000);



// news panel shown
const newsPanel = document.querySelector(".news-panel");
const closeButton = document.querySelector(".close");

closeButton.addEventListener("click", () => {
    newsPanel.classList.remove("active");
    localStorage.setItem("newsDisplay", "true");
});

window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;

    if (Math.ceil(scrolled) > 428) {
        if (!localStorage.getItem("newsDisplay")) {
            newsPanel.classList.add("active");
        }
    }
});

// setTimeout(() => {
//     newsPanel.classList.add("active");
// }, 2000);