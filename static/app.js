const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //Toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        //Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.8}s`;
            }
        });
        //Burger animation
        burger.classList.toggle('toggle');
    });
}

navSlide();

/*const sections = document.querySelectorAll('section');
const bubble = document.querySelector('bubble');
const gradients = [
    "linear-gradient(to right top, #fafafa, #dadada)",
    "linear-gradient(to right top, #fafafa, #dadada)",
    "linear-gradient(to right top, #fafafa, #dadada)"
];

const options = {
    threshold: 0.7
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
    entries.forEach(entry => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=$className]`);
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left,
        };
        if (entry.isIntersecting) {
            bubble.style.setProperty("height", `{directions.height}px`);
            bubble.style.setProperty("top", `{directions.top}px`);
            bubble.style.setProperty("width", `{directions.width}px`);
            bubble.style.setProperty("left", `{directions.left}px`);
            bubble.style.background = gradients[gradientIndex];
        }
    });
}

sections.forEach(section => {
    observer.observe(section);
});

 const scroll = new SmoothScroll('a[href*="#"]');
$('a.nav-link').on('click', () => {
    const navbar = $('.navbar-collapse');
    if (navbar && navbar.hasClass('show')) {
      $('.navbar-toggler').click();
    }
  }) /*