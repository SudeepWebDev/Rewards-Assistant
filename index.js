// Set initial state of content to hidden
var content = document.querySelectorAll('.fade-in');
for (let i = 0; i < content.length; i++) {
    content[i].style.opacity = 0;
}

// Fade in content when user scrolls to it
window.addEventListener('scroll', revealContent);

function revealContent() {
    for (let i = 0; i < content.length; i++) {
        const windowHeight = window.innerHeight;
        const contentTop = content[i].getBoundingClientRect().top;
        const contentBottom = content[i].getBoundingClientRect().bottom;
        const contentPoint = 150;

        if (contentTop < windowHeight - contentPoint && contentBottom > 0) {
            content[i].style.opacity = 1;
            content[i].classList.add('active');
        } else {
            content[i].style.opacity = 0;
            content[i].classList.remove('active');
        }
    }
}


// 

var slideIndex = 1;

// Create dot elements for each slide
var slideContainer = document.querySelector('.slideshow-container');
var slideCount = slideContainer.querySelectorAll('.slide').length;
var dotsContainer = document.querySelector('.dots-container');
for (var i = 0; i < slideCount; i++) {
    var dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', function () {
        var dots = document.getElementsByClassName("dot");
        for (var i = 0; i < dots.length; i++) {
            if (dots[i] == this) {
                showSlides(slideIndex = i + 1);
            }
        }
    });
    dotsContainer.appendChild(dot);
}

var dots = document.getElementsByClassName("dot");
dots[0].classList.add("active-dot");
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

document.querySelector('.prev').addEventListener('click', function () {
    plusSlides(-1);
});

document.querySelector('.next').addEventListener('click', function () {
    plusSlides(1);
});

setInterval(function () {
    plusSlides(1);
}, 5000);
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove("center-image");
        slides[i].classList.remove("left-image");
        slides[i].classList.remove("right-image");
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active-dot");
    }

    var centerIndex = slideIndex - 1;
    var leftIndex = centerIndex - 1 < 0 ? slides.length - 1 : centerIndex - 1;
    var rightIndex = centerIndex + 1 >= slides.length ? 0 : centerIndex + 1;

    slides[centerIndex].style.display = "block";
    dots[centerIndex].classList.add("active-dot");
    slides[centerIndex].classList.add("center-image");

    slides[leftIndex].style.display = "block";
    slides[leftIndex].classList.add("left-image");

    slides[rightIndex].style.display = "block";
    slides[rightIndex].classList.add("right-image");

    // Additional handling for the first slide
    if (slideIndex === 1) {
        slides[slides.length - 1].style.display = "none";
        slides[slides.length - 1].classList.remove("center-image");
        slides[slides.length - 1].classList.remove("left-image");
        slides[slides.length - 1].classList.remove("right-image");
        // slides[slides.length - 1].classList.add("left-image");
    }
    if (slideIndex === slides.length) {
        slides[0].style.display = "none";
        slides[0].classList.remove("left-image");
        slides[0].classList.remove("right-image");
        slides[0].classList.remove("center-image");

        // Create a new slide element


    }


}
// JavaScript to set background colors for each feature

// JavaScript to set gradient backgrounds for each feature

const features = document.querySelectorAll('.feature');

const gradients = [
    'linear-gradient(45deg, #ff6b6b, #ffb8b8)',
    'linear-gradient(45deg, #74b9ff, #a9c6e8)',
    'linear-gradient(45deg, #55efc4, #a3e8d9)',
    'linear-gradient(45deg, #fdcb6e, #ffeaa7)',
    'linear-gradient(45deg, #a29bfe, #c9c6e4)',
    'linear-gradient(45deg, #fab1a0, #ffd8d6)'
];

features.forEach((feature, index) => {
    feature.style.background = gradients[index % gradients.length];
});

// 


const faqItems = document.querySelectorAll('#faq div.faq-items ol li');

faqItems.forEach(item => {
    const question = item.querySelector('h3');
    const answer = item.querySelector('p.answer');

    question.addEventListener('click', () => {
        item.classList.toggle('open');
        answer.style.display = item.classList.contains('open') ? 'block' : 'none';
    });
});

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const hamburgerIcon = document.querySelector('.hamburger i');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    hamburgerIcon.classList.toggle('fa-bars');
    hamburgerIcon.classList.toggle('fa-xmark');
});
