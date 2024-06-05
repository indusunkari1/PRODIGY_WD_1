window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#555';
    } else {
        navbar.style.backgroundColor = '#333';
    }
});

document.querySelector('.nav-link[href="#home"]').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#home').innerHTML = '<h1>WELCOME TO PRODIGY INFOTECH</h1>';
    window.location.hash = 'home';
});
