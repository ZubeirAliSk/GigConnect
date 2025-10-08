// Load header
fetch("header.html")
        .then(response => response.text())
        .then(data => {
                document.getElementById("header").innerHTML = data;
        });

// Load footer
fetch("footer.html")
        .then(response => response.text())
        .then(data => {
                document.getElementById("footer").innerHTML = data;
        });


// Example JS: Handle search
document.querySelector(".search-bar button").addEventListener("click", () => {
        const query = document.querySelector(".search-bar input").value;
        alert("Searching for: " + query);
});
// Init Swiper
var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: {
                el: ".swiper-pagination",
                clickable: true,
        },
        navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
        },
        breakpoints: {
                768: {
                        slidesPerView: 2
                }, // 2 slides on tablets
                1024: {
                        slidesPerView: 3
                } // 3 slides on desktop
        }
});

var categorySwiper = new Swiper(".cateogory_Swiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: false,
        pagination: {
                el: ".swiper-pagination",
                clickable: true,
        },
        navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
        },
        breakpoints: {
                768: {
                        slidesPerView: 2
                }, // 2 slides on tablets
                1024: {
                        slidesPerView: 5
                } // 3 slides on desktop
        }
});
var heroswiper = new Swiper(".heroSwiper", {
        slidesPerView: 1,
        loop: true,
        pagination: {
                el: ".swiper-pagination",
                clickable: true,
        },
        navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
        },
});

