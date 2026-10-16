// Сайттың төменгі жағында ағымдағы жылды көрсету
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Мәзірдегі сілтемелерді басқанда тиісті бөлімге өту
const navigationLinks = document.querySelectorAll(".nav a");

navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        console.log("Бөлім ашылды:", link.textContent);
    });
});

// Жобаларды басқанда консольге ақпарат шығару
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(function (card, index) {
    card.addEventListener("mouseenter", function () {
        console.log("Жоба нөмірі:", index + 1);
    });
});