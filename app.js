const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-list');
    // Toggle Nav
    burger.addEventListener('click',()=> {
        nav.classList.toggle('nav-active');

        // Burger animation
        burger.classList.toggle('toggle')
    });
}

navSlide();