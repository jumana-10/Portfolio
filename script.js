//header toggle

let menuBtn = document.getElementById('menuBtn')

menuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('fa-xmark')
})

// typing effect

let typed = new Typed('.auto-input', {
    strings: ['Front-End Developer', 'Freelancer!', 'UI Designer!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
})